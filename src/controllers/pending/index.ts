import { Request, Response } from "express";
import { Payment } from "mercadopago";
import mercadopago from "../../services/mercadoPago";

/**
 * Rota GET que trata o retorno do Mercado Pago após o cliente clicar em "Voltar para o site"
 * no fluxo de pagamento via Pix ou Cartão.
 */
export async function mercadoPagoReturnHandler(req: Request, res: Response) {
  const paymentId = req.query.payment_id as string;
  const testeId = req.query.external_reference as string;

  if (!paymentId || !testeId) {
    return res.status(400).json({ error: "Invalid request" });
  }

  try {
    const paymentClient = new Payment(mercadopago);
    const paymentResponse = await paymentClient.get({ id: paymentId });
    const paymentData = paymentResponse;

    const isPaid =
      paymentData.status === "approved" || paymentData.date_approved !== null;

    if (isPaid) {
      // Pagamento aprovado → redirecionar para sucesso
      return res.redirect(`/?status=sucesso`);
    }

    // Pagamento não concluído → redirecionar para página inicial
    return res.redirect(`/`);
  } catch (error) {
    console.error("Erro ao verificar pagamento:", error);
    return res.status(500).json({ error: "Erro interno ao verificar pagamento" });
  }
}
