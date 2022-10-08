import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ScrollToTopButton from './Elements/ScrollToTopButton.js';
import Header from './Elements/Header.js';
import Body from './Elements/Body.js';
import Footer from './Elements/Footer.js';

function App() {
  return (
    <div className="App">
      <ScrollToTopButton/>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
