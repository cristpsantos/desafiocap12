import PieChart from '../PieChart';
import './styles.css';

const SalesByGender = () => {
  return (
    <div className="salesbygender-container base-card">
      <div className="salesbygender-information">
        <h1 className="salesbygender-information-total">R$ 746.484,00</h1>
        <span className="salesbygender-information-description">Total de vendas</span>
      </div>
      <div className="salesbygender-piechart">
        <PieChart name="" labels={['Feminino', 'Masculino', 'Outros']} series={[40, 30, 30]} />
      </div>
    </div>
  );
};

export default SalesByGender;
