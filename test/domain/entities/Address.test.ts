import { Address } from "../../../src/domain/entities/Address";

describe("Address entity", () => {
  it("should create an instance of Address", () => {
    const address = new Address(1, "Main St", 123);
    expect(address).toBeInstanceOf(Address);
  });

  it("should have a correct properties", () => {
    const id = 1;
    const street = "Rua tal";
    const number = 723;
    const address = new Address(id, street, number);

    expect(address.id).toBe(id);
    expect(address.street).toBe(street);
    expect(address.number).toBe(number);
  });
});
