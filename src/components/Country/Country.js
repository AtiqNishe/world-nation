import React from 'react';

const Country = (props) => {
    // console.log(props);
    const country = props.cn;
    const {name,capital, population, region, flag , area}= props.cn;
    const countryHandle = props.countryHandle;
    const countryStyle=[
        {border:'2px solid red', margin:'10px', display:'flex', width:'500px', height:'400px'
    
        }
    ]
    return (
        <div style={countryStyle[0]}>
           <div>
           <img src={flag} alt="country-flag" height="200px" width="200px"/>
           </div>
           <div>
           <h1>{name}</h1>
            <h2>{capital}</h2>
            <h3>{population}</h3>
            <h3>{region}</h3>
            <h3>{area}</h3>
            <button onClick={() =>countryHandle(country)}>Add Country</button>
           </div>
        </div>
    );
};

export default Country;