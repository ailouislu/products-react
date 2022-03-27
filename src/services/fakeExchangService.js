  
  let NZD = '1';
  let USD = '0.76';
  let Euro = '0.67';

  export const exchanges = [
    {
      id: 1,
      name: "NZD"
    },
    {
      id: 2,
      name: "USD"
    },
    {
      id: 3,
      name: "Euro"
    }
];

export function getExchanges() {
  return exchanges;
}


export function getNZD() {
  return NZD;
}

export function getUSD() {
  return USD;
}

export function getEuro() {
  return Euro;
}
