import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);
    // const ring = useContext(RingContext);
    // const [ornaments, house] = useContext(RingContext);
    const handleHouseIncrease = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <div>
            <h4>Aunty</h4>
            <p>House:{house}</p>
            {/* <p><small>{ring}</small></p>
            <p><small>{ornaments}</small></p> */}
            <button onClick={handleHouseIncrease}>Anty Magic</button>
        </div>
    );
};

export default Aunty;