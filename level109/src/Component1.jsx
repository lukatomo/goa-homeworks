function Component1() {
    return (
        <div>
                 {[...Array(10)].map((_, index) => (
            <p key={index} style={{color: "red"}}>
                Element {index+1}
            </p>
        ))}
        </div>
    );
}

export default Component1;