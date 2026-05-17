//საკლასო დავალება:
//components ფოლდერში დაამატეთ Component.jsx. Component ფუნქციამ დააბრუნოს div,
// სადაც იქნება h2 და შემდეგ props.children.
// დააექსპორტეთ Component ფუნქცია.
//App.jsx-ში დააიმპორტეთ ეს ფუნქცია,
// დააბრუნეთ ის კონტეინერ თეგის სახით და თეგებს შორის ჩაწერეთ რამდენიმე jsx-ის ელემენტი.
//ასევე, დააბრუნეთ ეს ფუნქცია პირდაპირ self-closing თეგის სახით.
function Component(props){
    return(
        <div>
            <h2>ეს არის Component</h2>
            {props.children}
        </div>
    );
}

export default Component