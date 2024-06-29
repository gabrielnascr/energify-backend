export class Invoice {
  constructor(
    readonly id: string,
    readonly customerId: number,
    readonly referenceMonth: string,
    readonly totalCost: number,
    readonly expiredData: Date,
    readonly addressId: number,
    readonly invoicePath: string,
    readonly userId: string
  ) {}
}
