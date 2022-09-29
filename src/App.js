import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Routine from './Routine/Routine';
import Faq from './Faq/Faq';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routine></Routine>
      <Faq></Faq>
    </div>
  );
}

export default App;

