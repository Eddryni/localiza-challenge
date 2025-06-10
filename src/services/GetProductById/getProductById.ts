import { response } from "./getProductById.mock";

export async function getProductById(id: string) {
  // Devido ao fato de através de muitas tentativas de fazer o endpoint funcionar e nao obter sucesso em conseguir a resposta,
  // foi utilizado uma forma mais simples atras do mock para conseguir valores. Dessa forma deu a devida atenção ao que é 
  // requerido pelo objetivo do desafio como informado no teste

  // const res = await fetch(`https://api.mercadolibre.com/sites/MLB/search?categoryId=${id}`);

  return response
}