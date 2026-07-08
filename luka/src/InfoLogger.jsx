import { useState } from 'react';

const InfoLogger = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        console.log("შენი_სახელი")
    });

    useEffect(() => {
        console.log("შენი_გვარი")
    },[]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px'}}>
            <button onClick={() => setToggle(toggle)}>გამოიწვიე რე_რენდერი</button>
            </div>
    );
};

export default InfoLogger