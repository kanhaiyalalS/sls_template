/*
* Declare DynamoDB query
*/

import { DataMapper } from '@aws/dynamodb-data-mapper';
import { isEmpty } from 'lodash';
import { dynamoDbMapper as singletonDynamoDbMapper } from './DynamoDbMapper';
import { SharedCartItem } from '../model/SharedCartModel';
import { SharedCartItemDb } from './entities/SharedCartItemEntity';

export class SharedCartRepository {
  /* eslint-disable no-empty-function */
  constructor(
    private readonly dynamoDbMapper: DataMapper = singletonDynamoDbMapper
  ) {
  }

  @Log
  public async getSharedCartById(sharedCartId: string): Promise<SharedCartItemDb[]> {
    const result: SharedCartItemDb[] = [];

    try {
      const iterator = this.dynamoDbMapper.query<SharedCartItemDb>(SharedCartItemDb, { sharedCartId });
      for await (const found of iterator) {
        result.push(found);
      }
    } catch (e) {
      const error = e as Error;
      logger.error({
        message: 'An error has happened while Query shared cart items',
        reason: error.message,
      });
      throw e;
    }

    return result;
  }

}

export const defaultSharedCartRepo = new SharedCartRepository();
