import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
const Father = ({ house }) => {
    return (
        <div>
            <h4>Father</h4>
            <h5>house: {house}</h5>
            <div style={{ display: 'flex' }}>
                <Myself house={house}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;