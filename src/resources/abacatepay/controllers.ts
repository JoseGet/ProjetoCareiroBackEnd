import { Request, Response } from "express";
import { AbacatePay } from "@abacatepay/sdk";
import prisma from '../../config/dbConfig';

export const criarPagamentoPix = async (req: Request, res: Response): Promise<void> => {

    const {
        method,
        data: {
            amount,
            description,
            expiresIn,
            customer: {
                name,
                email,
                taxId,
                cellphone,
            },
            metadata: {
                pedidoId
            }
        },
    } = req.body;

    try {
        const response = await fetch("https://api.abacatepay.com/v2/transparents/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.ABACATEPAY_API_KEY}`
            },
            body: JSON.stringify({
                method,
                data: {
                    amount,
                    description,
                    expiresIn,
                    customer: {
                        name,
                        email,
                        taxId,
                        cellphone
                    },
                    metadata: {
                        pedidoId
                    }
                },
            })
        });

        atualizarPedido(pedidoId, (await response.json()).id)

        const paymentData = await response.json();
        res.status(response.status).json(paymentData);

    } catch (error) {
        console.error("Error creating payment:", error);
        res.status(500).json({ error: "Internal server error" });
    }

}

async function atualizarPedido(pedidoId: number, pix_payment_id: string) {
    try {
        const pedidoAtualizado = await prisma.pedido.update({
            where: { pedido_id: pedidoId },
            data: {
                pix_payment_id,
            }
        });
        console.log("Pedido atualizado com sucesso:", pedidoAtualizado);
    } catch (error) {
        console.error("Error updating pedido:", error);
    }
}

export default criarPagamentoPix