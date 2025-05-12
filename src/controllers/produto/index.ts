import { Request, Response } from 'express';
import prisma from '../../config/dbConfig'; // Importe o cliente Prisma corretamente
import { produto } from '@prisma/client'; // Importando o tipo 'produto' gerado pelo Prisma


export const getProdutos = async (req: Request, res: Response) => {
  try {
    // Utilizando o Prisma com a tipagem explícita
    const result: produto[] = await prisma.produto.findMany();
    console.log("aqui no produtos");
    res.json(result);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).send('Erro ao buscar produtos');
  }
};

export const getProdutoById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  try {
    // Tipando a resposta como 'produto'
    const result: produto | null = await prisma.produto.findUnique({
      where: {
        id_produto: id.toString(),
      },
    });

    if (result) {
      res.json(result);
    } else {
      res.status(404).send('Produto não encontrado');
    }
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).send('Erro ao buscar produto');
  }
};

export const createProduto = async (req: Request, res: Response) => {
  const { nome, categoria, preco, qntd, vendedorId, pedidoId}: 
  { nome: string, categoria: string, unidade: string, preco: number, qntd: number, vendedorId: string, pedidoId: number} = req.body;
  try {
    const result: produto = await prisma.produto.create({
      data: {
        nome,
        categoria,
        // unidade, // Removed as it does not exist in the Prisma schema
        preco,
        qntd, // Provide a default value or retrieve it from req.body
        data_coleta: new Date(), // Provide a default value or retrieve it from req.body
        vendedor: {
          connect: { id_vendedor: vendedorId }, 
        },
        pedido: {
          connect: { pedido_id: pedidoId }, 
        },
      },
    });
    res.status(201).json(result);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).send('Erro ao criar produto');
  }
};

export const updateProduto = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const { nome, categoria, preco }: { nome: string, categoria: string, unidade: string, preco: number } = req.body;
  try {
    const result: produto | null = await prisma.produto.update({
      where: {
        id_produto: id.toString(),
      },
      data: {
        nome,
        categoria,
        preco,
      },
    });

    if (result) {
      res.json(result);
    } else {
      res.status(404).send('Produto não encontrado');
    }
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).send('Erro ao atualizar produto');
  }
};

export const deleteProduto = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  try {
    const result: produto | null = await prisma.produto.delete({
      where: {
        id_produto: id.toString(),
      },
    });

    if (result) {
      res.json(result);
    } else {
      res.status(404).send('Produto não encontrado');
    }
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    res.status(500).send('Erro ao deletar produto');
  }
};

export default {
  getProdutos,
  getProdutoById,
  createProduto,
  updateProduto,
  deleteProduto,
};
