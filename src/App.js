import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuote';
import QuoteDetails from './pages/QuoteDetails';

import MainHeader from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
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
        </Switch>
      </main>
    </div>
  );
}

export default App;
