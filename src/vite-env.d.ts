/// <reference types="vite/client" />

declare module "*.svg" {
  import React from "react";
  const SVGComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  export default SVGComponent;
}
