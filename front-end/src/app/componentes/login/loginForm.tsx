"use client";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

export default function LoginForm() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login, senha }),
    });
    const data = await response.json();
    alert(JSON.stringify(data));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-zinc-900 p-6 rounded shadow-md"
    >
      <label className="flex flex-col">
        <span className="mb-1">Login</span>
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className="border rounded px-2 py-1"
          required
        />
      </label>
      <label className="flex flex-col">
        <span className="mb-1">Senha</span>
        <div className="flex flex-row">
          <input
            type={showSenha ? "text" : "password"}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border rounded-l-sm px-2 py-1 w-7/8"
            required
          />
          <button
            type="button"
            className="w-1/8 bg-zinc-300 justify-items-center hover:bg-zinc-400 rounded-r-sm px-2 py-1"
            onClick={() => setShowSenha((prev) => !prev)}
            aria-label={showSenha ? "Esconder senha" : "Mostrar senha"}
            // Aqui você pode adicionar lógica para mostrar/esconder a senha
          >
            {showSenha ? <Eye></Eye> : <EyeClosed></EyeClosed>}
          </button>
        </div>
      </label>
      <button
        type="submit"
        className="self-center bg-zinc-600 text-white rounded px-4 py-2 hover:bg-zinc-700"
      >
        Confirmar
      </button>
    </form>
  );
}
