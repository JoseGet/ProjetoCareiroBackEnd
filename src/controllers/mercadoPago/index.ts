import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { MercadoPagoConfig, Preference } from 'mercadopago';


export const criarPagamento = async (req: Request, res: Response): Promise<void> => {
  const { testeId, userEmail } = req.body;

  try {
    const mercadoPagoClient = new MercadoPagoConfig({ accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN as string });
    const preferenceClient = new Preference(mercadoPagoClient);

    const preference = {
      external_reference: testeId,
      metadata: {
        testeId, // Será convertido para snake_case automaticamente
      },
      ...(userEmail && {
        payer: {
          email: userEmail,
        },
      }),
      items: [
        {
          id: "id-do-seu-produto",
          description: "Descrição do produto",
          title: "Nome do produto",
          quantity: 1,
          unit_price: 9.99,
          currency_id: "BRL",
          category_id: "category",
        },
      ],
      payment_methods: {
        installments: 12,
      },
      auto_return: "approved",
      back_urls: {
        success: `${req.headers.origin || 'http://localhost:3000'}/?status=sucesso`,
        failure: `${req.headers.origin || 'http://localhost:3000'}/?status=falha`,
        pending: `${req.headers.origin || 'http://localhost:3000'}/api/mercado-pago/pending`,
      },
    };

    const createdPreference = await preferenceClient.create({ body: preference });

    if (!createdPreference.id) {
      throw new Error("No preference ID returned");
    }

    res.json({
      preferenceId: createdPreference.id,
      initPoint: createdPreference.init_point,
    });
  } catch (err) {
    console.error("Erro ao criar preferência:", err);
    res.status(500).json({ error: "Erro ao criar preferência" });
  }
}

export default criarPagamento;