import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Search } from "./components/Search/Search";
import { WeatherContext } from "./components/WeatherContext/WeatherContext";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import { WeatherForecast } from "./components/WeatherForecast/WeatherForecast";
import { WeatherInfo } from "./components/WeatherInfo/WeatherInfo";
import WeatherMain from "./components/WeatherMain/WeatherMain";
import { cloudy, rainy, snowy } from "./conditions.js";
import Loader from "./components/Loader/Loader";

function App() {
  
  const [background, setBackground] = useState("");
  const { current, loading } = useContext(WeatherContext);

  const mainCondition =
    current && current.current ? current.current.condition.text : null;

  // console.log(current.current.condition.text);

  // console.log(rainy)
  // handleBackground();
  useEffect(() => {
    if (mainCondition === "Sunny") {
      setBackground("sunny");
    } else if (rainy.includes(mainCondition)) {
      setBackground("rainy");
    } else if (cloudy.includes(mainCondition)) {
      setBackground("cloudy");
    } else if (snowy.includes(mainCondition)) {
      setBackground("snowy");
    } else {
      setBackground("default");
    }
  }, [mainCondition]);

  
  return (
    <div className={`App ${background}`}>
      <Search />
      {loading ? (
        <Loader />
      ) : (
        <>
          <WeatherMain />
          <WeatherDetails />
          <WeatherInfo />
          <WeatherForecast />
        </>
      )}
    </div>
  );
}

export default App;
