import React from "react";
import SelectCity from "./SelectCity";
import Map from "./Map";
import { useDispatch } from 'react-redux';
import { fetchWeatherData  } from "../store/weatherSlice";
import Content from "./Content";
import Footer from "./Footer";

function Form() {
  const dispatch = useDispatch();

// Async thunk'u tetikleme işlemi
dispatch(fetchWeatherData());
  return <div className="form">
    <SelectCity/>
    <Map/>
    <Content/>
    <Footer/>
  </div>;
}

export default Form;
