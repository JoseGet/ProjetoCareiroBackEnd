import { Request, Response } from "express";
import crypto from "node:crypto";

const ABACATEPAY_PUBLIC_KEY = "t9dXRhHHo3yDEj5pVDYz0frf7q6bMKyMRmxxCPIPp3RCplBfXRxqlC6ZpiWmOqj4L63qEaeUOtrCI8P0VMUgo6iIga2ri9ogaHFs0WIIywSMg0q7RmBfybe1E5XJcfC4IW3alNqym0tXoAKkzvfEjZxV6bE0oG2zJrNNYmUCKZyV0KZ3JS8Votf9EAWWYdiDkMkpbMdPggfh1EqHlVkMiTady6jOR3hyzGEHrIz2Ret0xHKMbiqkr9HS1JhNHDX9";

export const webhookPixPago = async (req: Request, res: Response) => {
  try {
    
    if (req.query.webhookSecret !== process.env.ABACATEPAY_WEBHOOK_SECRET) {
      res.status(401).json({ error: "Unauthorized: Invalid Webhook Secret" });
      return
    }

    console.log("Headers recebidos:", req.headers);
    
    const signature = req.headers["X-Webhook-Signature"] as string;

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

    if (event.type === "billing.paid") {
       const { pedidoId } = event.data.metadata;
       console.log(`Pagamento confirmado para o pedido: ${pedidoId}`);
    }

    
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