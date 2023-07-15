import { TCoinInfo } from "@/API/upbit/query/getAllMarket";
import * as S from "./CoinRow.styled";

type TProps = {
  coin: TCoinInfo;
};

const CoinRow = ({ coin }: TProps) => {
  return <S.CoinRowWrapper>{coin.market}</S.CoinRowWrapper>;
};

export default CoinRow;
