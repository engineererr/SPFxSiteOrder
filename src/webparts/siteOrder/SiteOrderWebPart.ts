import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from "@microsoft/sp-webpart-base";

import * as strings from "SiteOrderWebPartStrings";
import SiteOrder from "./components/SiteOrder";
import { ISiteOrderProps } from "./components/ISiteOrderProps";
import { ListDataProvider } from "./providers/TemplateList/ListDataProvider";

export interface ISiteOrderWebPartProps {
  templateListName: string;
}

export default class SiteOrderWebPart extends BaseClientSideWebPart<ISiteOrderWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISiteOrderProps> = React.createElement(
      SiteOrder,
      {
        listDataProvider: new ListDataProvider(this.context, this.properties.templateListName || "Templateliste"),
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("templateListName", {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
