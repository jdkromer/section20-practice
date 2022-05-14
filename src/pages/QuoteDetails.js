import { Fragment, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';


import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetails = () => {
    const params = useParams();

    const { quoteID } = params;

    const {sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteID);

    }, [sendRequest, quoteID]);

    if (status === 'pending'){
        return (
        <div className='centered'>
            <LoadingSpinner />
        </div>
        );
    }

    if (error) {
        return <p className='centered'>{error}</p>;
    }

    if(!loadedQuote.text){
        return <p>No Quote Found!</p>;
    }

    return (
        <section>
            <Fragment>
            <   HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
                <Outlet />
            </Fragment>
        </section>
    );
};

export default QuoteDetails;