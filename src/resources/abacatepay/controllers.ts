import { Request, Response } from "express";
import { AbacatePay } from "@abacatepay/sdk";

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
            }
        }
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
                    }
                },
            })
        });

        const paymentData = await response.json();
        res.status(response.status).json(paymentData);

    } catch (error) {
        console.error("Error creating payment:", error);
        res.status(500).json({ error: "Internal server error" });
    }

}

export default criarPagamentoPix