import useTickerWebSocket from '@/hooks/useTickerWebSocket';

import TickerBoard from '@/components/TickerBoard';

import * as S from './styled';

function Main() {
  useTickerWebSocket();

  return (
    <S.MainPageWrapper>
      <TickerBoard />
    </S.MainPageWrapper>
  );
}

export default Main;
