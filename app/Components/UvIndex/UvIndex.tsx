"use client";

import { useGlobalContext } from "@/app/context/globalContext";
import { sun } from "@/app/utils/Icons";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { UvProgress } from "../UvProgress/UvProgress";

function UvIndex() {
  const { uvIndex } = useGlobalContext();

  if (!uvIndex || !uvIndex.daily) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const { daily } = uvIndex;
  const { uv_index_clear_sky_max, uv_index_max } = daily;

  const uvIndexMax = uv_index_max[0].toFixed(0);

  const uvIndexCategory = (uvIndex: number) => {
    if (uvIndex <= 2) {
      return {
        text: "낮음",
        protection: "실외 활동 권장",
      };
    } else if (uvIndex <= 5) {
      return {
        text: "보통",
        protection: "직사광선 회피",
      };
    } else if (uvIndex <= 7) {
      return {
        text: "높음",
        protection: "모자와 선글래스 착용",
      };
    } else if (uvIndex <= 10) {
      return {
        text: "매우 높음",
        protection: "2시간 작업 후 30분 휴식",
      };
    } else if (uvIndex > 10) {
      return {
        text: "심각",
        protection: "실내 활동 권장",
      };
    } else {
      return {
        text: "심각",
        protection: "외출 자제",
      };
    }
  };

  const marginLeftPercentage = (uvIndexMax / 14) * 100;

  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-5 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">{sun} 자외선 지수</h2>
        <div className="pt-4 flex flex-col gap-1">
          <p className="text-2xl">
            {uvIndexMax}
            <span className="text-sm">
              ({uvIndexCategory(uvIndexMax).text})
            </span>
          </p>

          <UvProgress
            value={marginLeftPercentage}
            max={14}
            className="progress"
          />
        </div>
      </div>

      <p className="text-sm">{uvIndexCategory(uvIndexMax).protection} </p>
    </div>
  );
}

export default UvIndex;
