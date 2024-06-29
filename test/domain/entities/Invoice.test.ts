import { Invoice } from "../../../src/domain/entities/Invoice";
import { v4 as uuidv4 } from "uuid";

describe("Invoice Entitcy", () => {
  it("should create an instance of Invoice", () => {
    const invoice = new Invoice(
      uuidv4(),
      123,
      "12/MAIO",
      123,
      new Date(),
      1,
      "/",
      uuidv4()
    );
    expect(invoice).toBeInstanceOf(Invoice);
  });

  it("should have correct props", () => {
    const invoiceData: Invoice = {
      id: uuidv4(),
      customerId: 123,
      addressId: 123,
      expiredData: new Date(),
      invoicePath: "/",
      referenceMonth: "12/MONTH",
      totalCost: 129.2,
      userId: uuidv4(),
    };

    const invoice = new Invoice(
      invoiceData.id,
      invoiceData.customerId,
      invoiceData.referenceMonth,
      invoiceData.totalCost,
      invoiceData.expiredData,
      invoiceData.addressId,
      invoiceData.invoicePath,
      invoiceData.userId
    );

    expect(invoice).toBeInstanceOf(Invoice);
    expect(invoice.id).toBe(invoiceData.id);
    expect(invoice.customerId).toBe(invoiceData.customerId);
    expect(invoice.referenceMonth).toBe(invoiceData.referenceMonth);
    expect(invoice.totalCost).toBe(invoiceData.totalCost);
    expect(invoice.expiredData).toBe(invoiceData.expiredData);
    expect(invoice.addressId).toBe(invoiceData.addressId);
    expect(invoice.invoicePath).toBe(invoiceData.invoicePath);
    expect(invoice.userId).toBe(invoiceData.userId);
  });
});
