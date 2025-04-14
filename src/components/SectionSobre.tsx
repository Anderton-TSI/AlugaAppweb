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

    useEffect(() =>{

        const caixas = caixasref.current
        const sobretitulo = sobretituloref.current
        const sectionsobre = sectionsobreref.current

        gsap.fromTo(sobretitulo,{
            opacity: 0,
            y: 20
        },{
            opacity:1,
            y:0,
            duration: 2,
            ease: "power4.out",
            scrollTrigger:{
                trigger:sectionsobre,
                start: '13% center',
                end:'',

                markers:false
            }    
        })

        gsap.fromTo(caixas,{
            opacity:0,
            y:20
            
        },{
            opacity:1,
            y:0,
            duration:2,
            ease:"power4.out",
            scrollTrigger:{
                trigger:sectionsobre,
                start:'20%',
                end:'30%',
                markers: false
            }

        })

    },[])

    return (

        <section className="w-full h-[704px] bg-[#E1D0E4] flex justify-center" ref={sectionsobreref} id="sobre">
            <div className="flex flex-col items-center max-w-[850px] mt-30">
                {/* Centraliza o título */}
                <div ref={sobretituloref} className="opacity-0">
                    <h1 className="text-center text-4xl text-[#830698] font-bold">
                        <span className="text-[#9F43AF] text-3xl">Sobre o</span> AlugaApp
                    </h1>
                    {/* Parágrafo alinhado ao centro */}
                    <p className="text-center font-semibold text-[20px] mt-6 tracking-wide">
                        O Aluga-se nasceu com o propósito de facilitar o aluguel de casas no interior, conectando proprietários e inquilinos de maneira simples, rápida e segura. Sabemos que encontrar um imóvel ideal pode ser um desafio, por isso criamos uma plataforma intuitiva que torna o processo mais ágil e acessível. Nosso objetivo é transformar a experiência de aluguel, oferecendo praticidade, transparência e um atendimento de qualidade. Se você busca um novo lar ou deseja anunciar um imóvel, o Aluga-se é a solução perfeita para você!
                    </p>
                </div>
                {/* Seção das caixas, agora organizadas em linha */}
                <div className="justify-center">
                    <div className="absolute left-20 mt-10 flex justify-center w-full max-w-[1200px] px-6 gap-6" ref={caixasref}>
                        <CaixaSobre titulo="Missão" descricao="Facilitar o aluguel de imóveis conectando proprietários e inquilinos com agilidade, transparência e tecnologia." />
                        <CaixaSobre titulo="Visão" descricao="Ser a principal plataforma de aluguel de imóveis no interior, tornando o processo simples, seguro e eficiente." />
                        <CaixaSobre titulo="Valores" descricao="Segurança e Transparência – Negociações confiáveis e ambiente seguro. Praticidade e Inovação – Processo ágil e tecnologia acessível. Compromisso com a Qualidade – Atendimento eficiente e suporte ágil." />
                    </div>
                </div>
            </div>
        </section>
    );
}