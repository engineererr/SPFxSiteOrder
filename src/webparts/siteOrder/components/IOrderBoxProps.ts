export const enum Products {
  SharePoint,
  Delve,
  Exchange
}
export interface IOrderBoxProps {
  title: string;
  products: Array<Products>;
}
