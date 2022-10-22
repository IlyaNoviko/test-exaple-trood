import React, {useState} from 'react';
import './select.scss'

const MySelect = ({values, type, defaultValue, onChange}) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={`select ${isActive ? 'is-active' : ''}`} onClick={() => setIsActive(!isActive)}>
            <div className="select__header">
                <div className="select__arrow"></div>
                <div className="select__current current">
                    <div className="current__title">{defaultValue}</div>
                    {type}</div>
            </div>
            <div className="select__body">
                <div className="select__item" onClick={() =>
                    onChange('')
                }>All
                </div>
                {
                    values.map((value, index) =>
                        <div key={index + 1} className="select__item" onClick={() => onChange(value)}>{value}</div>
                    )
                }
            </div>
        </div>
    );
};

export default MySelect;
