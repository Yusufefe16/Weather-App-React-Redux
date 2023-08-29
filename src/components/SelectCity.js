import React, { useEffect, useState } from "react";
import cities from "../cities/Cities.json";
import { useSelector, useDispatch } from "react-redux";
import { setCity, fetchWeatherData } from "../store/weatherSlice";


function SelectCity() {

  const dispatch = useDispatch();

  const cityName = useSelector((state) => state.weather.cityName);



  const [inputValue, setInputValue] = useState("");

  useEffect(()=>{
    dispatch(fetchWeatherData());
},[cityName])

  const handleCityChange = (event) => {
    const selectedCity = cities.find(
      (cityItem) => cityItem.name === event.target.value
    );
    if (selectedCity) {
      setInputValue(selectedCity.name);
      dispatch(setCity(selectedCity.name))
    } else {
      setInputValue(event.target.value);
    }
  };
  const handleClearInput = () => {
    setInputValue("");
  };

  return (
    <div className="container ">
      <input
        className="chosen-value"
        type="text"
        value={inputValue}
        onChange={handleCityChange}
        placeholder= "Select City"
        list="citynames"
      />
      {inputValue && ( 
            <button
              className=""
              style={{backgroundColor: "transparent",}}
              onClick={handleClearInput}
            >
              X
            </button>
          )}
      <datalist id="citynames">
        {cities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </datalist>
    </div>
  );
}

export default SelectCity;
