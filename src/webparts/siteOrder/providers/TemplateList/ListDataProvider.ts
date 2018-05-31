import IListEntry from "./IListEntry";
import IListDataProvider from "./IListDataProvider";
import { ListManager } from "../../utils/ListManager";
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SharePointPageContextDataProvider } from "@microsoft/sp-page-context";

export class ListDataProvider implements IListDataProvider {
  private listManager: ListManager;

  constructor(context: WebPartContext, listname: string) {
    this.listManager = new ListManager(context, context.pageContext.web.absoluteUrl, listname);
  }
  public getAll(): Promise<Array<IListEntry>> {
    return this.listManager.getAll()
      .then(response => response.value);
  }
}
