async function getPrice(storeUrl) {
    // Usamos o método fetch para acessar os dados do site
    const response = await fetch(storeUrl);
    // Convertemos a resposta em um documento HTML
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    // Usamos o método querySelector para encontrar o elemento que contém o preço
    const priceElement = doc.querySelector('.price');
    // Extraimos o texto do elemento e convertemos para um número
    const price = parseFloat(priceElement.textContent);
    return price;
}

const store1Url = 'https://www.store1.com/product123';
const store2Url = 'https://www.store2.com/product123';

const price1 = await getPrice(store1Url);
const price2 = await getPrice(store2Url);

if (price1 < price2) {
    console.log(`O menor preço é na loja 1: R$${price1}`);
} else {
    console.log(`O menor preço é na loja 2: R$${price2}`);
}
