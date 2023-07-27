import clsx from 'clsx';
import { memo } from 'react';

import { ComparisonPriceWrapper } from './ComparisonPrice.styled';
import { convertToNumberLocale, convertToPercentage } from '@/utils';

const getStatusClassName = (value: number) => {
  return clsx({
    positive: value > 0,
    negative: value < 0,
    neutral: value === 0,
  });
};

type TProps = {
  signedChangeRate: number;
  signedChangePrice: number;
};

function ComparisonPrice(props: TProps) {
  const { signedChangePrice, signedChangeRate } = props;

  const comparisonPercentage = convertToPercentage(signedChangeRate); // 전일대비 %
  const comparisonValue = convertToNumberLocale(signedChangePrice); // 전일대비

  return (
    <ComparisonPriceWrapper>
      <span className={getStatusClassName(signedChangeRate)}>
        {comparisonPercentage}
      </span>

      <span className={getStatusClassName(signedChangePrice)}>
        {comparisonValue}
      </span>
    </ComparisonPriceWrapper>
  );
}

export default memo(ComparisonPrice);
