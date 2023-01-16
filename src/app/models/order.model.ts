export interface OrderModel {
  readonly product: string;
  readonly quantity: string;
  readonly shipping: {
    readonly street: number;
    readonly houseNumber: number;
    readonly zipcode: string;
    readonly city: string;
  };
  readonly invoice: {
    readonly addressLine: string;
    readonly extraAddressLine: string;
    readonly vatNumber: number;
    readonly country: string;
  };
}
