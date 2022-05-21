import Modal from './components/Modal'
import UnclaimedJobs from './components/UnclaimedJobs';
import ClaimedJobs from './components/ClaimedJobs';

const jobs = [
  {id: 0, claimed: false, claimedBy: null, job:"Drummer", pay:"5", name:"Ben", phone:"5555555", location:"Grad party", description:"Party Music", info:""},
  {id: 1, claimed: true, claimedBy: "Jason", job:"Lawn Mowed", pay:"20", name:"Alice", phone:"5554444", location:"Main St", description:"Mow lawn", info:"non rainy days"},
  {id: 2, claimed: false, claimedBy: null, job:"Coffee Table moved", pay:"5", name:"Joe", phone:"5553333", location:"Joes house", description:"move my coffee table", info:"move downstairs"},
  {id: 3, claimed: true, claimedBy: "Wes", job:"Coffee Table moved", pay:"5", name:"Joe", phone:"5553333", location:"Joes house", description:"move my coffee table", info:"move downstairs"},
  {id: 4, claimed: false, claimedBy: null, job:"Coffee Table moved", pay:"5", name:"Joe", phone:"5553333", location:"Joes house", description:"move my coffee table", info:"move downstairs"},
]

const App = () => {
  //api call
  return (
    <>
      <UnclaimedJobs jobs={jobs} />
      <ClaimedJobs jobs={jobs} />
    </>
  );
}

export default App;
