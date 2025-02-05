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
import { SolutionResourceItem } from '../solution-resource-item';
import * as translations from '../../../testingAssets/strings.json';
import { h } from '@stencil/core';

describe('solution-resource-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolutionResourceItem],
      template: () => (
        <solution-resource-item translations={translations.configuration_modal.configuration}></solution-resource-item>
      )
    });
    page.root.value = {
      name: "thename",
      url: "theurl"
    };

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <solution-resource-item itemid="">
      <mock:shadow-root>
        <div class="resource-item">
          <div class="margin-bottom-1">
            <calcite-button appearance="solid" class="resource-button" color="blue">
              Add New Resource
            </calcite-button>
            <calcite-button appearance="solid" color="blue" disabled="">
              Download All
            </calcite-button>
          </div>
          <div class="resources-container" style="display: none;">
            <calcite-value-list multiple=""></calcite-value-list>
          </div>
        </div>
      </mock:shadow-root>
    </solution-resource-item>
    `);
  });
});
