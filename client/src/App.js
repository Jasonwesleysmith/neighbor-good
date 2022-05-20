import './App.css';
import ClaimedJob from './components/ClaimedJob';
import UnclaimedJob from './components/UnclaimedJob';
import Modal from './components/Modal'

function App() {
  return (
    <>
      <ClaimedJob />
      <UnclaimedJob />
      <Modal>
        this is where the children are


      </Modal>
    </>
  );
}

export default App;
