import React, {useEffect, useState} from 'react';
import '../styles/table.scss'
import MySelect from "../UI/MySelect/MySelect";

const TableHeader = ({statusArr, typesArr, changeSort, sort, changeSortMethods}) => {
    const [defaultStatus, setDefaultStatus] = useState('')
    const [defaultType, setDefaultTypes] = useState('')


    useEffect(() => {
        changeSort({
            status: defaultStatus,
            type: defaultType
        })
    }, [defaultStatus, defaultType])
    return (
        <div className="table__header">
            <div className="table__block block">
                <MySelect
                    values={statusArr}
                    type={'projects'}
                    defaultValue={!defaultStatus ? 'All' : defaultStatus}
                    onChange={setDefaultStatus}

                />
                <div style={{opacity: `${sort.sortProjects? '1' : "0.5"}`}}
                     onClick={() => changeSortMethods({
                         sortProjects: true,
                         sortVolume: false,
                         sortMethods: {
                             projects: !sort.sortMethods.projects,
                             volume: sort.sortMethods.volume,
                         }
                     })}
                     className={`block__sort ${sort.sortMethods.projects? 'is-active': ' '}`}>&#8595;</div>
            </div>
            <div className="table__block block">
                <MySelect
                    values={typesArr}
                    type={'Token type'}
                    defaultValue={!defaultType ? 'All' : defaultType}
                    onChange={setDefaultTypes}
                />
            </div>
            <div className="table__block block">
                Conditions
            </div>
            <div className="table__block block"
            >
                Volume
                <div
                    style={{opacity: `${sort.sortVolume? '1' : "0.5"}`}}
                    onClick={() => changeSortMethods({
                        sortProjects: false,
                        sortVolume: true,
                        sortMethods: {
                            projects: sort.sortMethods.projects,
                            volume: !sort.sortMethods.volume,
                        }
                    })}
                    className={`block__sort ${sort.sortMethods.volume? 'is-active': ' '}`}
                >&#8595;</div>
            </div>
            <div className="table__block block">
                ROI
            </div>
            <div className="table__block block">
                Free float
            </div>
            <div className="table__block block">
                Insurance hedge
            </div>
            <div className="table__block block">
            </div>
        </div>
    );
};

export default TableHeader;
