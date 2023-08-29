import React, { useEffect } from "react";
import TurkeyMap from "turkey-map-react";
import { Tooltip } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setCity, fetchWeatherData } from "../store/weatherSlice";


function Map() {
  const dispatch = useDispatch();
  const cityName = useSelector((state) => state.weather.cityName);


  useEffect(() => {
  }, [cityName]);

  const handleClick = (name) =>{
    dispatch(setCity(name));
    dispatch(fetchWeatherData());
  }

  return (
    <div>
      <TurkeyMap
        onClick={({ name }) => handleClick(name)}
        cityWrapper={(cityComponent, cityData) => (
          <Tooltip title={`${cityData.name}`} key={cityData.id} >
            {cityComponent}
          </Tooltip>
        )}
        
      />
    </div>
  );
}

export default Map;
