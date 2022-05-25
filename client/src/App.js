// import Modal from './components/Modal';
import UnclaimedJobs from './components/UnclaimedJobs/UnclaimedJobs';
import Login from './components/Header/LoginForm';
import Signup from './components/Header/SignupForm';
import Header from './components/Header/index';
import Footer from './components/Footer';
import Job from './components/Job';
import NewJob from './components/NewJob';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: { ...headers, authorization: token ? `Bearer ${token}` : '' },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  //api call
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/job" element={<NewJob />} />
          <Route exact path="/unclaimedjobs" element={<UnclaimedJobs />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </ApolloProvider>
  );
};

export default App;
