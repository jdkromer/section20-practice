import { useParams, Route, Link } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const Dummy_Quotes = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun!'},
    { id: 'q2', author: 'Maximilan', text: 'Learning React is great!'}
];

const QuoteDetails = () => {
    const params = useParams();
    const quote = Dummy_Quotes.find(quote => quote.id === params.quoteID);
    
    if(!quote){
        return <p>No Quote Found!</p>;
    }

    return (
        <section>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteID}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`quotes/${params.quoteID}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`/quotes/${params.quoteID}/comments`}>
                <Comments />
            </Route>
        </section>
    );
};

export default QuoteDetails;