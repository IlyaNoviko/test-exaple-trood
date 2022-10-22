import React, {useEffect, useMemo, useState} from 'react';
import ItemList from "./ItemList";
import TableHeader from "./TableHeader";
import '../styles/table.scss'
import axios from "axios";

const Table = () => {
    const [items, setItems] = useState([])

    const [sortedItems, setSortedItems] = useState([])
    const [selectedSort, setSelectedSort] = useState({
        status: '',
        type: ''
    })
    const [sortState, setSortState] = useState({
        sortProjects: false,
        sortVolume: false,
        sortMethods: {
            projects: true,
            volume: true
        }
    })

    useEffect(() => {
        fetchItems()
    }, [])

    useEffect(() => {
        sorting()
    }, [selectedSort, sortState, items])

    const fetchItems = async () => {
        const response = await axios.get('https://6336992e65d1e8ef266f6835.mockapi.io/total')
        setItems(response.data)
    }

    const newSelectedSort = (sort) => {
        setSelectedSort(sort)
    }
    const changeSortMethods = (sortMethods) => {
        setSortState(sortMethods)
    }

    const statusesAndTypesObj = useMemo(() => {
        const statusesArr = items.map(item => {
            return item.status
        })
        const typesArr = items.map(item => {
            return item.type
        })
        return ({
            statuses: Array.from(new Set(statusesArr)),
            types: Array.from(new Set(typesArr))
        })
    }, [items])

    const sorting = () => {
        const sortedItemsArr = items.filter(item =>
            item.status.toLowerCase().includes(selectedSort.status.toLowerCase())
            && item.type.toLowerCase().includes(selectedSort.type.toLowerCase())
        )
        let orderedAndSortedItemsArr = getOrderedAndSortedArr(sortedItemsArr)

        setSortedItems(orderedAndSortedItemsArr)
    }

    const getOrderedAndSortedArr = (itemsArr) => {
        if (sortState.sortProjects || sortState.sortVolume) {
            let orderedArr = []
            if (sortState.sortProjects) {
                if (sortState.sortMethods.projects) {
                    orderedArr = [...itemsArr].sort((a, b) => b.volume - a.volume)
                } else {
                    orderedArr = [...itemsArr].sort((a, b) => a.volume - b.volume)
                }
            }

            if (sortState.sortVolume) {
                if (sortState.sortMethods.volume) {
                    orderedArr = [...itemsArr].sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
                } else {
                    orderedArr = [...itemsArr].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
                }
            }
            return orderedArr;
        } else {
            return itemsArr;
        }

    }
    return (
        <div className="table">
                <TableHeader
                    statusArr={statusesAndTypesObj.statuses}
                    typesArr={statusesAndTypesObj.types}
                    sort={sortState}
                    changeSort={newSelectedSort}
                    changeSortMethods={changeSortMethods}
                />
            {
                sortedItems.length > 0
                    ? <ItemList items={sortedItems}/>
                    : <h1>Элементы не найдены!</h1>
            }

        </div>
    );
};

export default Table;
