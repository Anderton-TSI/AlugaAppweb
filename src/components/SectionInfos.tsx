'use client'

import { Container } from "./Container";

import Image from "next/image";
import Circulo from "@/assets/circulo.png";
import Celulares from "@/assets/img-celulares.png";


import { useEffect, useRef } from "react";
import gsap from "gsap";


export function SectionInfos() {

    const tituloref = useRef(null)

    useEffect(() => {
        const tituloh1 = tituloref.current

        gsap.fromTo(tituloh1, {
            opacity: 0,
            y: 20
        }, {
            y:0,
            opacity: 1,
            duration: 1,
            ease: "power4.out"
        })  

    }, []);

    return (
        <section className="w-full h-[704px] mt-10">
            <Container>
                <div className="flex">
                    <div className="flex flex-col items-center max-w-[700px] max-h-[400px] mt-25 opacity-0" ref={tituloref}>
                        <h1 className="text-[#830698] text-center font-bold text-5xl mb-10 ">AlugaApp</h1>
                        <p className="text-left text-1x1 mb-8">O Aluga-se é a plataforma ideal para quem busca um imóvel
                            para morar com segurança e praticidade.
                            Conectamos proprietários a inquilinos de forma simples e eficiente,
                            facilitando o aluguel de casas no interior com transparência e agilidade.
                            Se você tem um imóvel para alugar ou está em busca de um novo lar,
                            conheça nosso app e descubra uma maneira inovadora de encontrar
                            o aluguel perfeito para você!</p>
                            <div className="justify-center items-center">
                                <button className="px-6 py-1.5 rounded-3xl  font-regular text-white bg-[#830698] cursor-pointer hover:border-1 hover:border[#830698] hover:bg-white hover:text-[#830698]">
                                    Baixe Agora
                                </button>
                            </div>
                    </div>
                    <div className="ml-10">
                        <Image className="absolute" src={Circulo} alt=""/>
                        <Image className="relative ml-8 mt-10" src={Celulares} alt=""/>
                    </div>
                </div>
            </Container>
        </section>

    )
}