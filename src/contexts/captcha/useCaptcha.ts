import {createContext, useContext} from "react";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";

export const CaptchaContext = createContext<Capthable | undefined>(undefined);

export type Executable = (action?: string | undefined) => Promise<string>;

export interface Capthable {
  execute: Executable;
}

export default function useCaptcha() {
  const captchaContext = useContext(CaptchaContext);

  if (!captchaContext) {
    throw new Error("useCaptcha must be used within a CaptchaProvider");
  }

  return captchaContext;
}

export function useCaptchaController(): Capthable {
  const {executeRecaptcha} = useGoogleReCaptcha();

  return {
    execute: function (action?: string | undefined) {
      if (!executeRecaptcha) {
        throw new Error("executeRecaptcha is not defined");
      }

      return executeRecaptcha(action);
    },
  };
}
