import { v4 as uuidv4 } from "uuid";

export class InvoiceCost {
  private constructor(
    readonly id: string,
    readonly kwh: number,
    readonly price: number,
    readonly description: string
  ) {}

  static create(kwh: number, price: number, description: string): InvoiceCost {
    return new InvoiceCost(uuidv4(), kwh, price, description);
  }
}
