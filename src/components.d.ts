/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { UserSession } from "@esri/solution-common";
import { IInventoryItem, IItemDetails, IItemShare, IOrganizationVariableItem, IResourcePath, ISolutionConfiguration, ISolutionItem, ISolutionSpatialReferenceInfo, ISpatialRefRepresentation, ITemplateData, IVariableItem } from "./utils/interfaces";
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
        "reset": () => Promise<any>;
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
          * Credentials for requests
         */
        "authentication": UserSession;
        "getEditModels": () => Promise<any>;
        "getSourceTemplates": () => Promise<any>;
        "getSpatialReferenceInfo": () => Promise<ISolutionSpatialReferenceInfo>;
        /**
          * Contains the current solution item we are working with
         */
        "item": ISolutionItem;
        /**
          * Contains the current solution item id
         */
        "itemid": string;
        "save": () => Promise<any>;
        /**
          * Used to show/hide loading indicator
         */
        "showLoading": boolean;
        /**
          * Contains the current solution item data
         */
        "sourceItemData": any;
        /**
          * Contains the raw templates from the solution item
         */
        "templates": any[];
        /**
          * Contains the translations for this component.
         */
        "translations": any;
        /**
          * Used to show/hide the content tree
         */
        "treeOpen": boolean;
        /**
          * Contains the public value for this component.
         */
        "value": ISolutionConfiguration;
    }
    interface SolutionContents {
        /**
          * Contains the current item that is selected.
         */
        "selectedItem": ISolutionItem;
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
          * Credentials for requests
         */
        "authentication": UserSession;
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
        /**
          * Contains the public type for this component.
         */
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
        "getShareInfo": () => Promise<any>;
        /**
          * Contains the public id for the group these items will be shared or un-shared with.
         */
        "groupId": string;
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
          * Credentials for requests
         */
        "authentication": UserSession;
        /**
          * The templates itemId. This is used to get the correct model from a store in the json-editor
         */
        "itemid": string;
        /**
          * The templates resourceFilePaths.
         */
        "resourceFilePaths": IResourcePath[];
        /**
          * The templates resources.
         */
        "resources": {};
        /**
          * Contains the translations for this component.
         */
        "translations": any;
    }
    interface SolutionSpatialRef {
        /**
          * Returns the spatial reference description of the supplied value. (Exposes private method `_createSpatialRefDisplay` for testing.)
          * @param value WKID or WKT or null for default
          * @returns If component is using a WKID, description using WKID; otherwise, the WKT; defaults to 102100
         */
        "createSpatialRefDisplay": (value: string) => Promise<ISpatialRefRepresentation>;
        /**
          * The wkid that will be used as the default when no user selection has been made.
         */
        "defaultWkid": number;
        /**
          * Returns the current spatial reference description. (Exposes private variable `spatialRef` for testing.)
         */
        "getSpatialRef": () => Promise<ISpatialRefRepresentation>;
        /**
          * Indicates if the control has been enabled. The first time Spatial Reference has been enabled it should enable all feature services.
         */
        "loaded": boolean;
        /**
          * When true, all but the main switch are disabled to prevent interaction.
         */
        "locked": boolean;
        /**
          * List of service names the spatial reference should apply to
         */
        "services": string[];
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
          * Credentials for requests
         */
        "authentication": UserSession;
        /**
          * This needs to be unique for props vs data of an item
         */
        "instanceid": string;
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
        /**
          * Used to show/hide the variable containers
         */
        "varsOpen": boolean;
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
          * Credentials for requests
         */
        "authentication": UserSession;
        /**
          * Templates for the current solution
         */
        "templates": any[];
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
          * Credentials for requests
         */
        "authentication"?: UserSession;
        /**
          * Contains the current solution item we are working with
         */
        "item"?: ISolutionItem;
        /**
          * Contains the current solution item id
         */
        "itemid"?: string;
        "onSolutionLoaded"?: (event: CustomEvent<any>) => void;
        /**
          * Used to show/hide loading indicator
         */
        "showLoading"?: boolean;
        /**
          * Contains the current solution item data
         */
        "sourceItemData"?: any;
        /**
          * Contains the raw templates from the solution item
         */
        "templates"?: any[];
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
        /**
          * Used to show/hide the content tree
         */
        "treeOpen"?: boolean;
        /**
          * Contains the public value for this component.
         */
        "value"?: ISolutionConfiguration;
    }
    interface SolutionContents {
        "onSolutionItemSelected"?: (event: CustomEvent<any>) => void;
        /**
          * Contains the current item that is selected.
         */
        "selectedItem"?: ISolutionItem;
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
          * Credentials for requests
         */
        "authentication"?: UserSession;
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
        /**
          * Contains the public type for this component.
         */
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
          * Contains the public id for the group these items will be shared or un-shared with.
         */
        "groupId"?: string;
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
          * Credentials for requests
         */
        "authentication"?: UserSession;
        /**
          * The templates itemId. This is used to get the correct model from a store in the json-editor
         */
        "itemid"?: string;
        /**
          * The templates resourceFilePaths.
         */
        "resourceFilePaths"?: IResourcePath[];
        /**
          * The templates resources.
         */
        "resources"?: {};
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
    }
    interface SolutionSpatialRef {
        /**
          * The wkid that will be used as the default when no user selection has been made.
         */
        "defaultWkid"?: number;
        /**
          * Indicates if the control has been enabled. The first time Spatial Reference has been enabled it should enable all feature services.
         */
        "loaded"?: boolean;
        /**
          * When true, all but the main switch are disabled to prevent interaction.
         */
        "locked"?: boolean;
        "onFeatureServiceSpatialReferenceChange"?: (event: CustomEvent<any>) => void;
        /**
          * List of service names the spatial reference should apply to
         */
        "services"?: string[];
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
          * Credentials for requests
         */
        "authentication"?: UserSession;
        /**
          * This needs to be unique for props vs data of an item
         */
        "instanceid"?: string;
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
        /**
          * Used to show/hide the variable containers
         */
        "varsOpen"?: boolean;
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
        /**
          * Credentials for requests
         */
        "authentication"?: UserSession;
        "onStateLoaded"?: (event: CustomEvent<any>) => void;
        /**
          * Templates for the current solution
         */
        "templates"?: any[];
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
