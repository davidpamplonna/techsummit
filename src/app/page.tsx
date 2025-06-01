"use client";
import { motion } from "framer-motion";
import { SectionCards } from "../components/sectioncards";
import { InputForm } from "../components/inputform";
import {  useEffect, useState } from "react";
import { set } from "zod/v4";
import LoadingSpinner from "@/components/loadingspinner";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(()=>{
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return <LoadingSpinner />;
    }

  return (
    <section className="bg-hero bg-repeat min-h-screen w-full relative">
      <div className="absolute w-[450px] h-[450px] bg-secondary-purple left-[72%] top-[-50px] rounded-full blur-[150px] opacity-20" />

      <div className="container mx-auto max-w-6xl py-12 ">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="p-5 space-y-2"
        >
          <div className="flex items-center flex-col">
            <div className="flex flex-col items-center space-y-2">
              <h1 className="font-bol text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-secondary-purple mb-3">
                TechSummit 2025
              </h1>
              <h2 className="text-[15px] md:text-xl mb-4">
                Participe do maior evento tech do ano!
              </h2>
              <p className="text-description text-center text-[12px] md:text-[14px] md:w-[70%]">
                Junte-se a milhares de desenvolvedores, designers e líderes de
                tecnologia para três dias de aprendizado, networking e inovação.
                Uma experiência imersiva com mais de 200 palestrantes
                internacionais.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {/* cols-left */}
            <div className="flex flex-col">
              <h3 className="font-bold text-xl md:text-2xl bg-gradient-to-r from-primary-blue to-secondary-purple bg-clip-text text-transparent ">
                Por que participar
              </h3>
              <div className="mt-7">
                <SectionCards />
              </div>
              <div className="border border-primary-blue border-l-4 rounded-md  w-full mt-10 p-5 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-bold text-2xl">15-17 Junho, 2025</h3>
                  <p className="text-description text-[12px]">
                    Centro de Convenções TechHub
                  </p>
                  <p className="text-description text-[12px]">
                    São Paulo, Brasil
                  </p>
                </div>
                <p className="font-regular text-[13px] md:text-[14px]">
                  Vagas limitadas! Garanta seu lugar neste evento único que
                  acontecerá nos dias 15 a 17 de Junho de 2025 em São Paulo.
                </p>
              </div>
            </div>
            {/* cols-right */}
            <div className="bg-surface-panel border border-border-card rounded-md p-8 space-y-5">
              <h2 className="font-bold text-2xl mb-2">Garanta sua vaga</h2>
              <p className="text-description text-sm">Preencha o formulário abaixo para garantir sua participação no evento de tecnologia mais aguardado do ano.</p>
              <div className="mt-6 space-y-4 w-full">
                <InputForm />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-[20%] md:bottom-0 right-[70%] -z-1 w-[450px] h-[450px] rounded-full bg-primary-blue opacity-20 blur-[150px] pointer-events-none" />
    </section>
  );
}
