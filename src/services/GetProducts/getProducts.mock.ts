import { IResponseData } from "./getProducts.types";

export const response: IResponseData = {
  results: [
    {
      id: '1',
      image: '/next.svg',
      title: 'Sorvete A',
      description: '1 Litros',
    },
    {
      id: '2',
      image: '/next.svg',
      title: 'Sorvete B',
      description: '2 Litros',
    },
    {
      id: '3',
      image: '/next.svg',
      title: 'Sorvete C',
      description: '3 Litros',
    },
    {
      id: '4',
      image: '/next.svg',
      title: 'Sorvete D',
      description: '4 Litros',
    },
    {
      id: '5',
      image: '/next.svg',
      title: 'Sorvete E',
      description: '5 Litros',
    },
    {
      id: '6',
      image: '/next.svg',
      title: 'Sorvete F',
      description: '6 Litros',
    }, {
      id: '7',
      image: '/next.svg',
      title: 'Sorvete G',
      description: '7 Litros',
    }, {
      id: '8',
      image: '/next.svg',
      title: 'Sorvete G',
      description: '8 Litros',
    },
  ],
  pagination: {
    currentPage: 1,
    pageSize: 8,
    totalPages: 3
  }
}