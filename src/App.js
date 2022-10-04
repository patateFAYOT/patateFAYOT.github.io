import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import Header from './Elements/Header.js';
import Body from './Elements/Body.js';
import Footer from './Elements/Footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
