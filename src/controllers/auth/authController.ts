import { Request, Response, NextFunction } from "express";
import prisma from "../../config/dbConfig";
import bcrypt from "bcrypt";
import { gerarToken } from "./jwt";

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      res.status(400).json({ error: 'Email e senha são obrigatórios' });
      return;
    }

    const cliente = await prisma.cliente.findUnique({ where: { email } });

    if (!cliente) {
      res.status(401).json({ error: 'Credenciais inválidas' });
      return;
    }

    const senhaCorreta = await bcrypt.compare(senha, cliente.senha);

    if (!senhaCorreta) {
      res.status(401).json({ error: 'Credenciais inválidas' });
      return;
    }

    const token = gerarToken({ cpf: cliente.cpf, email: cliente.email });

    res.status(200).json({
      token,
      cliente: {
        cpf: cliente.cpf,
        nome: cliente.nome,
        email: cliente.email
      }
    });
  } catch (error) {
    next(error); // manda pro middleware de erro
  }
};
export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { cpf, nome, email, telefone, senha } = req.body;

    if (!cpf || !nome || !email || !telefone || !senha) {
      res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      return;
    }

    const senhaSegura = await bcrypt.hash(senha, 10);

    const novoCliente = await prisma.cliente.create({
      data: {
        cpf,
        nome,
        email,
        telefone,
        senha: senhaSegura
      }
    });

    res.status(201).json(novoCliente);
  } catch (error) {
    next(error); // manda pro middleware de erro
  }
};