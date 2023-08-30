import React from "react";
import { useSelector } from "react-redux";

function Content() {
  const cityName = useSelector((state) => state.weather.cityName);
  const minTemp = useSelector((state) => state.weather.minTemp);
  console.log(minTemp);
  const maxTemp = useSelector((state) => state.weather.maxTemp);
  console.log(maxTemp);
  const humidity = useSelector((state) => state.weather.humidity);
  console.log(humidity);
  const rain = useSelector((state) => state.weather.rain);
  console.log(rain);
  const current = useSelector((state) => state.weather.current);
  const averageWindSpeed = useSelector(
    (state) => state.weather.averageWindSpeed
  );
  const mostCommonWeather = useSelector(
    (state) => state.weather.mostCommonWeather
  );
  console.log(mostCommonWeather);
  const days = [
    "Sunday ",
    "Monday ",
    "Tuesday ",
    "Wednesday",
    "Thursday ",
    "Friday ",
    "Saturday ",
  ];
  const currentDayIndex = new Date().getDay();

  console.log(days[currentDayIndex]);

  return (
    <div className="content">
      <div className="contentheader">
        {cityName} - {days[currentDayIndex % days.length]}
      </div>
      <div className="middle">
        <div className="daily">Daily</div>
        <hr/>
        <ul className="contentdaily">
          <li className="weatherimg">
            <div>
              {mostCommonWeather[0] === "Clear" || "" ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                  alt="Güneşli"
                  style={{ height: "85px" }}
                />
              ) : mostCommonWeather[0] === "Clouds" ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
                  alt="Bulutlu"
                  style={{ height: "85px" }}
                />
              ) : mostCommonWeather[0] === "Rain" ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3351/3351979.png"
                  alt="Yağmurlu"
                  style={{ height: "85px" }}
                />
              ) : mostCommonWeather[1] === "Clear" || "" ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                  alt="Güneşli"
                  style={{ height: "85px" }}
                />
              ) : mostCommonWeather[1] === "Clouds" ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
                  alt="Bulutlu"
                  style={{ height: "85px" }}
                />
              ) : mostCommonWeather[1] === "Rain" ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3351/3351979.png"
                  alt="Yağmurlu"
                  style={{ height: "85px" }}
                />
              ) : null}
            </div>
            <div>
              {mostCommonWeather[0] === "" ? "clear" : mostCommonWeather[0]}
            </div>
          </li>
          <li className="degree"> {current}°C</li>
          <li className="details">
            <div>
              {isNaN(averageWindSpeed[0]) ? (
                <div>Wind: {averageWindSpeed[1]} m/s</div>
              ) : (
                <div>Wind: {averageWindSpeed[0]} m/s</div>
              )}
            </div>
            <div>Rain: {rain[0]}%</div>
            {isNaN(humidity[0]) ? (
              <div>humidity: {humidity[1]}%</div>
            ):(
              <div>humidity: {humidity[0]}%</div>
            )}
          </li>
        </ul>
      </div>
      <div className="contentcomingdays">
        <div className="card">
          <div>{days[currentDayIndex % days.length]}</div>
          <div>
          {mostCommonWeather[0] === "Clear" || "" ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                  alt="Güneşli"
                  style={{ height: "85px" }}
                />
              ) : mostCommonWeather[0] === "Clouds" ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
                  alt="Bulutlu"
                  style={{ height: "85px" }}
                />
              ) : mostCommonWeather[0] === "Rain" ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3351/3351979.png"
                  alt="Yağmurlu"
                  style={{ height: "85px" }}
                />
              ) : mostCommonWeather[1] === "Clear" || "" ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                  alt="Güneşli"
                  style={{ height: "85px" }}
                />
              ) : mostCommonWeather[1] === "Clouds" ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
                  alt="Bulutlu"
                  style={{ height: "85px" }}
                />
              ) : mostCommonWeather[1] === "Rain" ? (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3351/3351979.png"
                  alt="Yağmurlu"
                  style={{ height: "85px" }}
                />
              ) : null}
          </div>
          <div>
            {minTemp[0] === Infinity ? (
              <div>min: {minTemp[1]}°C</div>
            ) : (
              <div>min: {minTemp[0]}°C</div>
            )}
          </div>
          <div>
            {maxTemp[0] === -Infinity ? (
              <div>max: {maxTemp[1]}°C</div>
            ) : (
              <div>max: {maxTemp[0]}°C</div>
            )}
          </div>
        </div>
        <div className="card">
          <div>{days[(currentDayIndex + 1) % days.length]}</div>
          <div>
            {mostCommonWeather[1] === "Clear" || "" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                alt="Güneşli"
                style={{ height: "85px" }}
              />
            ) : mostCommonWeather[1] === "Clouds" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
                alt="Bulutlu"
                style={{ height: "85px" }}
              />
            ) : mostCommonWeather[1] === "Rain" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/3351/3351979.png"
                alt="Yağmurlu"
                style={{ height: "85px" }}
              />
            ) : mostCommonWeather[1] === "" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                alt="Güneşli"
                style={{ height: "85px" }}
              />
            ) : null}
          </div>
          <div>min: {minTemp[1]}°C</div>
          <div>max: {maxTemp[1]}°C</div>
        </div>
        <div className="card">
          <div>{days[(currentDayIndex + 2) % days.length]}</div>
          <div>
            {mostCommonWeather[2] === "Clear" || "" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                alt="Güneşli"
                style={{ height: "85px" }}
              />
            ) : mostCommonWeather[2] === "Clouds" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
                alt="Bulutlu"
                style={{ height: "85px" }}
              />
            ) : mostCommonWeather[2] === "Rain" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/3351/3351979.png"
                alt="Yağmurlu"
                style={{ height: "85px" }}
              />
            ) : mostCommonWeather[2] === "" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                alt="Güneşli"
                style={{ height: "85px" }}
              />
            ) : null}
          </div>
          <div>min: {minTemp[2]}°C</div>
          <div>max: {maxTemp[2]}°C</div>
        </div>
        <div className="card">
          <div>{days[(currentDayIndex + 3) % days.length]}</div>
          <div>
            {mostCommonWeather[3] === "Clear" || "" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                alt="Güneşli"
                style={{ height: "85px" }}
              />
            ) : mostCommonWeather[3] === "Clouds" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
                alt="Bulutlu"
                style={{ height: "85px" }}
              />
            ) : mostCommonWeather[3] === "Rain" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/3351/3351979.png"
                alt="Yağmurlu"
                style={{ height: "85px" }}
              />
            ) : mostCommonWeather[3] === "" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                alt="Güneşli"
                style={{ height: "85px" }}
              />
            ) : null}
          </div>
          <div>min: {minTemp[3]}°C</div>
          <div>max: {maxTemp[3]}°C</div>
        </div>
        <div className="card">
          <div>{days[(currentDayIndex + 4) % days.length]}</div>
          <div>
            {mostCommonWeather[4] === "Clear" || "" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                alt="Güneşli"
                style={{ height: "85px" }}
              />
            ) : mostCommonWeather[4] === "Clouds" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
                alt="Bulutlu"
                style={{ height: "85px" }}
              />
            ) : mostCommonWeather[4] === "Rain" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/3351/3351979.png"
                alt="Yağmurlu"
                style={{ height: "85px" }}
              />
            ) : mostCommonWeather[4] === "" ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                alt="Güneşli"
                style={{ height: "85px" }}
              />
            ) : null}
          </div>
          <div>min: {minTemp[4]}°C</div>
          <div>max: {maxTemp[4]}°C</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
