import { InvoiceCost } from "../../../src/domain/entities/InvoiceCost";

describe("InvoiceCost entity", () => {
  it("should create an instance of InvoiceCost", () => {
    const invoiceCost = InvoiceCost.create(100, 100, "Energia");
    expect(invoiceCost).toBeInstanceOf(InvoiceCost);
  });

  it("should have correct props", () => {
    const invoiceCostData = {
      kwh: 123,
      price: 12,
      description: "Energia",
    };

    const invoiceCost = InvoiceCost.create(
      invoiceCostData.kwh,
      invoiceCostData.price,
      invoiceCostData.description
    );

    expect(invoiceCost.kwh).toBe(invoiceCostData.kwh);
    expect(invoiceCost.price).toBe(invoiceCostData.price);
    expect(invoiceCost.description).toBe(invoiceCostData.description);
  });
});
