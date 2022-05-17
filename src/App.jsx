
import './App.scss';
import Nav from './components/nav/Nav';
import Profile from './containers/Profile/Profile';
import profile from "./data/images.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Profile username={profile.username} images = {profile.posts} /> 

      </header>
    </div>
  );
}

export default App;
