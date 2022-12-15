interface Point {
  x: number
  y: number
  [x: string | number | symbol]: any
}

export const getDistance = (p1: Point, p2: Point) => {
  const x = p2.x - p1.x
  const y = p2.y - p1.y
  return Math.sqrt(x * x + y * y)
}
