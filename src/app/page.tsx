import GenerateToken from "@/containers/generate-token";

export default function HomePage() {
  return (
    <div className="flex h-auto flex-col items-center justify-start">
      <h6 className="text-2xl font-bold">Generate Token</h6>
      <p className="text-sm">
        This is a simple example of a page that uses the captcha context to{" "}
        <b>provide a google recaptcha v3 token</b>.
      </p>
      <GenerateToken />
    </div>
  );
}
