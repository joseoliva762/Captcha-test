import GenerateToken from "@/containers/generate-token";

export default function HomePage() {
  return (
    <div className="flex h-auto w-full max-w-sm flex-col items-center justify-start overflow-hidden px-4 md:max-w-md xl:max-w-2xl">
      <h6 className="text-center text-2xl font-bold">Generate Token</h6>
      <p className="text-center text-sm">
        This is a simple example of a page that uses the captcha context to{" "}
        <b>provide a google recaptcha v3 token</b>.
      </p>
      <GenerateToken />
    </div>
  );
}
