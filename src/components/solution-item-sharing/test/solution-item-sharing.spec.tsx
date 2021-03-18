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

import { newSpecPage } from '@stencil/core/testing';
import { SolutionItemSharing } from '../solution-item-sharing';
import * as translations from '../../../../nls/Elm_strings.json';
import { h } from '@stencil/core';

describe('solution-item-sharing', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolutionItemSharing],
      template: () => (
        <solution-item-sharing translations={translations.configuration_modal.configuration}></solution-item-sharing>
      )
    });
    page.root.value = [{
      id: "A",
      title: "A",
      shareItem: false,
      type: "Feature Service",
      typeKeywords: [
        "ArcGIS Server",
        "Data",
        "Feature Access",
        "Feature Service",
        "Metadata",
        "Multilayer",
        "Service",
        "Hosted Service"
      ]
    }, {
      id: "B",
      title: "B",
      shareItem: true,
      type: "Web Map",
      typeKeywords: [
        "ArcGIS Online",
        "Collector",
        "Data Editing",
        "Explorer Web Map",
        "Map",
        "Online Map",
        "Web Map"
      ]
    }];

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <solution-item-sharing>
        <mock:shadow-root>
         <div class="container-border">
           <calcite-label layout="inline">
             <calcite-switch id="A" name="setting" scale="s" value="enabled"></calcite-switch>
             <solution-item-icon type="Feature Service"></solution-item-icon>
             A
           </calcite-label>
           <calcite-label layout="inline">
             <calcite-switch id="B" name="setting" scale="s" switched="" value="enabled"></calcite-switch>
             <solution-item-icon type="Web Map"></solution-item-icon>
             B
           </calcite-label>
         </div>
        </mock:shadow-root>
      </solution-item-sharing>
    `);
  });
});
