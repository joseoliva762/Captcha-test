"use client";

import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

import BaseCaptchaProvider from "./captcha";

export default function CaptchaProvider({children}: {children: React.ReactNode}) {
  return (
    <GoogleReCaptchaProvider
      language="es"
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? ""}
      scriptProps={{async: true}}
    >
      <BaseCaptchaProvider>{children}</BaseCaptchaProvider>
    </GoogleReCaptchaProvider>
  );
}

export {CaptchaProvider};
