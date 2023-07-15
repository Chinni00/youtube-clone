
import './App.css';
import Navbar from './Components/Navbar';
import VideoPlayer from './Components/VideoPlayer';
import VideosList from './Components/VideosList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <VideoPlayer />
      <VideosList />
    </div>
  );
}

export default App;
