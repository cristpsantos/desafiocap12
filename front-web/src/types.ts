export type Gender = 'FEMALE' | 'MALE' | 'OTHER';

export type Summary = {
  sum: number;
};

export type SalesByGenderType = {
  gender: Gender;
  sum: number;
};

export type SalesPieChartConfig = {
  labels: string[];
  series: number[];
};

export const formatGender = (gender: Gender) => {
  const textByGender = {
    MALE: 'Masculino',
    FEMALE: 'Feminino',
    OTHER: 'Outros'
  };

  return textByGender[gender];
};
