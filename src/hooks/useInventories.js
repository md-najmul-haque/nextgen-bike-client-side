import React, { useEffect, useState } from 'react';

const useInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://nextgen-bike-server-production.up.railway.app/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])

    return [inventories, setInventories];
};

export default useInventories;