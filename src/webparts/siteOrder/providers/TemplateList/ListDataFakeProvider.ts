import IListDataProvider from "./IListDataProvider";
import IListEntry from "./IListEntry";

export class ListDataFakeProvider implements IListDataProvider {

  public getAll(): Promise<Array<IListEntry>> {

    return new Promise<Array<IListEntry>>((resolve, reject) => {

      let list: Array<IListEntry> = [
        {
          Title: "Projekt",
          Id: "sdf",
          Description: "Hier können Sie mit ihren Kollegen zusammen arbeiten",
          NewFormLink: "http://blablal",
          Active: true,
          Products: ["SharePoint, Delve"]
        },
      ];

      resolve(list);

    });
  }
}
