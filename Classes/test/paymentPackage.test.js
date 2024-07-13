import { assert } from "chai";
import { PaymentPackage } from "../paymentPackage.js";

describe('Test correct instances', () => {
    let paymentPackage;

    beforeEach(() => {
        paymentPackage = new PaymentPackage('Elena', 20)
    });

    afterEach(() => {
        paymentPackage = null
    });

    it('Test name property', () => {
        assert.equal(paymentPackage._name, 'Elena', 'correctly set name property')
    });

    it('Test value property', () => {
        assert.equal(paymentPackage._value, 20, 'value property is correctly set')
    })

    it('Test active property', () => {
        assert.equal(paymentPackage.active, true, 'active property is correct')
    })

    it('Test VAT property', () => {
        assert.equal(paymentPackage.VAT, 20, 'VAT is correct')
    })
})

describe('Test accessors', () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage('Elena', 10);
    })

    it('Test set and get value', () => {
        assert.equal(paymentPackage.value, 10);
        paymentPackage.value = 0;
        assert.equal(paymentPackage.value, 0)
    });

    it('Test set and get name', () => {
        assert.equal(paymentPackage.name, 'Elena');
        paymentPackage.name = 'Ivan'
        assert.equal(paymentPackage.name, 'Ivan')
    });

    it('Test set and get active', () => {
        assert.equal(paymentPackage.active, true);
        paymentPackage.active = false
        assert.equal(paymentPackage.active, false)
    });

    it('Test set and get VAT', () => {
        assert.equal(paymentPackage.VAT, 20);
        paymentPackage.VAT = 0
        assert.equal(paymentPackage.VAT, 0)
    });


});

describe('Test incorrect values', () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage('Elena', 10);
    });

    it('Test incorrect name', () => {
        assert.throw(() => new PaymentPackage('', 10), 'Name must be a non-empty string', 'name should not be an empty string');
        assert.throw(() => new PaymentPackage(10, 10), 'Name must be a non-empty string', 'name should not be a number')
    });

    it('Test incorrect value', () => {
        assert.throw(() => new PaymentPackage('Elena', -10), 'Value must be a non-negative number', 'value should not be negative');
        assert.throw(() => new PaymentPackage('Elena', 'Ivan'), 'Value must be a non-negative number', 'value must be a number');
    });

    it('Test incorect VAT', () => {
        assert.throw(() => paymentPackage.VAT = -1, 'VAT must be a non-negative number');
        assert.throw(() => paymentPackage.VAT = '-1', 'VAT must be a non-negative number');
    });

    it('Test incorrect active', () => {
        assert.throw(() => paymentPackage.active = 'true', 'Active status must be a boolean');
        assert.throw(() => paymentPackage.active = 'true', 'Active status must be a boolean');
    })
});

describe('Test toString', () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage('Elena', 10);
    });

    it('test with default active', () => {
        let result = [
            `Package: Elena`,
            `- Value (excl. VAT): 10`,
            `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
        ];

        assert.equal(paymentPackage.toString(), result.join('\n'))
    });

    it('Test with false active', () => {
        let result = [
            `Package: Elena (inactive)`,
            `- Value (excl. VAT): 10`,
            `- Value (VAT 20%): ${10 * (1 + 20 / 100)}`
        ];
        paymentPackage.active = false;
        assert.equal(paymentPackage.toString(), result.join('\n'))
    })
})