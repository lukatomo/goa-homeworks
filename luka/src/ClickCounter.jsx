import React, {useState, useEffect} from 'react'

const ClickCounter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const handleMouseDown = () => {
            setCount(prevCount => prevCount +1)
        };
        
        document.addEventListener('mousedown', handleMouseDown);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);

    return(
        <div style={{ textAlign: 'center',marginTop: '50px', fontFamily:"sans-serif"}}>
            <h2>count: {count}</h2>
        </div> 
    );
};

export default ClickCounter










