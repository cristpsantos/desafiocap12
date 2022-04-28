import './App.css';
import FilterByStore from './components/FilterByStore';
import Header from './components/Header';
import SalesByGender from './components/SalesByGender';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <FilterByStore />
        <SalesByGender />
      </div>
    </>
  );
}

export default App;
