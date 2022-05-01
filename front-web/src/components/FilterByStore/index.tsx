import './styles.css';
import { useEffect, useState } from 'react';
import { StoreFilterData, Stores } from '../../types';
import { requestBackend } from '../../util/requests';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

type Props = {
  onFilterChange: (data: StoreFilterData) => void;
};

const FilterByStore = ({ onFilterChange }: Props) => {
  const [store, setStore] = useState<Stores[]>();
  const { setValue, getValues, control } = useForm<StoreFilterData>();

  useEffect(() => {
    requestBackend.get<Stores[]>('/stores').then((response) => {
      setStore(response.data);
    });
  }, []);

  const handleChangeStore = (value: Stores) => {
    setValue('store', value);

    const obj: StoreFilterData = {
      store: getValues('store')
    };
    console.log(obj);
    onFilterChange(obj);
  };

  return (
    <div className="filter-store-container base-card">
      <form>
        <Controller
          name="store"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={store}
              classNamePrefix="filter-select"
              onChange={(value) => handleChangeStore(value as Stores)}
              isClearable
              placeholder="Selecione uma loja"
              getOptionLabel={(store: Stores) => store.name}
              getOptionValue={(store: Stores) => String(store.id)}
            />
          )}
        />
      </form>
    </div>
  );
};

export default FilterByStore;
