import LoginForm from "./componentes/login/loginForm";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex justify-center align-center font-sans items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <LoginForm />
    </div>
  );
}
