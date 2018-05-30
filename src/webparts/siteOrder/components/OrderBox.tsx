import * as React from "react";
import styles from "./SiteOrder.module.scss";
import { IOrderBoxProps, Product } from "./IOrderBoxProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { PrimaryButton, Icon, Label, } from "office-ui-fabric-react";
import IconContainer from "./IconContainer";


export default class OrderBox extends React.Component<IOrderBoxProps, {}> {

  public render(): React.ReactElement<IOrderBoxProps> {
    let iconContainers: any = this.props.products.map((product: Product, i: number) => {
      return <IconContainer key={i} iconName={product + "Logo"} label={product} />;
    });

    return (
      <div className={styles.column}>
        <div className={styles.orderBox}>
          <div className={styles.topCell}>
            <h1>{this.props.title}</h1>
            <span>Hier können Sie zusammen in einem Gremium zusammen arbeiten.</span>
          </div>
          <div className={styles.middleCell}>
            <PrimaryButton>{this.props.title} erstellen</PrimaryButton>
          </div>
          <div className={styles.bottomCell}>
            <hr />
            <h2>Enthaltene Office-Produkte</h2>
            <div className={styles.productContainer}>
              {iconContainers}
            </div>
          </div>
        </div>
      </div >
    );
  }
}
