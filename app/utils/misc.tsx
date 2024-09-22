import moment from "moment";

export const kelvinToCelsius = (kelvin: number) => {
  return Math.round(kelvin - 273.15);
};

export const unixToTime = (unix: number, timezone: number) => {
  return moment
    .unix(unix)
    .utcOffset(timezone / 60)
    .format("HH:mm");
};

export const unixToDay = (unix: number) => {
  return moment.unix(unix).format("ddd");
};

export const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num;
  }
};

export const airQulaityIndexText = [
  {
    rating: 10,
    description: "매우좋음(1등급)",
  },
  {
    rating: 20,
    description: "매우좋음(2등급)",
  },
  {
    rating: 30,
    description: "다소 좋음(3등급)",
  },
  {
    rating: 40,
    description: "다소 좋음(4등급)",
  },
  {
    rating: 50,
    description: "보통(5등급)",
  },
  {
    rating: 60,
    description: "다소 안좋음(6등급)",
  },
  {
    rating: 70,
    description: "안좋음(7등급)",
  },
  {
    rating: 80,
    description: "매우 안좋음(8등급)",
  },
  {
    rating: 90,
    description: "다소 심각(9등급)",
  },
  {
    rating: 100,
    description: "심각(10등급)",
  },
];
