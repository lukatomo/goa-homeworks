function App() {
    function handleClick() {
        console.log("user clicked on button")
    }
    return (
        <div>
            <button onClick={handleClick}>click</button>
        </div>
    )

    const name = "Luka";
    const surname = "Tomoshevski";
    const age = "13";

    return (
        <div>
            <p>{name}</p>
            <p>{surname}</p>
            <p>{age}</p>
        </div>
    )
}