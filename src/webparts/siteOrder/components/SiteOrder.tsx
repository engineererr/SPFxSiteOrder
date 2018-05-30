import * as React from "react";
import styles from "./SiteOrder.module.scss";
import { ISiteOrderProps } from "./ISiteOrderProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { PrimaryButton, Icon, Label, } from "office-ui-fabric-react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

import OrderBox from "./OrderBox";
import { Product } from "./IOrderBoxProps";

export default class SiteOrder extends React.Component<ISiteOrderProps, {}> {

  public componentDidMount(): void {
    initializeIcons();
  }
  public render(): React.ReactElement<ISiteOrderProps> {
    return (
      <div className={styles.siteOrder}>
        <div className={styles.container}>
          <OrderBox title={"Projekt"} products={["SharePoint", "Exchange", "Delve"]} />
          <OrderBox title={"Projekt"} products={["SharePoint", "Exchange", "Delve"]} />
          <OrderBox title={"Projekt"} products={["SharePoint", "Exchange", "Delve"]} />
        </div >
      </div >
    );
  }
}
