import './App.css';
import React from "react";
import { FormControl,Select,MenuItem, Card, CardContent } from '@mui/material';
import { useState ,useEffect} from 'react';
import InfoBox from './InfoBox';
function App() {

   const [countries, setCountries] = useState([])
   const [country, setCountry] = useState("WorldWide")
    const [countryInfo, setCountryInfo] = useState({})

    const onCountryChange=(event)=>{
      const countryCode=event.target.value
      setCountry(countryCode)

      const url= countryCode==='worldwide' ? 'https://disease.sh/v3/covid-19/all':`https://disease.sh/v3/covid-19/countries/${countryCode}`
       fetch(url)
      .then(response=>response.json())
      .then(data=>{   
        setCountry(countryCode)

        setCountryInfo(data)
      })

    }
      
  useEffect(() => {
   const getCountriesData= async()=>{
     await fetch("https://disease.sh/v3/covid-19/countries")
     .then((response)=>response.json())
     .then((data)=>{
        const countries=data.map((country)=>(
          {
            name:country.country,
            value:country.countryInfo.iso2
          }));
          setCountries(countries);

   });
   
}
getCountriesData();  
  }, [])



  return (
  <div className="app">
      
      <div className="app_header">
        <h1>
          Covid App
        </h1>
        <FormControl className='app_dropdown' >
          <Select variant='outlined'  onChange={onCountryChange} value={country}  >

            <MenuItem value="worldwide" >Worldwide </MenuItem>

            {countries.map((country)=>(
              <MenuItem value={country.value} >{country.name}</MenuItem>
            ))}
          </Select>

        </FormControl>
      </div>
      <div className="app_status" >
            <InfoBox title='Coronavirus Cases' cases={countryInfo.todayCases}  total={countryInfo.cases} >
              
            </InfoBox>
            <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}>
              
              </InfoBox>
              <InfoBox title="Death"  cases={countryInfo.todayDeaths}  total={countryInfo.deaths}  >
              
            </InfoBox>



      </div>

      <Card className='app_right' >



              <CardContent >
              <h3> Live Cases by Country </h3>
              <h3>  Worldwide new cases  </h3>
              </CardContent>
      </Card>



    </div>
  );
}

export default App;