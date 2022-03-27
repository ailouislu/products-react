import { cleanup} from '@testing-library/react'
import { getAllProductsNZD, getAllProductsUSD, getAllProductsEuro } from "../services/fakeProductService";
import { getExchanges, getNZD, getUSD, getEuro } from "../services/fakeExchangService"
import { getTypes } from "../services/fakeTypeService"

afterEach(cleanup);

test('should return correct length', () => {
    const productsNZD =  getAllProductsNZD();
    const productUSD =  getAllProductsUSD();
    const productEuro =  getAllProductsEuro();
    expect(productsNZD).toHaveLength(8);
    expect(productUSD).toHaveLength(8);
    expect(productEuro).toHaveLength(8);

    const exchanges = getExchanges();
    expect(exchanges).toHaveLength(3);

    const types = getTypes();
    expect(types).toHaveLength(3);
})

test('should return correct exchange rates', () => {
    const NZD =  getNZD();
    const USD =  getUSD();
    const Euro =  getEuro();
    expect(NZD).toBe("1");
    expect(USD).toBe("0.76");
    expect(Euro).toBe("0.67");
})

test('should return correct products', () => {
    const exceptProductsNZD =  [
        {
            id: 5,
            name: 'Nokia Lumia 920/930/Icon Crimson Phone Case',
            price: '10.00',
            type: 'Phone Case'
          },
          {
            id: 6,
            name: 'Xamarin C# T-Shirt',
            price: '15.00',
            type: 'T-Shirt'
          },
    ];
    const productsNZD = getAllProductsNZD();
    expect(productsNZD).toEqual(expect.arrayContaining(exceptProductsNZD));

    const exceptProductsUSD =  [
      {
        id: 1,
        name: 'Hewlett-Packard Rideable Lawnmower',
        price: '2280.00',
        type: 'Lawnmower'
      },
      {
        id: 2,
        name: "Fisher Price's My First Lawnmower",
        price: '34.20',
        type: 'Lawnmower'
      },
    ];
    const productsUSD = getAllProductsUSD();
    expect(productsUSD).toEqual(expect.arrayContaining(exceptProductsUSD));

    const exceptProductsEuro =  [
      {
        id: 7,
        name: 'New York Yankees T-Shirt',
        price: '5.36',
        type: 'T-Shirt'
      },
      {
        id: 8,
        name: 'Disney Sleeping Beauty T-Shirt',
        price: '6.70',
        type: 'T-Shirt'
      }
    ];
    const productsEuro = getAllProductsEuro();
    expect(productsEuro).toEqual(expect.arrayContaining(exceptProductsEuro));
})

test('should return correct exchanges', () => {
    const exceptExchanges =  [                                                                                                                                                                                                        
        { id: 1, name: 'NZD' },                                                                                                                                                                                
        { id: 2, name: 'USD' },                                                                                                                                                                                
        { id: 3, name: 'Euro' }                                                                                                                                                                                
      ];
    const exchanges = getExchanges();
    expect(exchanges).toEqual(exceptExchanges);
})

test('should return correct types', () => {
    const exceptTypes =  [
        { id: 1, name: 'Lawnmower' },
        { id: 2, name: 'Phone Case' },
        { id: 3, name: 'T-Shirt' }
      ];
    const types = getTypes();
    expect(types).toEqual(exceptTypes);
})
