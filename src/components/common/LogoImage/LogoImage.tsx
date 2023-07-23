import { EXTERNAL_API_BASE_URL } from '@/constpack';
import Image from 'next/image';

import * as S from './LogoImage.styled';

const baseURL = `${EXTERNAL_API_BASE_URL.UPBIT_STATIC}/logos`;

type TProps = {
  name: string;
  size?: number;
  text?: string;
};

const LogoImage = ({ name, size = 15, text }: TProps) => (
  <S.ImageWrapper>
    <Image
      src={`${baseURL}/${name}.png`}
      alt={`${name} logo`}
      width={size}
      height={size}
    />
    <p>{text}</p>
  </S.ImageWrapper>
);

export default LogoImage;
