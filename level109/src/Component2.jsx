function Component2() {
    const style = {
        color: "blue",
    };

    return (
    <div>
         {[...Array(10)].map((_, index) => (
        <p key={index} style={style}>
            Element {index+1}
        </p>
    ))}
    </div>
    );
}

export default Component2;
