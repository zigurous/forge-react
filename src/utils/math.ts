export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function lerp(a: number, b: number, t: number): number {
  t = clamp(t, 0, 1);
  return a + (b - a) * t;
}

export function inverseLerp(a: number, b: number, value: number): number {
  const t = (value - a) / (b - a);
  return clamp(t, 0, 1);
}

export function distance(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): number {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

export function smoothdamp(
  current: number,
  target: number,
  currentVelocity: React.MutableRefObject<number>,
  smoothTime: number,
  maxSpeed: number,
  deltaTime: number,
): number {
  smoothTime = Math.max(0.0001, smoothTime);
  const num = 2 / smoothTime;
  const num2 = num * deltaTime;
  const num3 = 1 / (1 + num2 + 0.48 * num2 * num2 + 0.235 * num2 * num2 * num2);
  let num4 = current - target;
  let num5 = target;
  const num6 = maxSpeed * smoothTime;
  num4 = Math.min(Math.max(num4, -num6), num6);
  target = current - num4;
  const num7 = (currentVelocity.current + num * num4) * deltaTime;
  currentVelocity.current = (currentVelocity.current - num * num7) * num3;
  let num8 = target + (num4 + num7) * num3;
  if (num5 - current > 0 == num8 > num5) {
    num8 = num5;
    currentVelocity.current = (num8 - num5) / deltaTime;
  }
  return num8;
}
