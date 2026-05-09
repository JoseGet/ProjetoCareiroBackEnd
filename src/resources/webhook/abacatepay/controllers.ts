import { Request, Response } from "express";
import crypto from "node:crypto";
import { getMessaging } from 'firebase-admin/messaging';
import prisma from '../../../config/dbConfig';

const ABACATEPAY_PUBLIC_KEY  = process.env.ABACATEPAY_PUBLIC_KEY || "";

export const webhookPixPago = async (req: Request, res: Response) => {
  try {
    
    if (req.query.webhookSecret !== process.env.ABACATEPAY_WEBHOOK_SECRET) {
      res.status(401).json({ error: "Unauthorized: Invalid Webhook Secret" });
      return
    }

    console.log("Headers recebidos:", req.headers);
    
    const signature = req.header("X-Webhook-Signature")

    if (!signature) {
      res.status(400).json({ error: "Missing signature header" });
      return
    }

    const isRawBodyValid = verifyAbacateSignature(JSON.stringify(req.body), signature);

    if (!isRawBodyValid) {
      console.error("Assinatura inválida detectada!");
      res.status(403).json({ error: "Invalid signature" });
      return
    }

    const event = req.body;
    
    console.log(`Evento recebido: ${event.type} para o pedido: ${event.data?.metadata?.pedidoId}`);
    
    const customerEmail = event.data?.customer?.email;

    const fcmClientToken = await prisma.cliente.findUnique({
      where: { email: customerEmail },
      select: { fcmToken: true }
    });

    const message = {
      notification: {
        title: "Pagamento Recebido!",
        body: `Oba! Seu Pix de R$${(event.data.amount / 100).toFixed(2)} foi recebido.`
      },
      data: {
        type: "PAYMENT_CONFIRMED",
        code: "10002",
        message: "Oba! Seu Pix foi recebido.",
        valor: String(event.data.amount)
      },
      token: fcmClientToken.fcmToken
    }

    getMessaging().send(message).then((response: any) => {
      console.log('Notificação enviada com sucesso:', response);
    }).catch((error: any) => {
      console.error('Erro ao enviar notificação:', error);
    })

    const { pedidoId } = event.data.metadata.pedidoId;
    await atualizarPedido(pedidoId);

    
    res.status(200).send("Webhook received");

  } catch (error) {
    console.error("Erro no processamento do Webhook:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
    

export function verifyAbacateSignature(rawBody: string, signatureFromHeader: string) {
  try {
    const bodyBuffer = Buffer.from(rawBody, "utf8")

    const expectedSig = crypto
      .createHmac("sha256", ABACATEPAY_PUBLIC_KEY)
      .update(bodyBuffer)
      .digest("base64"); 

    const A = Buffer.from(expectedSig);
    const B = Buffer.from(signatureFromHeader);

    return A.length === B.length && crypto.timingSafeEqual(A, B);
  } catch (e) {
    return false;
  }
}

async function atualizarPedido(pedidoId: number) {
    try {
        const pedidoAtualizado = await prisma.pedido.update({
            where: { pedido_id: pedidoId },
            data: {
                status: "CONFIRMADO",
            }
        });
        console.log("Pedido atualizado com sucesso:", pedidoAtualizado);
    } catch (error) {
        console.error("Error updating pedido:", error);
    }
}