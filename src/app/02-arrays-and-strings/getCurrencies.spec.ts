import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
  it('should return the supported currencies', () => {
    const result = getCurrencies();
    expect(result).toEqual(jasmine.arrayContaining(['EUR', 'USD', 'AUD']));
  });
});
