export declare const loadText: (path: string) => Promise<string>;
export declare const loadJson: (path: string) => Promise<any>;
export declare const setClass: (element: HTMLElement, className: string) => void[];
export declare const removeClass: (element: HTMLElement, className: string) => void[];
export declare const setStyle: (element: HTMLElement, object: Object) => any[];
export declare const getSelector: (element: HTMLElement) => string;
export declare const platform: () => {
    isMobile: boolean;
    isDesktop: boolean;
    isDark: boolean;
    isLight: boolean;
};
