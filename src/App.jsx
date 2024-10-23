import { useEffect, useState } from "react"
import Forecast from "./components/Forecast"
import Inputs from "./components/Inputs"
import TempAndDetails from "./components/TempAndDetails"
import TimeAndLocation from "./components/TimeAndLocation"
import TopButtons from "./components/TopButtons"
import getFormattedWeatherData from "./services/weatherService"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function capitalise(string){
  return string.charAt(0).toUpperCase()+string.slice(1);
}

const App = () => {
  const [query,setQuery] = useState({q:"lucknow"});
  const [units,setUnits] = useState("metric");
  const [weather,setWeather] = useState(null);

  const getWeather= async () => {
    const cityName=query.q?query.q:'current location';
    toast.info(`Fetching weather data for ${capitalise(cityName)}`); 
    try{
    const data=await getFormattedWeatherData({...query,units});
      toast.success(`Fetched data for ${data.name}, ${data.country}`)
      setWeather(data);
      console.log(data);
    }catch(error){
      toast.error("Wrong city name. Please enter a valid city.");
      console.error("Error fetching weather data: ", error);
    }
  };

  useEffect(()=>{
    getWeather();
  }, [query,units]);

  const formatBackground = () => {
    if(!weather) return "from-cyan-600 to-blue-700" ;
    const threshold = units === "metric" ? 30:80;
    if(weather.temp<= threshold) 
      return "from-cyan-600 to-blue-700";
    return "from-yellow-500 to-orange-500";
  };

  return (
    <div className={`mx-auto max-w-screen-2xl py-5 px-32 bg-gradient-to-br
    shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} setUnits={setUnits}/>
      {weather && (
        <>
        <TimeAndLocation weather={weather}/>
        <TempAndDetails weather={weather} units={units}/>
        <Forecast title='3 hour step forecast' data={weather.hourly}/>
        <Forecast title='daily forecast' data={weather.daily}/>
        </>
      )}
      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored"/>
    </div>
  );
};

export default App;
