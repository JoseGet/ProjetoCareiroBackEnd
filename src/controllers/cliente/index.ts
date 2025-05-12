import { Request, Response } from 'express';
import prisma from '../../config/dbConfig'; // PrismaClient instanciado
import { cliente } from '@prisma/client'; // Importando o tipo cliente do Prisma

export const listarClientes = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("aqui no cliente");
    const clientes: cliente[] = await prisma.cliente.findMany();
    res.json(clientes);
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    res.status(500).send('Erro ao buscar clientes');
  }
};

export const listarClientesPorId = async (req: Request, res: Response): Promise<void> => {
  const { cpf } = req.params;
  try {
    const cliente = await prisma.cliente.findUnique({
      where: { cpf },
    });

    if (!cliente) {
      res.status(404).send('Cliente não encontrado');
      return;
    }

    res.json(cliente);
  } catch (error) {
    console.error('Erro ao buscar cliente:', error);
    res.status(500).send('Erro ao buscar cliente');
  }
};

export const criarCliente = async (req: Request, res: Response): Promise<void> => {
  const { cpf, nome, email, telefone } = req.body;
  console.log("aqui no cliente criar cliente", cpf, nome, email, telefone);
  try {
    const novoCliente = await prisma.cliente.create({
      data: { cpf, nome, email, telefone },

    });

    res.status(201).json(novoCliente);
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    res.status(500).send('Erro ao criar cliente');
  }
};

export const atualizarCliente = async (req: Request, res: Response): Promise<void> => {
  const { cpf } = req.params;
  const { nome, email, telefone } = req.body;

  try {
    const clienteAtualizado = await prisma.cliente.update({
      where: { cpf },
      data: { nome, email, telefone },
    });

    console.log('Cliente atualizado:', clienteAtualizado);
    res.json(clienteAtualizado);
  } catch (error: any) {
    if (error.code === 'P2025') {
      res.status(404).send('Cliente não encontrado');
    } else {
      console.error('Erro ao atualizar cliente:', error);
      res.status(500).send('Erro ao atualizar cliente');
    }
  }
};

export const deletarCliente = async (req: Request, res: Response): Promise<void> => {
  const { cpf } = req.params;

  try {
    const clienteDeletado = await prisma.cliente.delete({
      where: { cpf },
    });

    res.json(clienteDeletado);
  } catch (error: any) {
    if (error.code === 'P2025') {
      res.status(404).send('Cliente não encontrado');
    } else {
      console.error('Erro ao deletar cliente:', error);
      res.status(500).send('Erro ao deletar cliente');
    }
  }
};

export default {
  listarClientes,
  listarClientesPorId,
  criarCliente,
  atualizarCliente,
  deletarCliente,
};
