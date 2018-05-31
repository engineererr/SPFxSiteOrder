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
        return <IconContainer key={i} service={product} label={product} />;
      });
    } else {
      iconContainers = <span>no template added to Templatelist</span>;
    }
    return (
      <div className={styles.column}>
        <div className={styles.orderBox}>
          <div className={styles.topCell}>
            <div className={styles.headerImage}>
              <Icon iconName={this.getHeaderIconNameByTitle(this.props.title)} className={styles.headerIcon} />
            </div>
            <div className={styles.headerText}>
              <h1>{this.props.title}</h1>
              <span>Hier können Sie zusammen in einem Gremium zusammen arbeiten.</span>
            </div>
          </div>
          <div className={styles.middleCell}>
            <div className={styles.productContainer}>
              {iconContainers}
            </div>
          </div>
          <div className={styles.bottomCell}>
            <PrimaryButton className={styles.primaryButton} href={this.props.link}>{this.props.title} erstellen</PrimaryButton>
            <br />
            <PrimaryButton className={styles.primaryButton} href={this.props.link}>Demo {this.props.title} anschauen</PrimaryButton>
          </div>
        </div>
      </div>
    );
  }

  public getHeaderIconNameByTitle(title: string): string {
    switch (title) {
      case "Projekt":
        return "LineChart";
      case "Offenes Projekt":
        return "LineChart";
      case "Organisation":
        return "Org";
      case "Team":
        return "TeamFavorite";
    }
  }
}

// planner, teams, onedrive, Sharing (Share)
