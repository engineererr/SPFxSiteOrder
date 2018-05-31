import { Environment, EnvironmentType } from "@microsoft/sp-core-library";
import {
  SPHttpClient,
  SPHttpClientResponse,
  ISPHttpClientOptions
} from "@microsoft/sp-http";


import { ISPResponse } from "../providers/Templatelist/ISPResponse";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export class ListManager {
  private context: WebPartContext;
  private readonly BASEURL;
  private readonly LISTNAME;

  constructor(context: WebPartContext, baseUrl: string, listName: string) {
    this.context = context;
    this.BASEURL = baseUrl;
    this.LISTNAME = listName;
  }

  public getAll(): Promise<ISPResponse> {
    return this.context.spHttpClient
      .fetch(this.BASEURL + `/_api/web/lists/GetByTitle('${this.LISTNAME}')/items?$select=Title,Description,NewFormLink,Active,Products`,
        SPHttpClient.configurations.v1, {})
      .then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }
}
