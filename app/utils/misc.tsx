import moment from "moment";
import { text } from "stream/consumers";

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
}

export const formatNumber = (num: number) => {
    if(num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    else if(num >= 1000) return (num / 1000).toFixed(1) + "K";
    else return num;
}

export const airQualityIndex = [
    {
        rating: 0,
        description: "Good",
        color: "Green",
    },
    {
        rating: 51,
        description: "Moderate",
        color: "Yellow",
    },
    {
        rating: 101,
        description: "Unhealthy for Sensitive Groups",
        color: "Orange",
    },
    {
        rating: 151,
        description: "Unhealthy",
        color: "Red",
    },
];

export const airQualityIndexText = (rating: number) => {
    for (let i = 0; i < airQualityIndex.length; i++) {
        if (rating <= airQualityIndex[i].rating) {
            return airQualityIndex[i].description;
        }
    }
    return "Unknown";
};
