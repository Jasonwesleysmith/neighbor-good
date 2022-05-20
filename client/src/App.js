import './App.css';
import Job from './components/Job';
import Modal from './components/Modal'

const jobs = [
  {id: 0, claimed: false, claimedBy: null, job:"Drummer", pay:"5", name:"Ben", phone:"5555555", location:"Grad party", description:"Party Music", info:""},
  {id: 1, claimed: false, claimedBy: null, job:"Lawn Mowed", pay:"20", name:"Alice", phone:"5554444", location:"Main St", description:"Mow lawn", info:"non rainy days"},
  {id: 2, claimed: false, claimedBy: null, job:"Coffee Table moved", pay:"5", name:"Joe", phone:"5553333", location:"Joes house", description:"move my coffee table", info:"move downstairs"},
]

function App() {
  return (
    <>
      {jobs.map((job) => (
        <Job job={job.job} pay={job.pay} name={job.name} phone={job.phone} location={job.location} description={job.description} info={job.info} />

      ) )}
      
    </>
  );
}

export default App;
