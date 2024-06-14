"use client";

import {useState} from "react";

import CaptchaToken from "../captcha-token";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import useCaptcha from "@/contexts/captcha/useCaptcha";

export default function GenerateToken() {
  const [token, setToken] = useState<string>("" as string);
  const [loading, setLoading] = useState<boolean>(false as boolean);
  const captcha = useCaptcha();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const action = formData.get("action") ?? "default-action-name";

    captcha.execute(action as string).then(function (token) {
      setToken(token);
      setLoading(false);
    });
  }

  return (
    <>
      <form
        className="flex w-full max-w-2xl flex-col items-center justify-start gap-6"
        onSubmit={handleSubmit}
      >
        <br />
        <div className="flex w-full flex-col items-start justify-start gap-1">
          <p className="text-sm font-bold">Action</p>
          <Input name="action" placeholder="action name" />
          <p className="text-sm">Enter the action you want to perform</p>
        </div>
        <Button className="w-full" type="submit">
          {loading ? "Generating..." : "Generate Token"}
        </Button>
        {token ? <CaptchaToken token={token} /> : null}
      </form>
    </>
  );
}
