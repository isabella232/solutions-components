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
 * Encapsulates the Monaco Editor (https://microsoft.github.io/monaco-editor/) into a
 * web component for JSON content.
 *
 * Attributes:
 * `instanceId`: id of component (required, because it's used to distinguish between multiple instances of component)
 * `value`: Initial content of editor
 *
 * @example
 *   <json-editor
 *     instanceId="a1f271c0de554604beed2adc1f244be1"
 *     value="{\"id\": \"12345\"}"
 *   ></json-editor>
 *
 * `instanceId` attribute and `value` are required
 *
 *
*/

import { Component, Event, EventEmitter, Host, h, Listen, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'json-editor',
  styleUrl: 'json-editor.css',
  shadow: false,
  assetsDirs: ['assets']
})
export class JsonEditor {
  //--------------------------------------------------------------------------
  //
  //  Properties (public)
  //
  //--------------------------------------------------------------------------

  /**
   * Contains the original source item json as it was when the component was created.
   *
   */
  @Prop({ mutable: true }) original: any = "";

  /**
   * Contains the translations for this component.
   */
  @Prop({ mutable: true }) translations: any = {};

  /**
   * Contains the public value for this component.
   */
  @Prop({ mutable: true }) value: any = undefined;

  @Watch('value')
  valueSet(newValue: any, oldValue: any) {
    if (newValue !== oldValue) {
      if (this.original === undefined || this.original === "") {
        this.original = newValue;
      }
      if (this.instanceId && this.value) {
        this.show = true;
      }
    }
  }

  /**
   * Contains a public value to indicate if the model has any errors
   * that would prevent saving it.
   */
  @Prop({ mutable: true, reflect: true }) hasErrors: boolean = false;

  /**
   * Contains the public model for this component.
   */
  @Prop({ mutable: true, reflect: true }) model: any; //monaco.editor.ITextModel;

  /**
   * Contains the public id for this component.
   */
  @Prop({ mutable: true, reflect: true, attribute: "instanceId" }) instanceId: any = "";

  @Watch('instanceId')
  instanceIdSet(newValue: any, oldValue: any) {
    if (newValue !== oldValue) {
      // can only show when both are set
      if (this.instanceId && this.value) {
        this.show = true;
      }
    }
  }

  /**
   * Verify if any of the values for the Item have changed
   *
   */
  // TODO does this need to me a @Method?
  //@Method()
  hasChanges(): boolean {
    return this.original !== this.value;
  }

  // change to this state will cause render
  // show is only updated once we have the value and instanceId
  @State() show: boolean = false;

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <div id={`${this.instanceId}-editor-container`} class="editor-container padding-right">
          <div class="editor-controls padding-right">
            <div class="editor-buttons">
              <calcite-button
                id={`${this.instanceId}-startEditing`}
                color="blue"
                appearance="solid"
                title={this.translations.startEditing}
                onClick={() => this._startEditing()}
                scale="s"
                class="edit-button"
              >
                <calcite-icon icon="pencil" scale="s"></calcite-icon>
              </calcite-button>
              {/* undo */}
              <calcite-button
                id={`${this.instanceId}-undo`}
                color="blue"
                appearance="solid"
                title={this.translations.undo}
                onClick={() => this._undo()}
                scale="s"
                class="edit-button"
              >
                <calcite-icon icon="undo" scale="s"></calcite-icon>
              </calcite-button>
              {/* redo */}
              <calcite-button
                id={`${this.instanceId}-redo`}
                color="blue"
                appearance="solid"
                title={this.translations.redo}
                onClick={() => this._redo()}
                scale="s"
                class="edit-button"
              >
                <calcite-icon icon="redo" scale="s"></calcite-icon>
              </calcite-button>
              {/* diff */}
              <calcite-button
                id={`${this.instanceId}-diff`}
                color="blue"
                appearance="solid"
                title={this.translations.diff}
                onClick={() => this._diff()}
                scale="s"
                class="edit-button"
              >
                <calcite-icon icon="compare" scale="s"></calcite-icon>
              </calcite-button>
              <calcite-button
                id={`${this.instanceId}-search`}
                appearance="outline"
                color="blue"
                title={this.translations.search}
                onClick={() => this._search()}
                scale="s"
                class="edit-button"
              >
                <calcite-icon icon="search" scale="s"></calcite-icon>
              </calcite-button>
              <calcite-button
                id={`${this.instanceId}-cancelEdits`}
                color="blue"
                appearance="solid"
                disabled
                title={this.translations.cancelEdits}
                onClick={() => this._cancelEdits()}
                scale="s"
                class="edit-button"
              >
                <calcite-icon icon="reset" scale="s"></calcite-icon>
              </calcite-button>
              <calcite-button
                id={`${this.instanceId}-saveEdits`}
                color="blue"
                appearance="solid"
                disabled
                title={this.translations.saveEdits}
                onClick={() => this._saveEdits()}
                scale="s"
                class="edit-button"
              >
                <calcite-icon icon="save" scale="s"></calcite-icon>
              </calcite-button>
            </div>
          </div>
          <div class="edit-parent">
            <div id={`${this.instanceId}-container`} class="edit-container"></div>
            <div id={`${this.instanceId}-diff-container`} class="edit-container not-visible"></div>
          </div>
        </div>
      </Host>
    );
  }

  componentDidRender(): void {
    // show is only true when we have our value and instanceId
    // we need a render to occur after these values are set so the child elements will
    // have the appropriate ids...once they have the id and are rendered we can show the editor
    if (this.show) {
      this._initEditor();
      this.show = false;
    } else if (this.value && this.instanceId && !this._editor) {
      // in some cases the watchers are not picking up that the values have been set
      // init the editor but no need to change the show state as it's already false and would just
      // cause an extra render
      // Also make sure that original gets the inital value if the watch was not hit
      if (this.original === undefined || this.original === "") {
        this.original = this.value;
      }
      this._initEditor();
    }
  }

  disconnectedCallback(): void {
    this._destroyEditor();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables (private)
  //
  //--------------------------------------------------------------------------

  private _editor: any;
  private _diffEditor: any;
  private _useDiffEditor: boolean = false;
  private currentModel: any;
  private _startEditingBtnHandler: any;
  private _searchBtnHandler: any;
  private _cancelEditsBtnHandler: any;
  private _saveEditsBtnHandler: any;
  private _isEditing: boolean = false;

  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------

  @Listen("organizationVariableSelected", { target: 'window' })
  organizationVariableSelected(event: CustomEvent): void {
    if (this._isEditing) {
      this._insertValue(event.detail.value);
    }
  }

  @Listen("solutionVariableSelected", { target: 'window' })
  solutionVariableSelected(event: CustomEvent): void {
    if (this._isEditing) {
      this._insertValue(event.detail.value);
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  @Event() jsonEditorSaved: EventEmitter;

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Initializes the editor when the web component is connected.
   *
   * @protected
   */
  _initEditor(): void {
    // Set up embedded editor
    if (monaco && monaco.editor) {
      const value = typeof(this.value) === "string" ? this.value : JSON.stringify(this.value);
      // parse to clear any formatting...then auto format with tab
      this.model = monaco.editor.createModel(JSON.stringify(JSON.parse(value), null, '\t'), "json")
      this._editor = monaco.editor.create(document.getElementById(`${this.instanceId}-container`), {
        model: this.model,
        language: 'json',
        readOnly: true,
        theme: "vs-dark",
        minimap: {
          enabled: false
        },
        automaticLayout: true
      });

      //this._editor.updateOptions({ tabSize: 2 });

      this.currentModel = this._editor.getModel();

      this.currentModel.onDidChangeContent(this._onEditorChange.bind(this));
      this._editor.onDidChangeModelDecorations(this._onDecorationsChange.bind(this));

      //setup diff editor
      this._diffEditor = monaco.editor.createDiffEditor(document.getElementById(`${this.instanceId}-diff-container`), {
        automaticLayout: true
      });

      const original = typeof(this.original) === "string" ? this.original : JSON.stringify(this.original);
      // parse to clear any formatting...then auto format with tab
      const v = JSON.stringify(JSON.parse(original), null, '\t');
      this._diffEditor.setModel({
        original: monaco.editor.createModel(v, "json"),
        modified: this.currentModel
      });
    }
  }

  _onEditorChange(): void {
    this._toggleUndoRedo();
  }

  _onDecorationsChange(): void {
    const model = this._editor.getModel();
    if (model === null) {
      return;
    }

    const owner = model.getModeId();
    const markers = monaco.editor.getModelMarkers({ owner });

    this.hasErrors = markers.length > 0;
  }

  _undo(): void {
    if (this.currentModel?.canUndo()) {
      this.currentModel.undo();
      this._toggleUndoRedo();
    }
  }

  _redo(): void {
    if (this.currentModel?.canRedo()) {
      this.currentModel.redo();
      this._toggleUndoRedo();
    }
  }

  _diff(): void {
    this._useDiffEditor = !this._useDiffEditor;
    let diffContainer = document.getElementById(`${this.instanceId}-diff-container`);
    let container = document.getElementById(`${this.instanceId}-container`);
    if (this._useDiffEditor) {
      const original = typeof(this.original) === "string" ? this.original : JSON.stringify(this.original);
      this._diffEditor.setModel({
        original: monaco.editor.createModel(JSON.stringify(JSON.parse(original), null, '\t'), "json"),
        modified: this._editor.getModel()
      });
      diffContainer.classList.remove("not-visible");
      container.classList.add("not-visible");
    } else {
      diffContainer.classList.add("not-visible");
      container.classList.remove("not-visible");
    }
  }

  _toggleUndoRedo(): void {
    if (this.currentModel?.canUndo()) {
      this._enableButton(`${this.instanceId}-undo`);
      //this._enableButton(`${this.instanceId}-save`);
    } else {
      this._disableButton(`${this.instanceId}-undo`);
    }

    if (this.currentModel?.canRedo()) {
      this._enableButton(`${this.instanceId}-redo`);
    } else {
      this._disableButton(`${this.instanceId}-redo`);
    }

    if (this.currentModel?.canUndo() || this.currentModel?.canRedo()) {
      this._enableButton(`${this.instanceId}-reset`);
    }
  }

  _insertValue(v): void {
    const editor: any = this._getEditor();
    const range = editor.getSelection();
    // use pushEditOperations so it will push to the undo stack
    this.currentModel.pushEditOperations([],[{
      forceMoveMarkers: true,
      text: v,
      range
    }]);
    editor.revealRange(range);
  }

  _getEditor(): any {
    return this._useDiffEditor ? this._diffEditor : this._editor;
  }

  /**
   * Only enable save when we are editing and json is valid
   *
   * @protected
   */
  _validateSave(): void {
    if (this._isEditing) {
      // const annotations: Ace.Annotation[] = this._editor.session.getAnnotations();
      // if (annotations.some(e => e.type === "error")) {
      //   this._disableButton(`${this.instanceId}-saveEdits`);
      // } else {
      //   this._enableButton(`${this.instanceId}-saveEdits`);
      // }
    }
  }

  /**
   * Frees the editor events and memory when the web component is disconnected.
   *
   * @protected
   */
  _destroyEditor(): void {
    this._startEditingBtnHandler?.removeEventListener("click", this._startEditing);
    this._searchBtnHandler?.removeEventListener("click", this._search);
    this._cancelEditsBtnHandler?.removeEventListener("click", this._cancelEdits);
    this._saveEditsBtnHandler?.removeEventListener("click", this._saveEdits);

    this._editor?.container.remove();

    this.original = undefined;
  }

  /**
   * Handles click on "Cancel edits" button.
   *
   * @protected
   */
  _cancelEdits(): void {
    this.value = this.original;
    this._doneEditing();
  }

  /**
   * Disables a button.
   *
   * @param buttonId Id of button to disable
   *
    * @protected
   */
  _disableButton(buttonId: string): void {
    document.getElementById(buttonId)?.setAttribute("disabled", "");
  }

  /**
   * Terminates editing.
   *
   * @protected
   */
  _doneEditing(): void {
    this._enableButton(`${this.instanceId}-startEditing`);
    this._disableButton(`${this.instanceId}-cancelEdits`);
    this._disableButton(`${this.instanceId}-saveEdits`);

    this._isEditing = false;
  }

  /**
   * Enables a button.
   *
   * @param buttonId Id of button to enable
   *
   * @protected
   */
  _enableButton(buttonId: string): void {
    document.getElementById(buttonId)?.removeAttribute("disabled");
  }

  /**
   * Handles click on "Save edits" button.
   *
   * @protected
   */
  _saveEdits(): void {
    this.value = JSON.parse(this._editor?.getValue());
    this._doneEditing();

    // not sure we need to do this since values will be grabbed elsewhere
    this.jsonEditorSaved.emit({
      detail: this.value
    });
  }

  /**
   * Handles click on "Search" button.
   *
   * @protected
   */
  _search(): void {
    const editor: any = this._getEditor();
    // force focus should likely just be a workaround
    //https://github.com/microsoft/monaco-editor/issues/2355
    editor.focus();
    editor.trigger('toggleFind', 'actions.find');
  }

  /**
   * Handles click on "Start editing" button.
   *
   * @protected
   */
  _startEditing(): void {
    this._isEditing = true;

    this._disableButton(`${this.instanceId}-startEditing`);
    this._enableButton(`${this.instanceId}-cancelEdits`);

    // need to talk through this
    // would like to disscard the start/stop/save idea
    // would like to just have editing started automatically
    // and support undo/redo/reset
    // enableBtn("stop");

    this._editor.updateOptions({ readOnly: false });
    monaco.editor.setTheme('vs');

    if (this.currentModel?.canUndo()) {
      this._enableButton(`${this.instanceId}-undo`);
    }

    if (this.currentModel?.canRedo()) {
      this._enableButton(`${this.instanceId}-redo`);
    }

    if (this.currentModel?.canUndo() || this.currentModel?.canRedo()) {
      //enableBtn('reset');
      //this._enableButton(`${this.instanceId}-reset`);
    }
  }
}
