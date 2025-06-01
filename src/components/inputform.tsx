'use client';

import { CheckCircle, Mail, User } from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemas, FormData } from "@/lib/schemas";
import { useState } from "react";

export function InputForm() {
  const option = [
    { value: "", label: "Selecione uma opção" },
    { value: "dev", label: "Desenvolvedor(a)" },
    { value: "designer", label: "Designer" },
    { value: "estudante", label: "Estudante" },
    { value: "professor", label: "Professor(a)" },
    { value: "outro", label: "Outro" },
  ];

  //   validação do formulário
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isNameFocused, setIsNameFocused] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [emailValue, setEmailValue] = useState("");



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schemas),
  });

  // extrair register para name
  const {
    ref: nameRef,
    onBlur: nameOnBlur,
    onChange: nameOnChange,
    name: nameRegisterName,
  } = register("name");

  // extrair register para email
  const {
    ref: emailRef,
    onBlur: emailOnBlur,
    onChange: emailOnChange,
    name: emailRegisterName,
  } = register("email");


  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    console.log(data);
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full mt-10 py-2 md:mt-20">
        <div className="bg-green-900/50 rounded-full p-4 mb-4">
          <CheckCircle className="w-8 h-8 text-green-600 " />
        </div>
        <h2 className="text-2xl mb-4 font-bold text-center">
          Inscrição realizada com sucesso!
        </h2>
        <p className="text-sm text-center text-description">
          Agradecemos seu interesse em participar do nosso evento. Um e-mail de
          confirmação foi enviado para o endereço fornecido.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        {/* input name */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-sm">
            Nome
          </label>
          <div
            className={`group flex items-center space-x-2 border rounded-md px-3 py-3 ${
              errors.name ? "border-red-500" : "border-border-default"
            } focus-within:border-border-focus transition-all duration-300`}
          >
            <User 
            className={`transition-colors duration-200 ${
              isNameFocused || nameValue !== "" ? "text-border-focus" : "text-gray-400"
            }`}
            size={18} />
            <input
              className="placeholder:text-icon-default text-sm outline-none w-full "
              placeholder="Digite seu nome completo"
              id="name"
              type="text"
              name={nameRegisterName}
            ref={nameRef}
            onFocus={() => setIsNameFocused(true)}
            onBlur={(e) => {
              setIsNameFocused(false);
              nameOnBlur(e);
            }}
            onChange={(e) => {
              setNameValue(e.target.value);
              nameOnChange(e);
            }}
            value={nameValue}
            />
          </div>
          {errors.name && (
            <span className="text-red-500 text-xs">Campo obrigatório</span>
          )}
        </div>
        {/* input email */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-sm">
            E-mail
          </label>
          <div
            className={`group flex items-center space-x-2 border rounded-md px-3 py-3 ${
              errors.email ? "border-red-500" : "border-border-default"
            } focus-within:border-border-focus transition-all duration-300`}
          >
            <Mail 
            className={`transition-colors duration-200 ${
              isEmailFocused || emailValue !== "" ? "text-border-focus" : "text-gray-400"
            }`}
            size={18} />
            <input
              className="placeholder:text-icon-default text-sm outline-none w-full "
              placeholder="Digite seu e-mail"
              id="email"
              type="email"
              name={emailRegisterName}
            ref={emailRef}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={(e) => {
              setIsEmailFocused(false);
              emailOnBlur(e);
            }}
            onChange={(e) => {
              setEmailValue(e.target.value);
              emailOnChange(e);
            }}
            value={emailValue}
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-xs">
              Insira um e-mail válido
            </span>
          )}
        </div>
        {/* input select */}
        <div className="flex flex-col space-y-2 mb-4">
          <label htmlFor="ticket" className="text-sm">
            Cago ou área de atuação
          </label>
          <select
            {...register("ticket")}
            id="ticket"
            name="ticket"
            className={`border rounded-md px-3 py-3 outline-none text-sm text-white ${
              errors.ticket ? "border-red-500" : "border-border-default"
            } focus-within:border-border-focus transition-all duration-300 bg-transparent`}
          >
            {option.map((opt) => (
              <option key={opt.value} value={opt.value} className="text-black">
                {opt.label}
              </option>
            ))}
          </select>
          {errors.ticket && (
            <span className="text-red-500 text-xs">
              {errors.ticket.message}
            </span>
          )}
        </div>
        {/* input checkbox */}
        <div className="flex items-center gap-2">
          <label className="inline-flex tems-center cursor-pointer">
            <input
              {...register("terms")}
              type="checkbox"
              className="hidden peer "
            />
            <span
              className={`
        w-4 h-4 rounded border-2 
        border-border-defeault 
        flex items-center justify-center 
        transition-all duration-200
        peer-checked:bg-white peer-checked:border-none ${
          errors.terms ? "border-red-500" : "border-border-default"
        }
      `}
            >
              <svg
                className={`w-3 h-3 text-black transition-opacity duration-150 `}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          </label>
           <span className="text-[13px]">
              Li e concordo com os{" "}
              <Link
                href="/"
                className="text-secondary-purple hover:text-[#695ce8]"
              >
                Termos de uso
              </Link>{" "}
              e{" "}
              <Link
                href="/"
                className="text-secondary-purple hover:text-[#695ce8]"
              >
                Política de privacidade
              </Link>
            </span>
        </div>
        {errors.terms && (
              <span className="text-red-500 text-xs">
                Você deve aceitar os termos de uso
              </span>
            )}
        {/* butoon */}
        <button
        disabled={isSubmitting}
          type="submit"
          className="mt-4 bg-gradient-to-r from-secondary-purple to-primary-blue text-white font-semibold py-4 px-4 rounded-md hover:opacity-90 transition-opacity duration-300 cursor-pointer"
        >
            {isSubmitting ? "Enviando..." : "Inscreva-se agora"}
        </button>
      </form>
    </div>
  );
}
export default InputForm;