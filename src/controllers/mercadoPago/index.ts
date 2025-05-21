import { Request, Response } from 'express';
import { payment } from '../../services/mercadoPago';

export const criarPagamentoPix = async (req: Request, res: Response) => {
  try {
    const { valor, descricao } = req.body;
    const usuario = req.user as { email: string; nome?: string };

    const result = await payment.create({
      body: {
        transaction_amount: Number(valor),
        description: descricao || 'Pagamento via Pix',
        payment_method_id: 'pix',
        payer: {
          email: usuario.email,
          first_name: usuario.nome || 'Cliente',
        },
      },
    });

    const data = result.point_of_interaction?.transaction_data;

    if (!data) {
      return res.status(500).json({ error: 'Dados de transação não disponíveis' });
    }

    res.status(201).json({
      qr_code_base64: data.qr_code_base64,
      qr_code: data.qr_code,
      status: result.status,
      id: result.id,
    });
  } catch (error: any) {
    console.error('Erro ao criar pagamento:', error.message || error);
    res.status(500).json({ error: 'Erro ao criar pagamento' });
  }
};
