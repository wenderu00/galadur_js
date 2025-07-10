import { Resource } from "../src/resource";
import { TaxCollector } from "../src/tax_collector";
describe("Tax Collector Tests", () => {
    it("should create a tax collector with the correct initial values", () => {
        const taxCollector = new TaxCollector(new Resource());
        expect(taxCollector.taxValue).toBe(0);
        expect(taxCollector.maxTaxValue).toBe(4);
    });
    it("should set tax value correctly within limits", () => {
        const taxCollector = new TaxCollector(new Resource());
        taxCollector.taxValue = 3;
        expect(taxCollector.taxValue).toBe(3);
    });
    it("should throw an error when setting a negative tax value", () => {
        const taxCollector = new TaxCollector(new Resource());
        expect(() => {
            taxCollector.taxValue = -1;
        }).toThrow("Tax value cannot be negative");
    });
    it("should not throw an error when setting a tax value of 0", () => {
        const taxCollector = new TaxCollector(new Resource());
        expect(() => {
            taxCollector.taxValue = 0;
        }).not.toThrow();
    });
    it("should throw an error when setting a tax value greater than max", () => {
        const taxCollector = new TaxCollector(new Resource());
        expect(() => {
            taxCollector.taxValue = 5;
        }).toThrow("Tax value cannot exceed 4");
    });
    it("should not throw an error when setting tax value to max", () => {
        const taxCollector = new TaxCollector(new Resource());
        expect(() => {
            taxCollector.taxValue = 4;
        }).not.toThrow();
    });
    it("should collect tax and add it to the resource", () => {
        const resource = new Resource();
        const taxCollector = new TaxCollector(resource);
        taxCollector.taxValue = 2;
        taxCollector.collectTax();
        expect(resource.quantity).toBe(2);
    });
});