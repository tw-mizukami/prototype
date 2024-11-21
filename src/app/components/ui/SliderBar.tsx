"use client";

import React, { useEffect, useRef } from "react";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import _ from "lodash";
import "@/app/styles/custom-slider.css";

interface HTMLDivElement {
  noUiSlider?: {
    on(event: string, callback: (values: string[], handle: number) => void): void;
    set(values: [number | null, number | null]): void;
    destroy(): void;
  };
}

const SliderBar = () => {
  const sliderRef = useRef<any>(null);
  const minInputRef = useRef<HTMLInputElement>(null);
  const maxInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const slider = sliderRef.current as unknown as noUiSlider.TargetElement | null;
        const minInput = minInputRef.current;
        const maxInput = maxInputRef.current;

        if (!slider || !minInput || !maxInput) {
            return;
        }

        noUiSlider.create(slider, {
            start: [0, 100],
            range: {
            min: 0,
            max: 100,
            },
            connect: true,
            tooltips: [true, true],
            format: {
            to: (value) => Math.round(value),
            from: (value) => Number(value),
            },
        });

        slider.noUiSlider?.on("update", (values) => {
            if (minInput && maxInput) {
            minInput.value = Math.round(Number(values[0])).toString();
            maxInput.value = Math.round(Number(values[1])).toString();
            }
        });

        return () => {
            if (slider.noUiSlider) {
            slider.noUiSlider.destroy();
            }
        };
    }, []);

  return (
    <div>
      <div ref={sliderRef} id="hs-pass-values-to-inputs" className="slider-container"></div>
      <div className="flex flex-row space-x-4 mt-5">
        <div className="basis-1/2">
          <label htmlFor="hs-pass-values-to-inputs-min-target" className="block text-sm font-medium mb-2">
            Min:
          </label>
          <input
            ref={minInputRef}
            id="hs-pass-values-to-inputs-min-target"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm text-black"
            type="number"
            defaultValue="0"
          />
        </div>
        <div className="basis-1/2">
          <label htmlFor="hs-pass-values-to-inputs-max-target" className="block text-sm font-medium mb-2">
            Max:
          </label>
          <input
            ref={maxInputRef}
            id="hs-pass-values-to-inputs-max-target"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm text-black"
            type="number"
            defaultValue="100"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderBar;
