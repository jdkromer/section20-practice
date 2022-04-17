import QuoteList from "../components/quotes/QuoteList";

const Dummy_Quotes = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun!'},
    { id: 'q1', author: 'Maximilan', text: 'Learning React is great!'}
];

const AllQuotes = () => {
    return <QuoteList quotes={Dummy_Quotes} />;
};

export default AllQuotes;