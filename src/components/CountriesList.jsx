import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import countriesData from './../countries.json';

function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    /* setCountries(countriesData); */
  }, []);

  return (
    <div className="list">
      <ul>
        {countries.map((country) => (
          <Link to={`/${country.alpha3Code}`}>
            <div>
              <h1>{country.name.common}</h1>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
