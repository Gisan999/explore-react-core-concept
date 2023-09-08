import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }

    const counterClear = () => {
        const clear = count - count;
        setCount(clear)
    }
    return(
        <div style={{border: '2px solid red', marginBottom: '10px', padding: '10px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
            <button onClick={counterClear}>Clear All</button>
        </div>
    )
}