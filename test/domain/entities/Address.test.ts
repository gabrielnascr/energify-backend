import { Address } from "../../../src/domain/entities/Address";
import { v4 as uuidv4 } from "uuid";

describe("Address entity", () => {
  it("should create an instance of Address", () => {
    const address = Address.create("Main st", 123);
    expect(address).toBeInstanceOf(Address);
  });

  it("should have a correct properties", () => {
    const street = "Rua tal";
    const number = 723;
    const address = Address.create(street, number);
    expect(address.street).toBe(street);
    expect(address.number).toBe(number);
  });

  it("should return an error when the number is less or equal than 0", () => {
    expect(() => {
      Address.create("Rua tal", -123);
    }).toThrow("Number must be positive.");
  });

  it("should return an error when the street is empty", () => {
    expect(() => {
      Address.create("", 123);
    }).toThrow("Street cannot be empty.");
  });
});
