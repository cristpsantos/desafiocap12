import './styles.css';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { Stores } from '../../types';
import { requestBackend } from '../../util/requests';

const FilterByStore = () => {
  const [store, setStore] = useState<Stores[]>();

  useEffect(() => {
    requestBackend.get<Stores[]>('/stores').then((response) => {
      setStore(response.data);
    });
  }, []);

  return (
    <div className="filter-store-container base-card">
      <Select
        placeholder={'Selecione uma loja'}
        options={store}
        isClearable
        classNamePrefix={'filter-select'}
        getOptionLabel={(stores) => stores.name}
        getOptionValue={(stores) => String(stores.id)}
      />
    </div>
  );
};

export default FilterByStore;
