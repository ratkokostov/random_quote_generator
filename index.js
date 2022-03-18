function App(){

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState([]);
    const [color, setColor] = React.useState("#111");

    React.useEffect(() => {
    async function fetchData(){
        const response = await fetch("https://type.fit/api/quotes")
        const data = await response.json();

        setQuotes(data);
        let randIndex = Math.floor(Math.random() * data.length);
        setRandomQuote(data[randIndex]);
    }
    fetchData();
    }, [])
    const getNewQuote = () => {
        
        const colors = [
        "#1ceee8",
        "#826582 ",
        "#6572b7",
        "#a36988",
        "#a21012",
        "#36a496",
        "#baf99d",
        "#affd47 ",
        "#8dfa33",
        "#fae371",
        "#a8c2f7",

        ];

        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
        setRandomQuote(quotes[randIndex]);
        setColor(colors[randColorIndex]);
    }
    return (
        <div style={{backgroundColor: color,minHeight:"100vh"}}>
        <div className="container pt-5">
            <div className="jumbotron">
                <div className="card" id="quote-box">
                    <div className="card-header">Inspirational Quotes</div>
                    <div className="card-body" id="text">
                        {randomQuote ? (
                        <>
                            <h5 className="card-title" id="author">- {randomQuote.author || "No author"}</h5>
                            <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                        </>

                        ) : (
                            <h2>Loading</h2>
                        )}
                        <div class="row">
                        <button id="new-quote" onClick={getNewQuote} className="btn btn-primary ml-3">New Quote</button>
                        <a id="tweet-quote" href={
                            "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                            encodeURIComponent(
                                '"' + randomQuote.text + '" ' + randomQuote.author
                            )

                        } 
                        target="_blank" className="btn btn-warning">
                            <i className="fa fa-twitter"></i>
                        </a>

                        <a href={
                            "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
                            encodeURIComponent(
                                randomQuote.author
                            )+ "&content=" +
                            encodeURIComponent(randomQuote.text)+
                            "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"

                        }  
                        className="btn btn-danger">
                        <i className="fa fa-tumblr"></i>
                        </a>
                        </div>

                    </div>
                </div>
            </div>
        
        </div> 
        </div>
    );
}
ReactDOM.render(<App/>, document.getElementById('app'))