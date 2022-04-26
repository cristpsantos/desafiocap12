import './App.css';
import FilterByStore from './components/FilterByStore';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <FilterByStore />
      </div>
    </>
  );
}

export default App;
