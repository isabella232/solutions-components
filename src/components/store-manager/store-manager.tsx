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

/**
 * The json-editor componet leverages a stencil/store to manage data.
 * If a component uses the json-editor but does not have logic to hydrate the store this component can be used.
 * It will create and hydrate the store based on the value provided.
 * 
 * The value must be a string so it can be observed by the MutationObserver implemented below.
 * The observer does not notify when passing complex attributes as you can with stencil.
 *
 *
*/

 import { Component, Element, Event, EventEmitter, Host, h, Prop } from '@stencil/core';
 import state from '../../utils/editStore';
 import { getModels } from '../../utils/templates';
 
 @Component({
   tag: 'store-manager',
   shadow: false
 })
 export class StoreManager {
 
   //--------------------------------------------------------------------------
   //
   //  Host element access
   //
   //--------------------------------------------------------------------------
   @Element() el: any;
 
  //--------------------------------------------------------------------------
  //
  //  Properties (public)
  //
  //--------------------------------------------------------------------------

  /**
   * Contains source json as a string
   *
   */
   @Prop({ mutable: true, reflect: true }) value: string = "";
 
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

   connectedCallback(): void {
     this._initValueObserver();
   }
 
   render() {
     return (<Host><div></div></Host>);
   }
 
  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

   @Event() stateLoaded: EventEmitter;
 
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

   private _valueObserver;
 
   private _initValueObserver() {
     this._valueObserver = new MutationObserver(ml => {
       ml.some(async mutation => {
         if (mutation.type === 'attributes' && mutation.attributeName === "value" &&
           mutation.target[mutation.attributeName] !== mutation.oldValue) {
             console.log("WTF2")
           const v = JSON.parse(mutation.target[mutation.attributeName]);
           state.models = await getModels(Array.isArray(v) ? v : [v]);
           this.stateLoaded.emit(state);
           return true;
         }
       })
     });
     this._valueObserver.observe(this.el, { attributes: true, attributeOldValue: true });
   }
 }
