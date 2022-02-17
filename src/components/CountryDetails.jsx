import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import countriesData from './../countries.json';

function CountryDetails(props) {
  const { countryId } = useParams();
  console.log(countryId);

  const foundCountry = countriesData.find((country) => {
    return country.alpha3Code === countryId;
  });

  console.log(foundCountry);

  /* 
  const [foundCountry, setFoundCountry] = useState('');

  useEffect(() => {
    const country = countriesData.find((countryObj) => {
      return countryObj._id === country.alpha3Code;
    });
    if (country) {
      setFoundCountry(foundCountry);
    }
  }, []); */

  return (
    <div>
      <h1>Country Details</h1>
      {foundCountry && (
        <>
          <p>{foundCountry.name.common}</p>
          <p></p>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
          />
        </>
      )}

      <Link to="/">Back</Link>
    </div>
  );
}

export default CountryDetails;
