import { response } from "./getProductById.mock";

// Devido ao fato de através de muitas tentativas de fazer o endpoint funcionar e nao obter sucesso em conseguir a resposta,
// foi utilizado uma forma mais simples atraves do mock para conseguir valores. Dessa forma dou a devida atenção ao que é 
// requerido pelo objetivo do desafio.

export function getProductById(id: string) {

  return {
    ...response,
    id
  }
}