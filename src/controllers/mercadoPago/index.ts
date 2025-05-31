import { Request, Response } from "express";
import mercadopago from "../../services/mercadoPago"; // importando sua instância configurada
import { Preference } from "mercadopago";

export const criarPagamento = async (req: Request, res: Response): Promise<void> => {
    const { testeId, userEmail } = req.body;

    try {
        const preferenceClient = new Preference(mercadopago);

        const preference = {
            external_reference: testeId,
            metadata: { testeId },
            ...(userEmail && { payer: { email: userEmail } }),
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
            payment_methods: { installments: 12 },
            auto_return: "approved",
            back_urls: {
                success: "https://78e6-2804-612c-c202-cb00-4c6e-5378-a8d3-e3f1.ngrok-free.app/?status=sucesso",
                failure: "https://78e6-2804-612c-c202-cb00-4c6e-5378-a8d3-e3f1.ngrok-free.app/?status=falha",
                pending: "https://78e6-2804-612c-c202-cb00-4c6e-5378-a8d3-e3f1.ngrok-free.app/api/mercado-pago/pending",
            },

        };

        const createdPreference = await preferenceClient.create({ body: preference });

        if (!createdPreference.id) throw new Error("No preference ID returned");

        res.json({
            preferenceId: createdPreference.id,
            initPoint: createdPreference.init_point,
        });

    } catch (err: any) {
        console.error("Erro ao criar preferência:", err);

        if (err.response) {
            console.error("Detalhes da resposta:", {
                status: err.response.status,
                data: err.response.data,
            });
        }

        res.status(500).json({ error: "Erro ao criar preferência" });
    }
};

export default criarPagamento;
