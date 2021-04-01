/** @license
 * Copyright 2021 Esri
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, Element, Event, EventEmitter, Host, h, Prop, VNode } from '@stencil/core';
import { ISolutionItem } from "../solution-item/solution-item";
import "@esri/calcite-components";

export interface IInventoryItem {
  id: string;
  title: string;
  dependencies?: IInventoryItem[];
  type: string;
  typeKeywords: string[];
  solutionItem: ISolutionItem // May be able to rethink this and just put props here
  // for now I'll just leave so we have minimal changes to see this in action
}

@Component({
  tag: 'solution-contents',
  styleUrl: 'solution-contents.css',
  shadow: false,
  assetsDirs: ['item-type-icons']
})
export class SolutionContents {

  //--------------------------------------------------------------------------
  //
  //  Host element access
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLElement;

  //--------------------------------------------------------------------------
  //
  //  Properties (public)
  //
  //--------------------------------------------------------------------------

  /**
   * Contains the translations for this component.
   */
  @Prop({ mutable: true }) translations: any = {};

  /**
   * Contains the public value for this component.
   */
  @Prop() value: IInventoryItem[] = [];

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    return (
      <Host>
        <calcite-tree>
          {this.renderHierarchy(this.value)}
        </calcite-tree>
      </Host>
    );
  }

  renderHierarchy(objs: IInventoryItem[]): VNode[] {
    const hierarchy = objs.map(obj => {
      if (obj.dependencies && obj.dependencies.length > 0) {
        return (
          <calcite-tree-item onClick={() => this._treeItemSelected(obj.solutionItem)}>
            <solution-item-icon type={obj.type} typeKeywords={obj.typeKeywords}></solution-item-icon>
            {obj.title}
            <calcite-tree slot="children">
              {this.renderHierarchy(obj.dependencies)}
            </calcite-tree>
          </calcite-tree-item>
        );
      } else {
        return (
          <calcite-tree-item onClick={() => this._treeItemSelected(obj.solutionItem)}>
            <solution-item-icon type={obj.type} typeKeywords={obj.typeKeywords}></solution-item-icon>
            {obj.title}
          </calcite-tree-item>
        );
      }
    });
    return hierarchy;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables (private)
  //
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  @Event() solutionItemSelected: EventEmitter;

  //--------------------------------------------------------------------------
  //
  //  Public Methods (async)
  //
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Publishes the `solutionItemSelected` event containing `itemId`, the id of the selected item.
   *
   * @param id Item id as reported by click event
   * @param type Item type to understand if it's an item or group
   */
  private _treeItemSelected(
    solutionItem: ISolutionItem
  ): void {
    this.solutionItemSelected.emit(solutionItem);
  }
}
