import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateInventory = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>hello from update: {id}</h2>
        </div>
    );
};

export default UpdateInventory;