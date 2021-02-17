import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import AddBook from './components/addBook/addBook';
import Library from './components/library/library';

function App() {
  return (
    <div className="App">
      <Header/>
      <AddBook/>
      <Library />
    </div>
  );
}

export default App;
