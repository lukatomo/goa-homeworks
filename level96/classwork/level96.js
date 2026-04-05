
const movies = [
  "Titanic",
  "Avatar",
  "The Dark Knight",
  "Spider-Man",
  "Inception"
];


const moviesDiv = (
    <div>
        {movies.map((movie, index) => <li key={index}>${movie}</li>)}
    </div>
)

const component = () => {
    const list = ["Dasheboard", "Home", "Comporents", "Calendar", "Charts", "Documents"]
    return(
        <div>
            <nav>
                <p>codewithrandom</p> <button></button>
                <ul>
                    {
                        list.map((el, i ) => (
                            <li key={i}>{el}</li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}
