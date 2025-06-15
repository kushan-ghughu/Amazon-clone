import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suite: formate curencey: ',()=>{
    it('converts price into dollers',()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with the 0 value',()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('round up to the nearest value',()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });

});