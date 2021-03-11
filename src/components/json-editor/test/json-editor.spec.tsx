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
import { JsonEditor } from '../json-editor';

describe('json-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JsonEditor],
      html: `<json-editor></json-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <json-editor>
        <div class="editor-container">
          <div class="editor-controls">
            <div class="editor-buttons">
              <calcite-button appearance="solid" color="blue" id="undefined-startEditing" title="Start editing">
                <calcite-icon icon="pencil" scale="s"></calcite-icon>
              </calcite-button>
              <calcite-button appearance="outline" color="blue" id="undefined-search" title="Search">
                <calcite-icon icon="search" scale="s"></calcite-icon>
              </calcite-button>
              <calcite-button appearance="solid" color="blue" disabled="" id="undefined-cancelEdits" title="Cancel edits">
                <calcite-icon icon="reset" scale="s"></calcite-icon>
              </calcite-button>
              <calcite-button appearance="solid" color="blue" disabled="" id="undefined-saveEdits" title="Save edits">
                <calcite-icon icon="save" scale="s"></calcite-icon>
              </calcite-button>
            </div>
          </div>
          <div class="editor-text">
            <div class="edit-height edit-width" id="undefined-editor"></div>
          </div>
        </div>
      </json-editor>
    `);
  });
});
