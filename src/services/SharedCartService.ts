/*
* Declare middleware after route 
*/

import { v4 } from 'uuid';
import { SharedCart, SharedCartItem } from '../model/SharedCartModel';
import { getTtlInSeconds } from '../util/ttlUtils';
import { useProvisionConcurrency } from '../util/ToggleUtil';

const {
  SHARED_CART_ITEMS_TTL
} = process.env;

export class SharedCartService {
  /* eslint-disable no-empty-function */
  constructor(
    private readonly lambdaClient: LambdaClient = new LambdaClient()
  ) {
  }

  @Log
  public async createSharedCart(customerId: string): Promise<string> {
    const sharedCartId: string = v4();
    return sharedCartId;
  }

 
}

export const sharedCartService = new SharedCartService();
