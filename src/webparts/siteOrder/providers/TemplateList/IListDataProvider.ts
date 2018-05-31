import IListEntry from "./IListEntry";
export default interface IListDataProvider {
  getAll(): Promise<Array<IListEntry>>;

}
