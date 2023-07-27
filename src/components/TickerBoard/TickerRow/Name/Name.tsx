import clsx from 'clsx';
import { memo, useMemo } from 'react';
import { StarOutlined } from '@ant-design/icons';

import { LogoImage } from '@/components/common';
import { TMarket } from '@/types';

import { NameWrapper } from './Name.styled';

type TProps = {
  marketInfo: TMarket[string];
};

function Name({ marketInfo }: TProps) {
  const { krName, currency, coinName } = useMemo(() => {
    const krName = marketInfo.korean_name;
    const [currency, coinName] = marketInfo.market.split('-');

    return { krName, currency, coinName };
  }, [marketInfo]);

  return (
    <NameWrapper>
      <span>
        <LogoImage name={coinName} text={krName} />
      </span>

      <span className={clsx(['favourite', { active: false }])}>
        <StarOutlined className="star-symbol" />
        {`${coinName}/${currency}`}
      </span>
    </NameWrapper>
  );
}

export default memo(Name);
