/*
* Declare strict type
*/

export interface SharedCart {
  sharedCartItems: SharedCartItem[];
}

export interface SharedCartItem {
  sharedCartId: string;
  sharedCartItemId: string;
  productId: string;
  skuId: string;
  quantity: number;
  pimSkuId?: string;
  lastModifiedBy?: string;
  recommendedBy?: string;
  associateId?: string;
  perishableDeliveryByDate?: string;
  replenishmentInterval?: string;
  sourceApp?: SourceApp;
  customization?: CartItemCustomization;
  ttl?: number;
  dataSource?: CartItemSourceType;
}
