import { useParams, Route } from 'react-router-dom';

import Comments from '../components/comments/Comments';

const QuoteDetails = () => {
    const params = useParams();
    return (
        <section>
            <h1>QuoteDetails Page</h1>
            <p>{ params.quoteID }</p>
            <Route path={`/quotes/${params.quoteID}/comments`}>
                <Comments />
            </Route>
        </section>
    );
};

export default QuoteDetails;