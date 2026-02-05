import react, { useEffect } from 'react';
// Exercice 1 : Counter
function Counter(props) {
    const { initialCount, step } = props;
    const [count, setCount] = react.useState(initialCount);
    //const [count, setCount] = react.useState(0);
    useEffect(() => {
        console.log("Component mounted or updated");
    }, [count]);

    return (
        <><div>
            <h1>Compteur : {count}</h1>
        </div>
            <button onClick={() => setCount(count + step)}>+{step}</button> &nbsp;
            <button onClick={() => setCount(count - step)}>-{step}</button> &nbsp;
            <button onClick={() => setCount(initialCount)}>Reset</button>
            {/* <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(count + 1)}>+1</button> */}
        </>
    );
}
export default Counter;
