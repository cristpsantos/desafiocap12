import { useState } from 'react';
import './App.css';
import FilterByStore from './components/FilterByStore';
import Header from './components/Header';
import SalesByGender from './components/SalesByGender';
import { StoreFilterData } from './types';

type ControlComponentsData = {
  filterData: StoreFilterData;
};

function App() {
  const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>({
    filterData: { store: null }
  });

  const handleStoreFilter = (data: StoreFilterData) => {
    setControlComponentsData({ filterData: data });
  };

  return (
    <>
      <Header />
      <div className="App">
        <FilterByStore onFilterChange={handleStoreFilter} />
        <SalesByGender storeFilterData={controlComponentsData.filterData} />
      </div>
    </>
  );
}

export default App;
