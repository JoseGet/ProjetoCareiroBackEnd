import { Request, Response } from 'express';
import prisma from '../../config/dbconn';
import { associacao } from '@prisma/client';

export const getAssociacoes = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("aqui no associacao");
    const associacoes: associacao[] = await prisma.associacao.findMany();
    res.json(associacoes);
  } catch (error) {
    console.error('Erro ao buscar associações:', error);
    res.status(500).send('Erro ao buscar associações');
  }
};

export const getAssociacaoById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const associacao: associacao | null = await prisma.associacao.findUnique({
      where: { id_associacao: id },
    });

    if (!associacao) {
      res.status(404).send('Associação não encontrada');
      return;
    }

    res.json(associacao);
  } catch (error) {
    console.error('Erro ao buscar associação:', error);
    res.status(500).send('Erro ao buscar associação');
  }
};

export const criarAssociacao = async (req: Request, res: Response): Promise<void> => {
  const { id_associacao, nome, descricao, vendedor } = req.body;
  try {
    const novaAssociacao: associacao = await prisma.associacao.create({
      data: { id_associacao, nome, descricao, vendedor },
    });

    res.status(201).json(novaAssociacao);
  } catch (error) {
    console.error('Erro ao criar associação:', error);
    res.status(500).send('Erro ao criar associação');
  }
};

export const atualizarAssociacao = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { id_associacao, nome, descricao } = req.body;
  try {
    const associacaoAtualizada: associacao = await prisma.associacao.update({
      where: { id_associacao: id },
      data: { id_associacao, nome, descricao },
    });

    res.json(associacaoAtualizada);
  } catch (error: any) {
    if (error.code === 'P2025') {
      res.status(404).send('Associação não encontrada');
    } else {
      console.error('Erro ao atualizar associação:', error);
      res.status(500).send('Erro ao atualizar associação');
    }
  }
};

export const deletarAssociacao = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const associacaoRemovida: associacao = await prisma.associacao.delete({
      where: { id_associacao: id },
    });

    res.json(associacaoRemovida);
  } catch (error: any) {
    if (error.code === 'P2025') {
      res.status(404).send('Associação não encontrada');
    } else {
      console.error('Erro ao deletar associação:', error);
      res.status(500).send('Erro ao deletar associação');
    }
  }
};

export default {
  getAssociacoes,
  getAssociacaoById,
  criarAssociacao,
  atualizarAssociacao,
  deletarAssociacao,
};
