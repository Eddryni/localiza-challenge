import { response } from "./getProducts.mock";
import { IResponseData } from "./getProducts.types";

// Devido ao fato de através de muitas tentativas de fazer o endpoint funcionar e nao obter sucesso em conseguir a resposta,
// foi utilizado uma forma mais simples atraves do mock para conseguir valores. Dessa forma dou a devida atenção ao que é 
// requerido pelo objetivo do desafio.


// export async function getProducts(query: string, page: number) {
//   try {
//     const res = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}&page=${page}&pageSize=12`);

//     if (!res.ok) throw new Error('Erro ao buscar produtos');
//     return await res.json();

//     return response

//   } catch (error) {
//     console.error('Erro no fetchProducts:', error);

//     throw error;
//   }
// }


export function getProducts(_query: string, page: number): IResponseData {

  return {
    ...response,
    pagination: {
      ...response.pagination,
      currentPage: page,
    }
  }
}
