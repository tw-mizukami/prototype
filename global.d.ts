// global.d.ts
declare module "nouislider" {
  export interface TargetElement extends HTMLDivElement {
    noUiSlider: {
      on(event: string, callback: (values: string[], handle: number) => void): void;
      set(values: [number | null, number | null]): void;
      destroy(): void;
    };
  }

  export interface Options {
    start: number[]; // 初期値
    range: {
      min: number; // 最小値
      max: number; // 最大値
    };
    connect?: boolean | boolean[];
    tooltips?: boolean | boolean[];
    format?: {
      to: (value: number) => string | number;
      from: (value: string) => number;
    };
  }

  export function create(target: TargetElement, options: Options): void;
}
