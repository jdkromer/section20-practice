import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuote';
import QuoteDetails from './pages/QuoteDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteID'>
            <QuoteDetails />
          </Route>
          <Route path='/new-quote'>
            <NewQuotes />
          </Route>
          <Route path='/*'>
            <NotFound />
          </Route>
        </Switch>
   </Layout>
  );
}

export default App;
