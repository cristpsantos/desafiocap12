import './styles.css';

const FilterByStore = () => {
  return (
    <div className="filter-store-container base-card">
      <select className="filter-select">
        <option value="">Selecione uma loja</option>
        <option value="">Araguari</option>
        <option value="">Uberlândia</option>
        <option value="">ituiutaba</option>
      </select>
    </div>
  );
};

export default FilterByStore;
