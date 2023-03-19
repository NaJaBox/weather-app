import "./WeatherForecast.scss";
import { useContext } from "react";
import { WeatherContext } from "../WeatherContext/WeatherContext";

export const WeatherForecast = () => {
  const { current, metric } = useContext(WeatherContext);

  const dateString0 =
    current && current.forecast ? current.forecast.forecastday[0].date : null;
  const dateString1 =
    current && current.forecast ? current.forecast.forecastday[1].date : null;
  const dateString2 =
    current && current.forecast ? current.forecast.forecastday[2].date : null;
  const date0 = new Date(dateString0);
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);
  // const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const weekDayName0 = weekdays[date0.getDay()];
  const weekDayName1 = weekdays[date1.getDay()];
  const weekDayName2 = weekdays[date2.getDay()];
  // console.log(weekDayName);
  const minTempC0 =
    current && current.forecast
      ? Math.round(current.forecast.forecastday[0].day.mintemp_c)
      : null;
  const maxTempC0 =
    current && current.current
      ? Math.round(current.forecast.forecastday[0].day.maxtemp_c)
      : null;
  const minTempF0 =
    current && current.current
      ? Math.round(current.forecast.forecastday[0].day.mintemp_f)
      : null;
  const maxTempF0 =
    current && current.current
      ? Math.round(current.forecast.forecastday[0].day.maxtemp_f)
      : null;

  const minTempC1 =
    current && current.forecast
      ? Math.round(current.forecast.forecastday[1].day.mintemp_c)
      : null;
  const maxTempC1 =
    current && current.current
      ? Math.round(current.forecast.forecastday[1].day.maxtemp_c)
      : null;
  const minTempF1 =
    current && current.current
      ? Math.round(current.forecast.forecastday[1].day.mintemp_f)
      : null;
  const maxTempF1 =
    current && current.current
      ? Math.round(current.forecast.forecastday[1].day.maxtemp_f)
      : null;

  const minTempC2 =
    current && current.forecast
      ? Math.round(current.forecast.forecastday[2].day.mintemp_c)
      : null;
  const maxTempC2 =
    current && current.current
      ? Math.round(current.forecast.forecastday[2].day.maxtemp_c)
      : null;
  const minTempF2 =
    current && current.current
      ? Math.round(current.forecast.forecastday[2].day.mintemp_f)
      : null;
  const maxTempF2 =
    current && current.current
      ? Math.round(current.forecast.forecastday[2].day.maxtemp_f)
      : null;

  if (!current) {
    return <div></div>;
  }

  return (
    <div>
      <div className="forecastCard">
        <div className="forecastDays">
          <div className="days">
            <div className="day0">
              <div className="txt">{weekDayName0}</div>
              <div className="minmax">Min/Max</div>
              <div className="temp">
                <div className="minTemp">
                  {current && (
                    <div>
                      {metric ? (
                        <span>
                          {minTempC0}
                          <span className="minC">°C</span>
                        </span>
                      ) : (
                        <span>
                          {minTempF0}
                          <span className="minF">°F</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <span className="divider">|</span>
                <div className="maxTemp">
                  {current && (
                    <div>
                      {metric ? (
                        <span>
                          {maxTempC0}
                          <span className="minC">°C</span>
                        </span>
                      ) : (
                        <span>
                          {maxTempF0}
                          <span className="minF">°F</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              {/* <span><hr/></span> */}
              <div className="icon">
                <div className="rainProb">
                  <span>
                    Chance of rain:
                    <span className="rainChance">
                      {current.forecast.forecastday[0].day.daily_chance_of_rain}
                      %
                    </span>
                  </span>
                </div>
                <img
                  src={current.forecast.forecastday[0].day.condition.icon}
                  alt=""
                />
              </div>
            </div>

            <div className="day0">
              <div className="txt">{weekDayName1}</div>
              <div className="minmax">Min/Max</div>
              <div className="temp">
                <div className="minTemp">
                  {current && (
                    <div>
                      {metric ? (
                        <span>
                          {minTempC1}
                          <span className="minC">°C</span>
                        </span>
                      ) : (
                        <span>
                          {minTempF1}
                          <span className="minF">°F</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <span className="divider">|</span>
                <div className="maxTemp">
                  {current && (
                    <div>
                      {metric ? (
                        <span>
                          {maxTempC1}
                          <span className="minC">°C</span>
                        </span>
                      ) : (
                        <span>
                          {maxTempF1}
                          <span className="minF">°F</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              {/* <span><hr/></span> */}
              <div className="icon">
                <div className="rainProb">
                  <span>
                    Chance of rain:
                    <span className="rainChance">
                      {current.forecast.forecastday[1].day.daily_chance_of_rain}
                      %
                    </span>
                  </span>
                </div>
                <img
                  src={current.forecast.forecastday[1].day.condition.icon}
                  alt=""
                />
              </div>
            </div>

            <div className="day0">
              <div className="txt">{weekDayName2}</div>
              <div className="minmax">Min/Max</div>
              <div className="temp">
                <div className="minTemp">
                  {current && (
                    <div>
                      {metric ? (
                        <span>
                          {minTempC2}
                          <span className="minC">°C</span>
                        </span>
                      ) : (
                        <span>
                          {minTempF2}
                          <span className="minF">°F</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <span className="divider">|</span>
                <div className="maxTemp">
                  {current && (
                    <div>
                      {metric ? (
                        <span>
                          {maxTempC2}
                          <span className="minC">°C</span>
                        </span>
                      ) : (
                        <span>
                          {maxTempF2}
                          <span className="minF">°F</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              {/* <span><hr/></span> */}
              <div className="icon">
                <div className="rainProb">
                  <span>
                    Chance of rain:
                    <span className="rainChance">
                      {current.forecast.forecastday[2].day.daily_chance_of_rain}
                      %
                    </span>
                  </span>
                </div>
                <img
                  src={current.forecast.forecastday[2].day.condition.icon}
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* <div className="days">{weekDayName1}</div> */}
          {/* <div className="days">{weekDayName2}</div> */}
        </div>
      </div>
    </div>
  );
};
