import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlugs}) => {
    const {name, flags, population, area}= country
    // console.log(country)
    const [visited, setVisited] = useState(false)
    const handleVisited=()=>{
        setVisited(!visited)
    }
    return (
        <div className={`country-style ${visited && 'visited' }`}>
            <h3 style={{color: visited ? 'purple' : 'white'}}>Name: {name.common}</h3>
            <img src={flags.png} />
            <p>Population : {population}</p>
            <p>Area : {area}</p>

            
            <button onClick={()=> handleVisitedCountry(country)}>Mark As Visited</button> <br /> <br />

            <button onClick={()=>handleVisitedFlugs(country.flags.png)}>Add visited flugs</button>
            <br /> <br />

            <button onClick={handleVisited}>{visited? 'visited': 'Going'}</button>
            {visited? 'I have Visited this country': 'I want to visit this country'}
        </div>
    );
};

export default Country;