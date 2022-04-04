import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
export const RingContext = createContext('ring');
const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornaments = 'Diamond Ring';
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}> <div className='grandpa'>
            <h3>Grandpa</h3>
            <p>House:{house} <button onClick={handleBuyAHouse}>Buy A house</button></p>
            <section style={{ display: 'flex' }}>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </div>
        </RingContext.Provider>
    );
};

export default Grandpa;