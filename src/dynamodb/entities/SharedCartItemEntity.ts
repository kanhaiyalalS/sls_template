/*
* Declare DynamoDB attribute
*/
import { attribute, hashKey, rangeKey, table } from '@aws/dynamodb-data-mapper-annotations';
import { SharedCartItem } from '../../model/SharedCartModel';

const SHARED_CART_ITEMS_TABLE = property('SHARED_CART_ITEMS_TABLE');

@table(SHARED_CART_ITEMS_TABLE)
export class SharedCartItemDb implements SharedCartItem {
  @hashKey()
  sharedCartId: string;
  @rangeKey()
  sharedCartItemId: string;
  @attribute()
  associateId: string;
  @attribute()
  customerId: string;
  @attribute()
  customization: CartItemCustomization;
  @attribute()
  lastModifiedBy: string;
}
