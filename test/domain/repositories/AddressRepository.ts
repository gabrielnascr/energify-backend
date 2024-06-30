import { Address } from "../../../src/domain/entities/Address";

export interface AddressRepository {
  saveAddress: (address: Address) => Promise<Address>;
}
