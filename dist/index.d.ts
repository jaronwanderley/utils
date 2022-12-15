export declare const range: (start?: number, end?: number, step?: number) => number[];
export declare const typeOf: (element: any) => any;
export declare const createEl: (type: string) => HTMLElement;
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
export interface Point {
    x: number;
    y: number;
    [x: string | number | symbol]: any;
}
export declare const getDistance: (p1: Point, p2: Point) => number;
export declare const loadText: (path: string) => Promise<string>;
export declare const loadJson: (path: string) => Promise<any>;
export declare const clamp: (value: number, min: number, max: number) => number;
export declare const get: (path: string, obj?: Window | Object) => any;
export declare const set: (path: string, object: Object | Window | undefined, value: any) => any;
export declare const getListOfPaths: (obj?: object) => any;
