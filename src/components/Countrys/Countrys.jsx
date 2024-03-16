import { useEffect, useState } from "react";
import Country from "./Country";
import './Countrys.css'

const Countrys = () => {
    const [countrys, setCountrys] = useState([])
    const [visitedCountrys, setvisitedCountrys] = useState([])
    const [visitedFlags, setVisitedFlags]= useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountrys(data))
    }, [])
    const handleVisitedFlugs=(flags)=>{
        const newVisitedFlugs = [...visitedFlags, flags]
        setVisitedFlags(newVisitedFlugs)
    }
    
    const handleVisitedCountry=(country)=>{
        const newVisitedCountrys = [...visitedCountrys, country]
        setvisitedCountrys(newVisitedCountrys)
    
    }



    return <>
        <div>
            <h1>Countrys : {countrys.length}</h1>
            <div>
                <h3>Visited Countries : {visitedCountrys.length}</h3>
                <ul>
                   {
                     visitedCountrys.map(country => <li>{country.name.common}</li>)
                   }
                </ul>
            </div>
            <div className="flag-container">
               {
                visitedFlags.map((flags, idx)=><img key={idx} src={flags}></img>)
               }
            </div>
            <div className="country-container">
                {
                    countrys.map(country => <Country
                        key={country.ccn3}
                        country={country}
                        handleVisitedCountry= {handleVisitedCountry}
                        handleVisitedFlugs={handleVisitedFlugs}
                    ></Country>)
                }
            </div>
        </div>
    </>
};

export default Countrys;