import * as React from "react";
import styles from "./SiteOrder.module.scss";
import { ISiteOrderProps } from "./ISiteOrderProps";
import { ISiteOrderState } from "./ISiteOrderState";
import { escape } from "@microsoft/sp-lodash-subset";
import { PrimaryButton, Icon, Label, autobind, } from "office-ui-fabric-react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

import OrderBox from "./OrderBox";
import IListEntry from "../providers/TemplateList/IListEntry";

export default class SiteOrder extends React.Component<ISiteOrderProps, ISiteOrderState> {

  constructor(props: ISiteOrderProps, state: ISiteOrderState) {
    super(props);
    this.state = {
      items: [],
    };
  }

  public componentDidMount(): void {
    initializeIcons();
    this._getListData().then((response: Array<IListEntry>) => {
      this._updateState(response);
    });
  }
  public render(): React.ReactElement<ISiteOrderProps> {
    let orderBoxes: any = this.state.items.map((item: IListEntry, i: number) => {
      if (item.Active) {
        return <OrderBox title={item.Title} products={item.Products} link={item.NewFormLink} description={item.Description} />;
      }
    });
    return (
      <div className={styles.siteOrder}>
        <div className={styles.container}>
          {orderBoxes}
        </div >
      </div >
    );
  }

  @autobind
  private _getListData(): Promise<Array<IListEntry>> {
    return this.props.listDataProvider.getAll().then((response: Array<IListEntry>) => {
      return response;
    });
  }

  @autobind
  private _updateState(items: IListEntry[]): void {
    if (items === undefined) { return; }

    let newItems: Array<IListEntry> = [];
    items.forEach((item: IListEntry) => {
      newItems.push(item);
    });

    this.setState({ items: newItems });
  }
}
