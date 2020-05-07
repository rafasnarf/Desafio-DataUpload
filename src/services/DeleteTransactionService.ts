import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactiosRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactiosRepository.findOne(id);

    if (!transaction) {
      throw new AppError('This transaction does not exist.');
    }

    await transactiosRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
