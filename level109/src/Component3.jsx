import "./Component3.css";

function Component3() {
    return (
        <div>
        {[...Array(10)].map((_, index) => (
    <p key={index} className="text">
        Element {index+1}
    </p>
    ))}
     </div>
    );
}

export default Component3;