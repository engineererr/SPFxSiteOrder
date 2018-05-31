import SPUser from "@microsoft/sp-page-context/lib/SPUser";

export default interface IListEntry {
  Id: string;
  Title: string;
  Description: string;
  NewFormLink: string;
  Active: boolean;
  Products: string[];
}
