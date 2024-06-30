import { v4 as uuidv4 } from "uuid";

export class Address {
  private constructor(
    readonly id: string,
    readonly street: string,
    readonly number: number
  ) {}

  static create(street: string, number: number) {
    if (!street || street.trim().length === 0) {
      throw new Error("Street cannot be empty.");
    }

    if (number <= 0) {
      throw new Error("Number must be positive.");
    }

    return new Address(uuidv4(), street, number);
  }
}
