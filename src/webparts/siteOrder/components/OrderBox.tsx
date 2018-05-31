import * as React from "react";
import styles from "./SiteOrder.module.scss";
import { IOrderBoxProps } from "./IOrderBoxProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { PrimaryButton, Icon, Label, } from "office-ui-fabric-react";
import IconContainer from "./IconContainer";


export default class OrderBox extends React.Component<IOrderBoxProps, {}> {

  public render(): React.ReactElement<IOrderBoxProps> {
    let iconContainers: any;
    if (this.props.products) {
      iconContainers = this.props.products.map((product: string, i: number) => {
        return <IconContainer key={i} iconName={product + "Logo"} label={product} />;
      });
    } else {
      iconContainers = <span>no template added to Templatelist</span>;
    }
    return (
      <div className={styles.column}>
        <div className={styles.orderBox}>
          <div className={styles.topCell}>
            <h1>{this.props.title}</h1>
            <span>Hier können Sie zusammen in einem Gremium zusammen arbeiten.</span>
          </div>
          <div className={styles.middleCell}>
            <PrimaryButton href={this.props.link}>{this.props.title} erstellen</PrimaryButton>
          </div>
          <div className={styles.bottomCell}>
            <hr />
            <h2>Services</h2>
            <div className={styles.productContainer}>
              {iconContainers}
            </div>
          </div>
        </div>
      </div >
    );
  }
}

// planner, teams, onedrive, Sharing (Share)
