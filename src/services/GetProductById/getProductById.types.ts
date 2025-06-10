interface IProductDetail {
  label: string;
  value: string;
}

export interface IProductDetailsResponse {
  id: string;
  title: string;
  image: string;
  details: ReadonlyArray<IProductDetail>;
  description: string;
}