/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ISolutionConfiguration } from "./components/solution-configuration/solution-configuration";
import { IVariableItem } from "./components/solution-variables/solution-variables";
import { IOrganizationVariableItem } from "./components/solution-organization-variables/solution-organization-variables";
import { ISolutionItem } from "./components/solution-item/solution-item";
import { IInventoryItem } from "./components/solution-contents/solution-contents";
import { ISolutionItem as ISolutionItem1 } from "./components/solution-item/solution-item";
import { IItemDetails } from "./components/solution-item-details/solution-item-details";
import { IItemShare } from "./components/solution-item-sharing/solution-item-sharing";
import { IOrganizationVariableItem as IOrganizationVariableItem1 } from "./components/solution-organization-variables/solution-organization-variables";
import { IResourceItem } from "./components/solution-resource-item/solution-resource-item";
import { ISpatialRefRepresentation } from "./components/solution-spatial-ref/solution-spatial-ref";
import { ITemplateData } from "./components/solution-template-data/solution-template-data";
import { IVariableItem as IVariableItem1 } from "./components/solution-variables/solution-variables";
export namespace Components {
    interface JsonEditor {
        /**
          * Contains a public value to indicate if the model has any errors that would prevent saving it.
         */
        "hasErrors": boolean;
        /**
          * Contains a unique identifier for when we have multiple instances of the editor. For example when we want to show an items data as well as an items properties.  Need to rethink this..would like it to be more generic. We are currently tied to either data or props as this helps us know how to get the correct model from the store.
         */
        "instanceid": any;
        /**
          * Contains the public model for this component.
         */
        "model": any;
        /**
          * Contains the original source item json as it was when the component was created.
         */
        "original": any;
        /**
          * Contains the translations for this component.
         */
        "translations": any;
        /**
          * Contains the public value for this component. This should be an item Id for one of the models in the store.
         */
        "value": any;
    }
    interface SolutionConfiguration {
        /**
          * Contains the current solution item we are working with
         */
        "item": ISolutionItem;
        /**
          * Contains the organization based variables
         */
        "organizationVariables": IOrganizationVariableItem[];
        /**
          * Contains the solution based variables
         */
        "solutionVariables": IVariableItem[];
        /**
          * Contains the raw templates from the solution item
         */
        "templates": string;
        /**
          * Contains the translations for this component.
         */
        "translations": any;
        /**
          * Contains the public value for this component.
         */
        "value": ISolutionConfiguration;
    }
    interface SolutionContents {
        /**
          * Contains the translations for this component.
         */
        "translations": any;
        /**
          * Contains the public value for this component.
         */
        "value": IInventoryItem[];
    }
    interface SolutionItem {
        /**
          * Contains the organization based variables
         */
        "organizationVariables": any[];
        /**
          * Contains the solution based variables
         */
        "solutionVariables": any[];
        /**
          * Contains the translations for this component.
         */
        "translations": any;
        /**
          * Contains the public value for this component.
         */
        "value": ISolutionItem;
    }
    interface SolutionItemDetails {
        /**
          * Contains the translations for this component.
         */
        "translations": any;
        "type": string;
        /**
          * Contains the public value for this component.
         */
        "value": IItemDetails;
    }
    interface SolutionItemIcon {
        /**
          * Indicate if this is portal
         */
        "isPortal": boolean;
        /**
          * Contains the translations for this component.
         */
        "translations": any;
        /**
          * The type for the item
         */
        "type": string;
        /**
          * The typeKeywords for the item
         */
        "typeKeywords": string[];
    }
    interface SolutionItemSharing {
        /**
          * Contains the translations for this component.
         */
        "translations": any;
        /**
          * Contains the public value for this component.
         */
        "value": IItemShare[];
    }
    interface SolutionOrganizationVariables {
        /**
          * Contains the translations for this component.
         */
        "translations": any;
        /**
          * Contains the public value for this component.
         */
        "value": IOrganizationVariableItem[];
    }
    interface SolutionResourceItem {
        /**
          * Contains the translations for this component.
         */
        "translations": any;
        /**
          * Contains the public value for this component.
         */
        "value": IResourceItem;
    }
    interface SolutionSpatialRef {
        /**
          * Returns the spatial reference description of the supplied value. (Exposes private method `_createSpatialRefDisplay` for testing.)
          * @param value WKID or WKT or null for default
          * @returns If component is using a WKID, description using WKID; otherwise, the WKT; defaults to 102100
         */
        "createSpatialRefDisplay": (value: string) => Promise<ISpatialRefRepresentation>;
        /**
          * Returns the current spatial reference description. (Exposes private variable `spatialRef` for testing.)
         */
        "getSpatialRef": () => Promise<ISpatialRefRepresentation>;
        /**
          * Contains the translations for this component.
         */
        "translations": any;
        /**
          * Contains the public value for this component.
         */
        "value": string;
        /**
          * Converts a WKID into a spatial reference description. (Exposes private method `_wkidToDisplay` for testing.)
          * @param wkid WKID to look up
          * @returns Description, or "WKID &lt;wkid&gt;" if a description doesn't exist for the WKID
         */
        "wkidToDisplay": (wkid: number) => Promise<string>;
    }
    interface SolutionTemplateData {
        /**
          * This needs to be unique for props vs data of an item
         */
        "instanceid": string;
        /**
          * Should be set to true for items that store their data as a resource Will allow for upload and download of the resource
         */
        "isResource": boolean;
        /**
          * A templates itemId. This is used to get the correct model from a store in the json-editor
         */
        "itemid": string;
        /**
          * Contains the organization based variables
         */
        "organizationVariables": IOrganizationVariableItem[];
        /**
          * Contains the solution based variables
         */
        "solutionVariables": IVariableItem[];
        /**
          * Contains the translations for this component.
         */
        "translations": any;
        /**
          * Contains the public value for this component.  When working with a resource item this should contain an IResourceItem  When working with a json type item this should contain the data and vars
         */
        "value": ITemplateData;
    }
    interface SolutionVariables {
        /**
          * Contains the translations for this component.
         */
        "translations": any;
        /**
          * Contains the public value for this component.
         */
        "value": IVariableItem[];
    }
    interface StoreManager {
        /**
          * Contains source json as a string
         */
        "value": string;
    }
}
declare global {
    interface HTMLJsonEditorElement extends Components.JsonEditor, HTMLStencilElement {
    }
    var HTMLJsonEditorElement: {
        prototype: HTMLJsonEditorElement;
        new (): HTMLJsonEditorElement;
    };
    interface HTMLSolutionConfigurationElement extends Components.SolutionConfiguration, HTMLStencilElement {
    }
    var HTMLSolutionConfigurationElement: {
        prototype: HTMLSolutionConfigurationElement;
        new (): HTMLSolutionConfigurationElement;
    };
    interface HTMLSolutionContentsElement extends Components.SolutionContents, HTMLStencilElement {
    }
    var HTMLSolutionContentsElement: {
        prototype: HTMLSolutionContentsElement;
        new (): HTMLSolutionContentsElement;
    };
    interface HTMLSolutionItemElement extends Components.SolutionItem, HTMLStencilElement {
    }
    var HTMLSolutionItemElement: {
        prototype: HTMLSolutionItemElement;
        new (): HTMLSolutionItemElement;
    };
    interface HTMLSolutionItemDetailsElement extends Components.SolutionItemDetails, HTMLStencilElement {
    }
    var HTMLSolutionItemDetailsElement: {
        prototype: HTMLSolutionItemDetailsElement;
        new (): HTMLSolutionItemDetailsElement;
    };
    interface HTMLSolutionItemIconElement extends Components.SolutionItemIcon, HTMLStencilElement {
    }
    var HTMLSolutionItemIconElement: {
        prototype: HTMLSolutionItemIconElement;
        new (): HTMLSolutionItemIconElement;
    };
    interface HTMLSolutionItemSharingElement extends Components.SolutionItemSharing, HTMLStencilElement {
    }
    var HTMLSolutionItemSharingElement: {
        prototype: HTMLSolutionItemSharingElement;
        new (): HTMLSolutionItemSharingElement;
    };
    interface HTMLSolutionOrganizationVariablesElement extends Components.SolutionOrganizationVariables, HTMLStencilElement {
    }
    var HTMLSolutionOrganizationVariablesElement: {
        prototype: HTMLSolutionOrganizationVariablesElement;
        new (): HTMLSolutionOrganizationVariablesElement;
    };
    interface HTMLSolutionResourceItemElement extends Components.SolutionResourceItem, HTMLStencilElement {
    }
    var HTMLSolutionResourceItemElement: {
        prototype: HTMLSolutionResourceItemElement;
        new (): HTMLSolutionResourceItemElement;
    };
    interface HTMLSolutionSpatialRefElement extends Components.SolutionSpatialRef, HTMLStencilElement {
    }
    var HTMLSolutionSpatialRefElement: {
        prototype: HTMLSolutionSpatialRefElement;
        new (): HTMLSolutionSpatialRefElement;
    };
    interface HTMLSolutionTemplateDataElement extends Components.SolutionTemplateData, HTMLStencilElement {
    }
    var HTMLSolutionTemplateDataElement: {
        prototype: HTMLSolutionTemplateDataElement;
        new (): HTMLSolutionTemplateDataElement;
    };
    interface HTMLSolutionVariablesElement extends Components.SolutionVariables, HTMLStencilElement {
    }
    var HTMLSolutionVariablesElement: {
        prototype: HTMLSolutionVariablesElement;
        new (): HTMLSolutionVariablesElement;
    };
    interface HTMLStoreManagerElement extends Components.StoreManager, HTMLStencilElement {
    }
    var HTMLStoreManagerElement: {
        prototype: HTMLStoreManagerElement;
        new (): HTMLStoreManagerElement;
    };
    interface HTMLElementTagNameMap {
        "json-editor": HTMLJsonEditorElement;
        "solution-configuration": HTMLSolutionConfigurationElement;
        "solution-contents": HTMLSolutionContentsElement;
        "solution-item": HTMLSolutionItemElement;
        "solution-item-details": HTMLSolutionItemDetailsElement;
        "solution-item-icon": HTMLSolutionItemIconElement;
        "solution-item-sharing": HTMLSolutionItemSharingElement;
        "solution-organization-variables": HTMLSolutionOrganizationVariablesElement;
        "solution-resource-item": HTMLSolutionResourceItemElement;
        "solution-spatial-ref": HTMLSolutionSpatialRefElement;
        "solution-template-data": HTMLSolutionTemplateDataElement;
        "solution-variables": HTMLSolutionVariablesElement;
        "store-manager": HTMLStoreManagerElement;
    }
}
declare namespace LocalJSX {
    interface JsonEditor {
        /**
          * Contains a public value to indicate if the model has any errors that would prevent saving it.
         */
        "hasErrors"?: boolean;
        /**
          * Contains a unique identifier for when we have multiple instances of the editor. For example when we want to show an items data as well as an items properties.  Need to rethink this..would like it to be more generic. We are currently tied to either data or props as this helps us know how to get the correct model from the store.
         */
        "instanceid"?: any;
        /**
          * Contains the public model for this component.
         */
        "model"?: any;
        "onJsonEditorSaved"?: (event: CustomEvent<any>) => void;
        /**
          * Contains the original source item json as it was when the component was created.
         */
        "original"?: any;
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
        /**
          * Contains the public value for this component. This should be an item Id for one of the models in the store.
         */
        "value"?: any;
    }
    interface SolutionConfiguration {
        /**
          * Contains the current solution item we are working with
         */
        "item"?: ISolutionItem;
        /**
          * Contains the organization based variables
         */
        "organizationVariables"?: IOrganizationVariableItem[];
        /**
          * Contains the solution based variables
         */
        "solutionVariables"?: IVariableItem[];
        /**
          * Contains the raw templates from the solution item
         */
        "templates"?: string;
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
        /**
          * Contains the public value for this component.
         */
        "value"?: ISolutionConfiguration;
    }
    interface SolutionContents {
        "onSolutionItemSelected"?: (event: CustomEvent<any>) => void;
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
        /**
          * Contains the public value for this component.
         */
        "value"?: IInventoryItem[];
    }
    interface SolutionItem {
        /**
          * Contains the organization based variables
         */
        "organizationVariables"?: any[];
        /**
          * Contains the solution based variables
         */
        "solutionVariables"?: any[];
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
        /**
          * Contains the public value for this component.
         */
        "value"?: ISolutionItem;
    }
    interface SolutionItemDetails {
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
        "type"?: string;
        /**
          * Contains the public value for this component.
         */
        "value"?: IItemDetails;
    }
    interface SolutionItemIcon {
        /**
          * Indicate if this is portal
         */
        "isPortal"?: boolean;
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
        /**
          * The type for the item
         */
        "type"?: string;
        /**
          * The typeKeywords for the item
         */
        "typeKeywords"?: string[];
    }
    interface SolutionItemSharing {
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
        /**
          * Contains the public value for this component.
         */
        "value"?: IItemShare[];
    }
    interface SolutionOrganizationVariables {
        "onOrganizationVariableSelected"?: (event: CustomEvent<any>) => void;
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
        /**
          * Contains the public value for this component.
         */
        "value"?: IOrganizationVariableItem[];
    }
    interface SolutionResourceItem {
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
        /**
          * Contains the public value for this component.
         */
        "value"?: IResourceItem;
    }
    interface SolutionSpatialRef {
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
        /**
          * Contains the public value for this component.
         */
        "value"?: string;
    }
    interface SolutionTemplateData {
        /**
          * This needs to be unique for props vs data of an item
         */
        "instanceid"?: string;
        /**
          * Should be set to true for items that store their data as a resource Will allow for upload and download of the resource
         */
        "isResource"?: boolean;
        /**
          * A templates itemId. This is used to get the correct model from a store in the json-editor
         */
        "itemid"?: string;
        /**
          * Contains the organization based variables
         */
        "organizationVariables"?: IOrganizationVariableItem[];
        /**
          * Contains the solution based variables
         */
        "solutionVariables"?: IVariableItem[];
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
        /**
          * Contains the public value for this component.  When working with a resource item this should contain an IResourceItem  When working with a json type item this should contain the data and vars
         */
        "value"?: ITemplateData;
    }
    interface SolutionVariables {
        "onSolutionVariableSelected"?: (event: CustomEvent<any>) => void;
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
        /**
          * Contains the public value for this component.
         */
        "value"?: IVariableItem[];
    }
    interface StoreManager {
        "onStateLoaded"?: (event: CustomEvent<any>) => void;
        /**
          * Contains source json as a string
         */
        "value"?: string;
    }
    interface IntrinsicElements {
        "json-editor": JsonEditor;
        "solution-configuration": SolutionConfiguration;
        "solution-contents": SolutionContents;
        "solution-item": SolutionItem;
        "solution-item-details": SolutionItemDetails;
        "solution-item-icon": SolutionItemIcon;
        "solution-item-sharing": SolutionItemSharing;
        "solution-organization-variables": SolutionOrganizationVariables;
        "solution-resource-item": SolutionResourceItem;
        "solution-spatial-ref": SolutionSpatialRef;
        "solution-template-data": SolutionTemplateData;
        "solution-variables": SolutionVariables;
        "store-manager": StoreManager;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "json-editor": LocalJSX.JsonEditor & JSXBase.HTMLAttributes<HTMLJsonEditorElement>;
            "solution-configuration": LocalJSX.SolutionConfiguration & JSXBase.HTMLAttributes<HTMLSolutionConfigurationElement>;
            "solution-contents": LocalJSX.SolutionContents & JSXBase.HTMLAttributes<HTMLSolutionContentsElement>;
            "solution-item": LocalJSX.SolutionItem & JSXBase.HTMLAttributes<HTMLSolutionItemElement>;
            "solution-item-details": LocalJSX.SolutionItemDetails & JSXBase.HTMLAttributes<HTMLSolutionItemDetailsElement>;
            "solution-item-icon": LocalJSX.SolutionItemIcon & JSXBase.HTMLAttributes<HTMLSolutionItemIconElement>;
            "solution-item-sharing": LocalJSX.SolutionItemSharing & JSXBase.HTMLAttributes<HTMLSolutionItemSharingElement>;
            "solution-organization-variables": LocalJSX.SolutionOrganizationVariables & JSXBase.HTMLAttributes<HTMLSolutionOrganizationVariablesElement>;
            "solution-resource-item": LocalJSX.SolutionResourceItem & JSXBase.HTMLAttributes<HTMLSolutionResourceItemElement>;
            "solution-spatial-ref": LocalJSX.SolutionSpatialRef & JSXBase.HTMLAttributes<HTMLSolutionSpatialRefElement>;
            "solution-template-data": LocalJSX.SolutionTemplateData & JSXBase.HTMLAttributes<HTMLSolutionTemplateDataElement>;
            "solution-variables": LocalJSX.SolutionVariables & JSXBase.HTMLAttributes<HTMLSolutionVariablesElement>;
            "store-manager": LocalJSX.StoreManager & JSXBase.HTMLAttributes<HTMLStoreManagerElement>;
        }
    }
}
