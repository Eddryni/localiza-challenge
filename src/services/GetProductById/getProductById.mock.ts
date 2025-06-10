import { IProductDetailsResponse } from "./getProductById.types";

export const response: IProductDetailsResponse = {
  id: "12345",
  title: "Sorvete A",
  image: "/next.svg",
  details: [
    { label: "Marca", value: "Not Co" },
    { label: "Lactose", value: "Não contém" },
    { label: "Tamanho", value: "2 Litros" },
    { label: "Calorias", value: "237Kcal" },
    { label: "Proteína", value: "5.3g" },
    { label: "Açúcares", value: "16g" },
    { label: "Base", value: "Soja - Vegano" },
    { label: "Carboidratos", value: "27.5g" },
    { label: "Gorduras totais", value: "7g" },
    { label: "Gorduras Trans", value: "0g" }
  ],
  description: "O sabor de sorvete de flocos, conhecido por sua combinação deliciosa de baunilha cremosa com pedaços crocantes de chocolate, tem uma história fascinante que remonta ao início do século XX. Diz-se que a ideia surgiu em uma pequena sorveteria na Itália, onde um mestre sorveteiro buscava criar uma nova experiência gustativa para seus clientes. Inspirado pela textura e sabor dos tradicionais doces italianos, ele decidiu misturar pedaços de chocolate em um sorvete de baunilha. A novidade rapidamente ganhou popularidade, e logo outras sorveterias começaram a replicar a receita. Com o tempo, o sabor de flocos se espalhou pela Europa e, eventualmente, chegou às Américas. Nos Estados Unidos, o sorvete de flocos foi adotado com entusiasmo, tornando-se um dos sabores favoritos em festas e celebrações. Ao longo das décadas, o sorvete de flocos passou por diversas variações e aprimoramentos. Alguns fabricantes adicionaram diferentes tipos de chocolate, enquanto outros experimentaram com a base de baunilha, incorporando ingredientes como creme de leite fresco e extratos naturais de baunilha. Hoje, o sorvete de flocos é apreciado mundialmente, sendo um símbolo de inovação e tradição no universo dos sorvetes."
}
