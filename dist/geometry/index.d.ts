interface Point {
    x: number;
    y: number;
    [x: string | number | symbol]: any;
}
export declare const getDistance: (p1: Point, p2: Point) => number;
export {};
