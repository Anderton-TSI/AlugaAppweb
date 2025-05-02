'use client'

import { Container } from "./Container";
import Image from "next/image";
import Celulares from "@/assets/img-celulares.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function SectionInfos() {
  const tituloref = useRef(null);

  useEffect(() => {
    const tituloh1 = tituloref.current;

    gsap.fromTo(
      tituloh1,
      {
        opacity: 0,
        y: 20
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out"
      }
    );
  }, []);

  return (
    <section className="">
      <Container>
        <div className="md:flex place-content-between">
        <div className="flex flex-col items-center justify-center gap-5 md:w-[70%]" ref={tituloref}>
            <h1 className="text-xl font-bold text-[#830698] md:text-3xl">
              AlugaApp
            </h1>
            <p className="text-sm font-light md:text-lg">
              O Aluga-se é a plataforma ideal para quem busca um imóvel
              para morar com segurança e praticidade. Conectamos proprietários
              a inquilinos de forma simples e eficiente, facilitando o aluguel
              de casas no interior com transparência e agilidade. Se você tem
              um imóvel para alugar ou está em busca de um novo lar,
              conheça nosso app e descubra uma maneira inovadora de encontrar
              o aluguel perfeito para você!
            </p>
              <button className="text-white text-sm font-bold border-1 border-[#830698] rounded-[20px] py-2 px-6 bg-[#830698] cursor-pointer hover:bg-white hover:text-[#830698]">
                Baixar agora
              </button>
          </div>
          
          <div className="">
            <Image src={Celulares} alt="App no celular" />
          </div>
          
        </div>
      </Container>
    </section>
  );
}
