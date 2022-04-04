import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    // const ring = useContext(RingContext);
    return (
        <div>
            <h5>Special</h5>
            {/* <p>Ring:{ring}</p> */}
            <p>House:{house}</p>
            <button onClick={() => setHouse(house + 1)}>Buy a House</button>
        </div>
    );
};

export default Special;