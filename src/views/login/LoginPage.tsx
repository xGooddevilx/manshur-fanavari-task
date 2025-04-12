import { LoginForm } from "./components/LoginForm/LoginForm";

export const LoginPage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Welcome Back</h2>
          <p className="text-gray-500 text-sm">Login to your account</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};
