import React, {useEffect, useState} from 'react';
import ProgressBarStrokes from "./progressBarStrokes";
import ProgressBarInfo from "./progressBarInfo";

const ProgressBar = ({items, height, width}) => {

    const styles = {
        progressBar: {display: "flex", flexDirection: "column"},
        progressBarStrokes: {display: "flex"},
        progressBarInfo: {marginTop: "10px", width: "100%", display: "flex", justifyContent: "space-between"}
    }

    const [progress, setProgress] = useState({
        totalCount: 0,
        itemsArr: [],
        countOfStrokes: 0,
    })

    useEffect(() => {
        let countOfStrokes = 100.1
        let totalSum = getTotalSumItems(items);

        let itemsArr = items.map((item) => {
            return {
                ...item,
                countOfStrokes: Math.round((item.value * countOfStrokes) / totalSum),
            }
        })
        let newProgress = {
            totalCount: totalSum,
            itemsArr,
            countOfStrokes,
        }
        setProgress({...newProgress})
    }, [items])


    const getTotalSumItems = (items) => {
        let totalSum = 0;
        items.forEach((item) => {
            totalSum += item.value;
        })
        return totalSum;
    }


    return (
        <div style={styles.progressBar}>
            <div style={styles.progressBarStrokes}>
                {progress.itemsArr.map((item, index) =>
                    <ProgressBarStrokes key={index + 1} item={item} height={height} width={width}/>
                )}
            </div>
            <div style={styles.progressBarInfo}>
                {progress.itemsArr.map((item, index) =>
                    <ProgressBarInfo key={index + 1} name={item.name} color={item.color} value={item.value} perсent={item.countOfStrokes}/>
                )}
            </div>
        </div>
    );
};

export default ProgressBar;
