export interface CreateSharedCartDto {
  customerId: string; // principalId if old customer, sub if new one
}

export interface GetSharedCartDto {
  sharedCartId: string; // principalId if old customer, sub if new one
}
