import { Gender, SalesByGenderType } from '../types';

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

export const buildBySalesGenderFormat = (salesGender: SalesByGenderType[]) => {
  const labels = salesGender.map((salesGender) => formatGender(salesGender.gender));
  const series = salesGender.map((salesGender) => salesGender.sum);
  return {
    labels,
    series
  };
};

export const formatGender = (gender: Gender) => {
  const textByGender = {
    MALE: 'Masculino',
    FEMALE: 'Feminino',
    OTHER: 'Outros'
  };

  return textByGender[gender];
};
