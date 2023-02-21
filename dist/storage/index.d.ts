export declare const tinyIDB: () => {
    get: (key: string) => Promise<void>;
    set: (key: string, value: any) => Promise<void>;
    remove: (key: string) => Promise<void>;
};
