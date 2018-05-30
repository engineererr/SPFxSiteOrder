export type Product = "SharePoint" | "Delve" | "Exchange";
export interface IOrderBoxProps {
  title: string;
  products: Array<Product>;
}
