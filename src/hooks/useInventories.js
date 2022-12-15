import React, { useEffect, useState } from 'react';
import Loading from '../Pages/Shared/Loading/Loading';

const useInventories = () => {
    const [inventories, setInventories] = useState([]);
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://nextgen-bike-server.onrender.com/inventory')
            .then(res => res.json())
            .then(data => {
                setInventories(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) {
        <Loading />
    }

    return [inventories, setInventories];
};

export default useInventories;