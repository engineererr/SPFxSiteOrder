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
        <Icon className={styles.icon} iconName={this.getIconNameByService(this.props.service)} />
        <Label className={styles.iconLabel}>{this.props.label}</Label>
      </div>
    );
  }

  public getIconNameByService(service: string): string {
    switch (service) {
      case "Dokumentenbibliothek":
        return "TextDocument";
      case "Hermesvorlagen":
        return "FileTemplate";
      case "Teams als Chat-Plattform":
        return "Chat";
      case "Planner für Pendenzen":
        return "Calendar";
      case "Intergration von externen Projektmitarbeitern":
        return "Share";
      case "Sichtbar für alle Mitarbeiter":
        return "UnlockSolid";
      case "Kommunikation von News":
        return "MegaphoneSolid";
      case "Publikation von Inhalten":
        return "News";
      case "Privat":
        return "LockSolid";
      default:
        return "Unknown";
    }
  }
}
