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
import { IVariableItem } from '../../utils/interfaces';

@Component({
  tag: 'solution-variables',
  styleUrl: 'solution-variables.scss',
  shadow: true,
})
export class SolutionVariables {

  //--------------------------------------------------------------------------
  //
  //  Host element access
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLSolutionVariablesElement;

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
  @Prop({ mutable: true, reflect: true }) value: IVariableItem[] = [];

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <div>
          <h4 class="org-var-header">{this.translations.solVariables}</h4>
        </div>
        <div class="container-border">
          <calcite-label id="variable-label">
            {this._renderHierarchy(this.value)}
          </calcite-label>
        </div>
      </Host>
    );
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

  @Event() solutionVariableSelected: EventEmitter;

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
   * Render the solution item variables that the user can insert into temaplates at runtime.
   *
   * @param objs a list of variable items that have been gathered from the solutions templates
   */
  _renderHierarchy(
    objs: IVariableItem[]
  ): VNode[] {
    const hierarchy = objs.map(obj => {
      return obj.dependencies && obj.dependencies.length > 0 ? (
        <calcite-tree-item onClick={(evt) => this._toggleExpand(evt)}>
          <solution-item-icon type={obj.type} />
          <span class="icon-text" title={obj.title}>{obj.title}</span>
          <calcite-tree slot="children">
            {this._renderHierarchy(obj.dependencies)}
          </calcite-tree>
        </calcite-tree-item>
      ) : (
        <calcite-tree-item onClick={() => this._treeItemSelected(obj.id, obj.value)}>
          {obj.title}
        </calcite-tree-item>
      );
    });
    return hierarchy;
  }

  /**
   * Publishes the `solutionVariableSelected` event containing `itemId`, the id of the selected variable and the value of the variable.
   *
   * @param id Item id as reported by click event
   * @param value Variable id as reported by click event
   */
  private _treeItemSelected(
    id: string,
    value: string
  ): void {
    this.solutionVariableSelected.emit({
      itemId: id,
      value
    });
  }

  /**
   * Toggle the tree item that was clicked
   *
   * @param evt the clicks mouse event
   */
  private _toggleExpand(
    evt: any = undefined
  ): void {
    const treeItem = evt?.target?.closest("calcite-tree-item");
    if (treeItem) {
      treeItem.expanded = !treeItem.expanded;
    }
  }
}
