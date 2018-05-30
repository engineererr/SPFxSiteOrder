import * as React from "react";
import styles from "./SiteOrder.module.scss";
import { IIconContainerProps } from "./IIconContainerProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { PrimaryButton, Icon, Label, } from "office-ui-fabric-react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";


export default class IconContainer extends React.Component<IIconContainerProps, {}> {

  public render(): React.ReactElement<IIconContainerProps> {
    return (
      <div className={styles.iconContainer}>
        <Icon iconName={this.props.iconName} className={styles.icon} />
        <Label>{this.props.label}</Label>
      </div>
    );
  }
}
