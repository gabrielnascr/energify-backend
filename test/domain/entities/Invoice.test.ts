import { InvoiceCost } from "../../../src/domain/entities/InvoiceCost";
import { Invoice } from "../../../src/domain/entities/Invoice";
import { v4 as uuidv4 } from "uuid";

describe("Invoice Entitcy", () => {
  it("should create an instance of Invoice", () => {
    const invoiceCosts = [
      InvoiceCost.create(100, 100, "Energia 1"),
      InvoiceCost.create(234, 12, "Energia 2"),
      InvoiceCost.create(234, 12, "Energia 3"),
    ];

    const invoice = Invoice.create(
      123,
      "06/2024",
      123,
      new Date(),
      uuidv4(),
      "/",
      uuidv4(),
      invoiceCosts
    );
    expect(invoice).toBeInstanceOf(Invoice);
  });

  it("should have correct props", () => {
    const invoiceCosts = [
      InvoiceCost.create(100, 100, "Energia 1"),
      InvoiceCost.create(234, 12, "Energia 2"),
      InvoiceCost.create(234, 12, "Energia 3"),
    ];

    const invoiceData = {
      customerId: 123,
      addressId: uuidv4(),
      expiredData: new Date(),
      invoicePath: "/",
      referenceMonth: "06/2024",
      totalCost: 129.2,
      userId: uuidv4(),
      invoiceCosts: invoiceCosts,
    };

    const invoice = Invoice.create(
      invoiceData.customerId,
      invoiceData.referenceMonth,
      invoiceData.totalCost,
      invoiceData.expiredData,
      invoiceData.addressId,
      invoiceData.invoicePath,
      invoiceData.userId,
      invoiceData.invoiceCosts
    );

    expect(invoice).toBeInstanceOf(Invoice);
    expect(invoice.customerId).toBe(invoiceData.customerId);
    expect(invoice.referenceMonth).toBe(invoiceData.referenceMonth);
    expect(invoice.totalCost).toBe(invoiceData.totalCost);
    expect(invoice.expiredData).toBe(invoiceData.expiredData);
    expect(invoice.addressId).toBe(invoiceData.addressId);
    expect(invoice.invoicePath).toBe(invoiceData.invoicePath);
    expect(invoice.userId).toBe(invoiceData.userId);

    expect(invoice.invoiceCosts.length).toBe(3);

    invoiceCosts.forEach((invoiceCost, index) => {
      expect(invoice.invoiceCosts[index].kwh).toBe(invoiceCost.kwh);
      expect(invoice.invoiceCosts[index].price).toBe(invoiceCost.price);
      expect(invoice.invoiceCosts[index].description).toBe(
        invoiceCost.description
      );
    });
  });

  it("should throw error for invalid invoiceCosts", () => {
    expect(() => {
      Invoice.create(
        123,
        "06/2024",
        123,
        new Date(),
        uuidv4(),
        "/",
        uuidv4(),
        []
      );
    }).toThrow("Invoice must have at least one cost");
  });
});
