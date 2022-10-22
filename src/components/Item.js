import React from 'react';
import '../styles/table.scss'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Item = ({item}) => {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.basket)

    const addItem = () =>{
        dispatch({type: "ADD_ITEM", basket: item})
    }

    const navigate = useNavigate()
    const clickHandler= (event) => {
        event.stopPropagation()
        addItem()
    }
    return (
        <div
            className={`
            table__row 
            ${item.status === 'red'? 'row__red' : ''}
            ${item.status === 'green'? 'row__green' : ''}
            ${item.status === 'yellow'? 'row__yellow' : ''}
            `}
            onClick={() => navigate(`/${item.id}`)}
        >
            <div className="table__block block block_color">
                <div style={{width: '20px', height: '20px', borderRadius: '50%', background: item.status, marginRight: '5px'}}></div>
                {item.name}
            </div>
            <div className="table__block block">{item.type}</div>
            <div className="table__block block">{item.conditions}</div>
            <div className="table__block block">{item.volume}</div>
            <div className="table__block block">{item.roi}</div>
            <div className="table__block block">{item.free}</div>
            <div className="table__block block">{item.hedge}</div>
            <div className="table__block block">
                <div className="block__btn" onClick={e=> clickHandler(e)}>buy</div>
            </div>

        </div>
    );
};

export default Item;
