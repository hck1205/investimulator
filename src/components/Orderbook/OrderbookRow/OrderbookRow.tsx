import { memo } from 'react';
import { TOrderbookUnit } from '@/types';
import * as S from './OrderbookRow.styled';

type TProps = {
  ask_price: number; // 38674000;
  ask_size: number; // 0.0195104;
  bid_price: number; // 38624000;
  bid_size: number; // 0.05178127;
  no: number;
};

function OrderbookRow(props: TProps) {
  const { ask_price, ask_size, bid_price, bid_size, no } = props;

  return (
    <>
      <S.OrderbookRow order={no * -1}>
        <td>
          <div>{no * -1}</div>
          <div className="price-wrapper">
            <p>{ask_price}</p>
            <p>NUM %</p>
          </div>
          <div>{ask_size}</div>
        </td>
      </S.OrderbookRow>
      <S.OrderbookRow order={no}>
        <td>
          <div>{no}</div>
          <div className="price-wrapper">
            <p>{bid_price}</p>
            <p>NUM %</p>
          </div>
          <div>{bid_size}</div>
        </td>
      </S.OrderbookRow>
    </>
  );
}

export default memo(OrderbookRow);
