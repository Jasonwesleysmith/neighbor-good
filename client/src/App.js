// import Modal from './components/Modal';
import {useState} from 'react'
import UnclaimedJobs from './components/UnclaimedJobs/UnclaimedJobs';
import ClaimedJobs from './components/ClaimedJobs/ClaimedJobs';
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
  const [jobs, setJobs] = useState([
    {
      id: 0,
      claimed: false,
      claimedBy: null,
      job: 'Handyman',
      pay: '500',
      name: 'Ben',
      phone: '5555555',
      location: 'My Basement',
      description: 'Drywall a closet and move outlet',
      info: 'turn off breaker before work',
    },
    {
      id: 1,
      claimed: false,
      claimedBy: null,
      job: 'Lawn Mowed',
      pay: '20',
      name: 'Alice',
      phone: '5554444',
      location: 'Main St',
      description: 'Mow lawn',
      info: 'non rainy days',
    },
    {
      id: 2,
      claimed: false,
      claimedBy: null,
      job: 'Coffee Table moved',
      pay: '5',
      name: 'Joe',
      phone: '5553333',
      location: 'Joes house',
      description: 'move my coffee table',
      info: 'move downstairs',
    },
  ]);
  //api call
  return (
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/job" element={<NewJob setJobs={setJobs} />} />
            <Route exact path="/unclaimedjobs" element={<UnclaimedJobs jobs={jobs} setJobs={setJobs} />} />
            <Route exact path="/claimedjobs" element={<ClaimedJobs jobs={jobs} setJobs={setJobs} />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </ApolloProvider>
    
  );
};

export default App;
