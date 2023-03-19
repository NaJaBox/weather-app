import "./WeatherInfo.scss";
import { useContext } from "react";
import { WeatherContext } from "../WeatherContext/WeatherContext";
import { cloudy, rainy, snowy } from "./../../conditions.js";



export const WeatherInfo = () => {
  const { current } = useContext(WeatherContext);

  if (!current) {
    return null;
  }
  const localTime = new Date(current.location.localtime);
  const date = new Date(localTime);
  const dateString = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const timeString = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // const formattedDate = `${timeString}  ${dateString}`;
  // console.log(formattedDate);

  const nextHour = new Date(localTime);
  nextHour.setHours(nextHour.getHours() + 1);

  const nextHourData = current.forecast.forecastday.find(
    (day) => day.date === nextHour.toISOString().slice(0, 10)
  );
  const hour = nextHour.getHours();
  const condition = nextHourData.hour[hour].condition.text || "default";

  let message;

  if (condition === "Sunny") {
    message =
      "Don't let those rays  go to waste ☀️,time to disconnect and enjoy the sunshine!";
  } else if (condition === "Clear") {
    message =
      "Clear skies, clear mind! ☀️🧘‍♂️ Time to take a deep breath and enjoy the great outdoors.";
  } else if (rainy.includes(condition)) {
    message =
      "Rain, rain, go away! But if you're here to stay, grab an umbrella and enjoy the sound of nature's music 🎵🌧️";
  } else if (cloudy.includes(condition)) {
    message =
      "Looks like a good day for a nap, Cloudy outside.☁️🛌 Time to grab a blanket and cozy up inside.";
  } else if (snowy.includes(condition)) {
    message =
      "Winter wonderland alert!🌨️🎄 Time to break out the hot cocoa and build a snowman.";
  } else {
    message = `Soon it will be ${condition}`;
  }

  return (
    <>
      <div className="infoCard">
        <div className="localTime">
          <div className="time">{timeString}</div>
          <div className="date">{dateString}</div>
        </div>
        <div className="message">{message}</div>
      </div>
    </>
  );
};
