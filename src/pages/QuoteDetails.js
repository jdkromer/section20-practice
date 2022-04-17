import { useParams } from 'react-router-dom';

const QuoteDetails = () => {
    const params = useParams();
    return (
        <section>
            <h1>QuoteDetails Page</h1>
            <p>{ params.quoteID }</p>
        </section>
    );
};

export default QuoteDetails;