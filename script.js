const callApi = {
  key: '29d06c5e63884fa18152f198cb498b88',
  url: 'https://openexchangerates.org/api/latest.json?app_id=',
  symbols: '&symbols=BRL',
};

const options = {
  style: 'currency',
  currency: 'BRL',
};

fetch(callApi.url + callApi.key + callApi.symbols)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const button = document.getElementById('button');
    const valueDollar = document.getElementById('valueDollar');
    valueDollar.innerText = `Cotação do dólar: ${data.rates.BRL.toLocaleString('pt-BR', options)}`;

    input = document.getElementById('insertValue');
    input.addEventListener('input', () => {
      input.value = input.value.toLocaleString('pt-BR', options);
      valueBRL = data.rates.BRL;
      paragraph = document.getElementById('result');
      value = valueBRL.toString();

      valueConvert = parseFloat(value) * input.value;
      paragraph.innerText = valueConvert.toLocaleString('pt-BR', options);
    });
  })

  .catch((error) => {
    console.log(error);
  });
