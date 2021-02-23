/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IItemDetails } from "./components/solution-item-details/solution-item-details";
import { ISpatialRefRepresentation } from "./components/solution-spatial-ref/solution-spatial-ref";
export namespace Components {
    interface SolutionConfiguration {
        /**
          * Contains the translations for this component.
         */
        "translations": any;
        /**
          * Contains the public value for this component.
         */
        "value": any;
    }
    interface SolutionInventory {
        /**
          * Contains the translations for this component.
         */
        "translations": any;
        /**
          * Contains the public value for this component.
         */
        "value": any;
    }
    interface SolutionItem {
        "translations": any;
        "value": any;
    }
    interface SolutionItemDetails {
        /**
          * Contains the translations for this component.
         */
        "translations": any;
        /**
          * Contains the public value for this component.
         */
        "value": IItemDetails;
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
}
declare global {
    interface HTMLSolutionConfigurationElement extends Components.SolutionConfiguration, HTMLStencilElement {
    }
    var HTMLSolutionConfigurationElement: {
        prototype: HTMLSolutionConfigurationElement;
        new (): HTMLSolutionConfigurationElement;
    };
    interface HTMLSolutionInventoryElement extends Components.SolutionInventory, HTMLStencilElement {
    }
    var HTMLSolutionInventoryElement: {
        prototype: HTMLSolutionInventoryElement;
        new (): HTMLSolutionInventoryElement;
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
    interface HTMLSolutionSpatialRefElement extends Components.SolutionSpatialRef, HTMLStencilElement {
    }
    var HTMLSolutionSpatialRefElement: {
        prototype: HTMLSolutionSpatialRefElement;
        new (): HTMLSolutionSpatialRefElement;
    };
    interface HTMLElementTagNameMap {
        "solution-configuration": HTMLSolutionConfigurationElement;
        "solution-inventory": HTMLSolutionInventoryElement;
        "solution-item": HTMLSolutionItemElement;
        "solution-item-details": HTMLSolutionItemDetailsElement;
        "solution-spatial-ref": HTMLSolutionSpatialRefElement;
    }
}
declare namespace LocalJSX {
    interface SolutionConfiguration {
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
        /**
          * Contains the public value for this component.
         */
        "value"?: any;
    }
    interface SolutionInventory {
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
        /**
          * Contains the public value for this component.
         */
        "value"?: any;
    }
    interface SolutionItem {
        "translations"?: any;
        "value"?: any;
    }
    interface SolutionItemDetails {
        /**
          * Contains the translations for this component.
         */
        "translations"?: any;
        /**
          * Contains the public value for this component.
         */
        "value"?: IItemDetails;
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
    interface IntrinsicElements {
        "solution-configuration": SolutionConfiguration;
        "solution-inventory": SolutionInventory;
        "solution-item": SolutionItem;
        "solution-item-details": SolutionItemDetails;
        "solution-spatial-ref": SolutionSpatialRef;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "solution-configuration": LocalJSX.SolutionConfiguration & JSXBase.HTMLAttributes<HTMLSolutionConfigurationElement>;
            "solution-inventory": LocalJSX.SolutionInventory & JSXBase.HTMLAttributes<HTMLSolutionInventoryElement>;
            "solution-item": LocalJSX.SolutionItem & JSXBase.HTMLAttributes<HTMLSolutionItemElement>;
            "solution-item-details": LocalJSX.SolutionItemDetails & JSXBase.HTMLAttributes<HTMLSolutionItemDetailsElement>;
            "solution-spatial-ref": LocalJSX.SolutionSpatialRef & JSXBase.HTMLAttributes<HTMLSolutionSpatialRefElement>;
        }
    }
}
