/// <reference types="node" />

declare module "next-nprogress/component" {
  import * as React from "react";

  interface Props {
    /**
     * Color of the progress bar and spinner.
     */
    color?: string;
    /**
     * Time in ms after nprogress will run. Defaults to 300ms.
     */
    showAfterMs?: number;
    /**
     * Whether to show the spinner. Defaults to true.
     */
    spinner?: boolean;
    // /**
    //  * NProgress configuration options.
    //  */
    // options?: {};
  }

  declare class NProgressContainer extends React.Component<Props> {}

  export default NProgressContainer;
}
