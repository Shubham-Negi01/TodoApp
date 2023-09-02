import { useState } from "react";
import CounterButton from "./CounterButton";
import "./Counter.css";

export default function Counter() {

    const [totalCount, setTotalCount] = useState(0);


    function increaseTotalCount(value) {
        setTotalCount(totalCount + value);
    }

    function decreaseTotalCount(value) {
        if (totalCount >= value)
            setTotalCount(totalCount - value);
    }

    function resetCounter() {
        setTotalCount(0);
    }

    return (
        <div className="count">
            {totalCount}
            <CounterButton value={1} increaseTotalCount={increaseTotalCount} decreaseTotalCount={decreaseTotalCount} />
            <CounterButton value={2} increaseTotalCount={increaseTotalCount} decreaseTotalCount={decreaseTotalCount} />
            <CounterButton value={5} increaseTotalCount={increaseTotalCount} decreaseTotalCount={decreaseTotalCount} />
            <button className="resetButton" onClick={resetCounter}>Reset</button>
        </div>
    );

}


