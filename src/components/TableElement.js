import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const TableElement = () => {
    const params = useParams();

    const [item, setItem] = useState({
        id: '',
        name: '',
        status: '',
        type: '',
        condition: '',
        volume: '',
        roi: '',
        free: '',
        hedge: ''
    });

    useEffect(() => {
        getById(params.id)
    }, [])


    const getById = async (id) => {
        const response = await axios.get('https://6336992e65d1e8ef266f6835.mockapi.io/total')
        const arr = response.data
        const el = arr.find(item => item.id === +id)
        setItem(el)
    }
    return (
        <div>
            <h1>{item.name}</h1>
            <div style={{display: 'flex'}}>
                <div style={{margin: '0 10px', textTransform: 'capitalize'}}>status: {item.status}</div>
                <div style={{margin: '0 10px', textTransform: 'capitalize'}}>type: {item.type}</div>
                <div style={{margin: '0 10px', textTransform: 'capitalize'}}>condition: {item.condition}</div>
                <div style={{margin: '0 10px', textTransform: 'capitalize'}}>volume: {item.volume}</div>
                <div style={{margin: '0 10px', textTransform: 'capitalize'}}>roi: {item.roi}</div>
                <div style={{margin: '0 10px', textTransform: 'capitalize'}}>free: {item.free}</div>
                <div style={{margin: '0 10px', textTransform: 'capitalize'}}>hedge: {item.hedge}</div>
            </div>

        </div>
    );
};

export default TableElement;
