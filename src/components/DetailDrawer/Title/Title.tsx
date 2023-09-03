import { Spin } from "antd";
import useCryptoInfo from "@/hooks/useCryptoInfo";
import { LogoImage } from "@/components/common";

import { TitleWrapper } from "./Title.styled";

const Title = () => {
  const { currentCryptoInfo: info } = useCryptoInfo();

  return info.coinName ? (
    <TitleWrapper>
      <LogoImage
        size={40}
        name={info.coinName}
        text={`${info.krName} ${info.enName}`}
      />
    </TitleWrapper>
  ) : (
    <Spin />
  );
};

export default Title;
