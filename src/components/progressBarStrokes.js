import React from 'react';

const ProgressBarStrokes = ({item, height, width}) => {
    const styles = {
        strokes: {
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: item.color,
            border: "1px solid white",
            borderRadius: "5px"
        }
    }
    if (item.value) {
        return (
            <div style={{display: "flex"}}>
                {Array(item.countOfStrokes).fill(0).map((val, index) =>
                    <div key={index} style={styles.strokes}></div>
                )}
            </div>
        );
    } else {
        return
    }

};

export default ProgressBarStrokes;
