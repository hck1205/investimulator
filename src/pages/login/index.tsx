import Image from "next/image";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Button } from "@/components";

import { ButtonsWrapper, LoginPageWrapper } from "./styles";

import GoogleLogo from "@/icons/google-logo.png";

const LOGIN_MAPS = {
  GOOGLE: {
    key: "google",
    image: GoogleLogo,
  },
  FACEBOOK: {
    key: "facebook",
    image: null,
  },
  APPLE: {
    key: "apple",
    image: null,
  },
  TWITTER: {
    key: "twitter",
    image: null,
  },
};

function LoginPage() {
  return (
    <LoginPageWrapper>
      <h1>Investi-Mulator</h1>

      <ButtonsWrapper>
        {Object.values(LOGIN_MAPS).map(({ key, image = "/" }) => {
          return (
            <Button key={key} className={key}>
              {image && <Image src={image} alt={`${key} icon`} />}
              {key}
            </Button>
          );
        })}
      </ButtonsWrapper>
    </LoginPageWrapper>
  );
}

export default LoginPage;
