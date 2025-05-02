'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { CaixaSobre } from "./CaixaSobre";

gsap.registerPlugin(ScrollTrigger)

export function SectionSobre() {

    const sobretituloref = useRef(null)
    const sectionsobreref = useRef(null)
    const caixasref = useRef(null)

    useEffect(() => {

        const caixas = caixasref.current
        const sobretitulo = sobretituloref.current
        const sectionsobre = sectionsobreref.current

        gsap.fromTo(sobretitulo, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: sectionsobre,
                start: '13% center',
                end: '',
                markers: false
            }
        })

        gsap.fromTo(caixas, {
            opacity: 0,
            y: 20

        }, {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: sectionsobre,
                start: '20%',
                end: '30%',
                markers: false
            }

        })

    }, [])

    return (

        <section className="bg-[#E1D0E4]" ref={sectionsobreref} id="sobre">
            <div className="flex flex-col gap-10 mx-5">
                
                {/* Título */}
                <div ref={sobretituloref} className="flex flex-col items-center gap-5 mt-20">
                    <h1 className="text-3xl text-[#830698] font-bold md:text-5xl">
                        <span className="text-[#9f43af]">Sobre o</span> AlugaApp
                    </h1>
                    <p className="text-2x1 font-medium md:text-2xl w-[70%]" >
                        O Aluga-se nasceu com o propósito de facilitar o aluguel de casas no interior, conectando proprietários e inquilinos de maneira simples, rápida e segura. Sabemos que encontrar um imóvel ideal pode ser um desafio, por isso criamos uma plataforma intuitiva que torna o processo mais ágil e acessível. Nosso objetivo é transformar a experiência de aluguel, oferecendo praticidade, transparência e um atendimento de qualidade. Se você busca um novo lar ou deseja anunciar um imóvel, o Aluga-se é a solução perfeita para você!
                    </p>
                </div>

                {/* Caixas (Missão, Visão, Valores) */}
                    <div
                        className="flex flex-col gap-4 md:flex-row mb-20"
                        ref={caixasref}
                    >
                        <CaixaSobre
                            titulo="Missão"
                            descricao="Facilitar o aluguel de imóveis conectando proprietários e inquilinos com agilidade, transparência e tecnologia."
                        />
                        <CaixaSobre
                            titulo="Visão"
                            descricao="Ser a principal plataforma de aluguel de imóveis no interior, tornando o processo simples, seguro e eficiente."
                        />
                        <CaixaSobre
                            titulo="Valores"
                            descricao="Nossos valores são baseados em Segurança e Transparência, garantindo negociações confiáveis e um ambiente seguro; Praticidade e Inovação, com um processo ágil e tecnologia acessível; e Compromisso com a Qualidade, assegurando atendimento eficiente e suporte ágil."
                        />
                    </div>
            </div>
        </section>
    );
}
