import React from 'react';

const ProgressBarInfo = ({name, color, value, perсent}) => {
    const styles = {
        info: {display: "flex", alignItems: "center"},
        infoCircle: {borderRadius: "50%", background: `${color}`, width: "20px", height: "20px", marginRight: "5px"},
        infoText: {fontWeight: 600}
    }
    if (value === 0) {
        return
    } else {
        return (
            <div style={styles.info}>
                <div style={styles.infoCircle}></div>
                <div style={styles.infoText}>{name}:{value} ({perсent} %)</div>
            </div>
        );
    }

};

export default ProgressBarInfo;
