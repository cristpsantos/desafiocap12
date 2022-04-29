import { useEffect, useState } from 'react';
import { SalesByGenderType, SalesPieChartConfig, Summary } from '../../types';
import { buildBySalesGenderFormat, formatPrice } from '../../util/formatters';
import { requestBackend } from '../../util/requests';
import PieChart from '../PieChart';
import './styles.css';

const SalesByGender = () => {
  const [summary, setSummary] = useState<Summary>({ sum: 0 });
  const [salesByGenderType, setSalesByGenderType] = useState<SalesPieChartConfig>();

  useEffect(() => {
    requestBackend
      .get<Summary>('/sales/summary')
      .then((response) => {
        setSummary(response.data);
      })
      .catch((error) => console.log(error.data));
  }, []);

  useEffect(() => {
    requestBackend
      .get<SalesByGenderType[]>('/sales/by-gender')
      .then((response) => {
        const newSaleGender = buildBySalesGenderFormat(response.data);
        setSalesByGenderType(newSaleGender);
      })
      .catch((error) => console.log(error.data));
  }, []);

  return (
    <div className="salesbygender-container base-card">
      <div className="salesbygender-information">
        <h1 className="salesbygender-information-total">{formatPrice(summary.sum)}</h1>
        <span className="salesbygender-information-description">Total de vendas</span>
      </div>
      <div className="salesbygender-piechart">
        <PieChart name="" labels={salesByGenderType?.labels} series={salesByGenderType?.series} />
      </div>
    </div>
  );
};

export default SalesByGender;
