"use client";
import {CaptchaContext, useCaptchaController} from "@/contexts/captcha/useCaptcha";

export default function BaseCaptchaProvider({children}: {children: React.ReactNode}) {
  const value = useCaptchaController();

  return <CaptchaContext.Provider value={value}>{children}</CaptchaContext.Provider>;
}

export {BaseCaptchaProvider};
