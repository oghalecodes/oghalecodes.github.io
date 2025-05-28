declare module 'wowjs' {
  export class WOW {
    constructor(options?: WOWOptions);
    init(): void;
    sync(): void;
  }
}

declare module 'wowjs/dist/wow.js' {
  const content: any;
  export default content;
}

interface WOWOptions {
  boxClass?: string;
  animateClass?: string;
  offset?: number;
  mobile?: boolean;
  live?: boolean;
  callback?: (box: HTMLElement) => void;
  scrollContainer?: string | null;
  resetAnimation?: boolean;
}

// Add WOW to the global window object
interface Window {
  WOW: {
    new(options?: WOWOptions): {
      init(): void;
      sync(): void;
    }
  }
}
