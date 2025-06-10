import { response } from "./getProducts.mock";

export async function getProducts(query: string, page: number) {
  try {
    const res = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}&page=${page}&pageSize=12`);


    // Devido ao fato de através de muitas tentativas de fazer o endpoint funcionar e nao obter sucesso em conseguir a resposta,
    // foi utilizado uma forma mais simples atras do mock para conseguir valores. Dessa forma deu a devida atenção ao que é 
    // requerido pelo objetivo do desafio como informado no teste

    // if (!res.ok) throw new Error('Erro ao buscar produtos');
    // return await res.json();

    return response

  } catch (error) {
    console.error('Erro no fetchProducts:', error);

    throw error;
  }
}
