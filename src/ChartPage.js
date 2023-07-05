import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import CardComponent from './CardComponent';



import 'leaflet/dist/leaflet.css';
import './App.css';

function ChartPage() {
  const [countries, setCountries] = useState([]);
  const [worldwideData, setWorldwideData] = useState({});



  useEffect(() => {
    // Fetch country data from the API
    axios
      .get('https://disease.sh/v3/covid-19/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

      axios
      .get('https://disease.sh/v3/covid-19/all')
      .then(response => setWorldwideData(response.data))
      .catch(error => console.error(error));

   
  }, []);

 

  


  return (

    <div>
      <div>
      <div className="container">
      <h1>COVID-19 Dashboard</h1>
      <div className="row">
        <CardComponent
          title="Total Cases"
          value={worldwideData.cases}
          variant="primary"
        />
        <CardComponent
          title="Total Deaths"
          value={worldwideData.deaths}
          variant="danger"
        />
        <CardComponent
          title="Total Recovered"
          value={worldwideData.recovered}
          variant="success"
        />
      </div>
    </div>
  
      </div>
    <div className="map-container">
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '100vh', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {countries.map((country) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            
          >
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Active Cases: {country.active}</p>
                <p>Recovered Cases: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>

   


    </div>
  );
}

export default ChartPage;
