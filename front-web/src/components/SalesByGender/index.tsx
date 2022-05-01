import { useEffect, useMemo, useState } from 'react';
import {
  buildFilterData,
  SalesByGenderType,
  SalesPieChartConfig,
  StoreFilterData,
  Summary
} from '../../types';
import { buildBySalesGenderFormat, formatPrice } from '../../util/formatters';
import { requestBackend } from '../../util/requests';
import PieChart from '../PieChart';
import './styles.css';

type Props = {
  storeFilterData: StoreFilterData;
};

const SalesByGender = ({ storeFilterData }: Props) => {
  const [summary, setSummary] = useState<Summary>({ sum: 0 });
  const [salesByGenderType, setSalesByGenderType] = useState<SalesPieChartConfig>();

  const params = useMemo(() => buildFilterData(storeFilterData), [storeFilterData]);

  useEffect(() => {
    requestBackend
      .get<Summary>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch((error) => console.log(error.data));
  }, [params]);

  useEffect(() => {
    requestBackend
      .get<SalesByGenderType[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSaleGender = buildBySalesGenderFormat(response.data);
        setSalesByGenderType(newSaleGender);
      })
      .catch((error) => console.log(error.data));
  }, [params]);

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
