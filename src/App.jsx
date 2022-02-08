
import './App.scss';
import Nav from './components/nav/Nav';
import Profile from './containers/Profile/Profile';
import data_file from "./data/images"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Profile images={data_file}/> 

      </header>
    </div>
  );
}

export default App;
