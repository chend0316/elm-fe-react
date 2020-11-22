/**
 * React Router 参考：https://reactrouter.com/web/guides/quick-start
 */

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RestaurantList from './RestaurantList';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <Router>
      <div>
        <ApolloProvider client={client}>
          <Switch>
            <Route path="/restaurants">
              <RestaurantList />
            </Route>
            <Route path="/">
              <RestaurantList />
            </Route>
          </Switch>
        </ApolloProvider>
      </div>
    </Router>
  );
}

export default App;
