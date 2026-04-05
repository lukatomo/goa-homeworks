function Component(props) {
    return(
        <div>
            <h2> ეს არის სათაური</h2>
            {props.children}
        </div>
    );
}

export default Component;