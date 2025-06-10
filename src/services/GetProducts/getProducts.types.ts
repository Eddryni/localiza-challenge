interface IProduct {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface IPagination {
  currentPage: number;
  pageSize: number;
  totalPages: number;
}

export interface IResponseData {
  results: ReadonlyArray<IProduct>;
  pagination: IPagination;
}

