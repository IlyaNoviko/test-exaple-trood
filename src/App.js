import React, {useState} from 'react';
import ProgressBar from "./components/progressBar";



const App = () => {
    const [items, setItems] = useState([
        {name: 'Sold', color: '#BD1FBE', value: 677},
        {name: 'Got free', color: '#FC64FF', value: 23},
        {name: 'Burned', color: '#48C21C', value: 202},
        {name: 'Free float', color: '#6E8685', value: 323},
    ]);
    const styles = {
        progressBar: {display: "flex", justifyContent: "center", alignItems: "center", width:"100vw", height: "80vh"},
    }
    return (
        <div style={styles.progressBar}>
            <ProgressBar items={items} height={20} width={10} />
        </div>
    );
};

export default App;
