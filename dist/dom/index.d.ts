export declare const typeOf: (element: any) => any;
export declare const createEl: (type: string) => HTMLElement;
export declare const setClass: (element: HTMLElement, className: string) => void[];
export declare const removeClass: (element: HTMLElement, className: string) => void[];
export declare const setStyle: (element: HTMLElement, object: Object) => any[];
export declare const getSelector: (element: HTMLElement) => string | undefined;
export declare const platform: () => {
    isMobile: boolean;
    isDesktop: boolean;
    isDark: boolean;
    isLight: boolean;
};
