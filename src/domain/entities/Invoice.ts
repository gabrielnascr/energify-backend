import { v4 as uuidv4 } from "uuid";
import { InvoiceCost } from "./InvoiceCost";

export class Invoice {
  private constructor(
    readonly id: string,
    readonly customerId: number,
    readonly referenceMonth: string,
    readonly totalCost: number,
    readonly expiredData: Date,
    readonly addressId: string,
    readonly invoicePath: string,
    readonly userId: string,
    readonly invoiceCosts: InvoiceCost[]
  ) {}

  static create(
    customerId: number,
    referenceMonth: string,
    totalCost: number,
    expiredData: Date,
    addressId: string,
    invoicePath: string,
    userId: string,
    invoiceCosts: InvoiceCost[]
  ) {
    if (invoiceCosts.length <= 0) {
      throw new Error("Invoice must have at least one cost");
    }

    return new Invoice(
      uuidv4(),
      customerId,
      referenceMonth,
      totalCost,
      expiredData,
      addressId,
      invoicePath,
      userId,
      invoiceCosts
    );
  }
}
