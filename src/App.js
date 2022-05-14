import { Route, Routes, Navigate, Link} from 'react-router-dom';

import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuote';
import QuoteDetails from './pages/QuoteDetails';
import NotFound from './pages/NotFound';
import Comments from './components/comments/Comments';

function App() {
  return (
    <Layout>
        <Routes>
          <Route path='/' element={<Navigate replace to='quotes' />} />
          <Route path='/quotes' element={<AllQuotes />} />
          <Route path='/quotes/:quoteID' element={<QuoteDetails />} >
            <Route path='' element={
               <div className='centered'>
                      <Link className='btn--flat' to={`comments`}>Load Comments</Link>
                  </div>
            } />
            <Route path={`comments`} element={<Comments />}/>
          </Route>
          <Route path='/new-quote' element={<NewQuotes />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
   </Layout>
  );
}

export default App;
