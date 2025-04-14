'use client'

import { Container } from "./Container";

import Image from "next/image";
import imgCadastro from "@/assets/img-cadastro.png"
import imgPropostas from "@/assets/img-notificacoes.png"
import imgAnuncios from "@/assets/img-anuncios.png"
import { useEffect, useRef } from "react";
import gsap from "gsap";


export function SectionFunciona() {

    const sectioncfref = useRef(null)
    const conteudo1ref = useRef(null)
    const conteudo2ref = useRef(null)
    const conteudo3ref = useRef(null)
    const img1ref = useRef(null)
    const img2ref = useRef(null)
    const img3ref = useRef(null)

    useEffect(()=>{

        const sectioncf = sectioncfref.current
        const conteudo1 = conteudo1ref.current
        const conteudo2 = conteudo2ref.current
        const conteudo3 = conteudo3ref.current
        const img1 = img1ref.current
        const img2 = img2ref.current
        const img3 = img3ref.current

        gsap.fromTo(conteudo1, {
            opacity:0,
            x:-20

        },{
            opacity:1,
            x:0,
            duration:1,
            ease: 'power4.out',

            scrollTrigger:{

                trigger:sectioncf,
                start: '10% center',
                end: '',

                markers: true

            }

        })
        gsap.fromTo(img1, {
            opacity:0,
            x:20

        },{
            opacity:1,
            x:0,
            duration:1,
            ease: 'power4.out',

            scrollTrigger:{

                trigger:sectioncf,
                start: '10% center',
                end: '',

                markers: true

            }

        })
        gsap.fromTo(conteudo2, {
            opacity:0,
            x:-20

        },{
            opacity:1,
            x:0,
            duration:1,
            ease: 'power4.out',

            scrollTrigger:{

                trigger:sectioncf,
                start: '30% center',
                end: '',

                markers: true

            }

        })
        gsap.fromTo(img2, {
            opacity:0,
            x:20

        },{
            opacity:1,
            x:0,
            duration:1,
            ease: 'power4.out',

            scrollTrigger:{

                trigger:sectioncf,
                start: '30% center',
                end: '',

                markers: true

            }

        })
        gsap.fromTo(conteudo3, {
            opacity:0,
            x:-20

        },{
            opacity:1,
            x:0,
            duration:1,
            ease: 'power4.out',

            scrollTrigger:{

                trigger:sectioncf,
                start: '50% center',
                end: '',

                markers: true

            }

        })
        gsap.fromTo(img3, {
            opacity:0,
            x:20

        },{
            opacity:1,
            x:0,
            duration:1,
            ease: 'power4.out',

            scrollTrigger:{

                trigger:sectioncf,
                start: '50% center',
                end: '',

                markers: true

            }

        })


    },[])

    return (
        <section className="w-full h-[1000px] bg-[#E1D0E4]" ref={sectioncfref} id="CF">

            <Container>
                <div className="flex justify-center">
                    <h1 className="text-xl font-bold mt-10">Como funciona</h1>
                </div>
                <div className="flex items-center justify-center gap-20">
                    <div className="flex flex-col items-center w-[500px] gap-5" ref={conteudo1ref}>
                        <h2 className="font-semibold text-2xl">Cadastre seu imóvel</h2>
                        <p className="text-m font-light">Crie uma conta no app e adicione fotos, descrição e valor do aluguel para atrair inquilinos.</p>
                    </div>
                    <div className="w-[300px] h-[300px]" ref={img1ref}>
                        <Image src={imgCadastro} alt="Imagem de cadastro" />
                    </div>
                </div>
                <div className="flex items-center justify-center gap-20">
                    <div className="w-[300px] h-[300px]" ref={img2ref}>
                        <Image src={imgPropostas} alt="Imagem de notificações" />
                    </div>
                    <div className="flex flex-col items-center w-[500px] gap-5" ref={conteudo2ref}>
                        <h2 className="font-semibold text-2xl">Receba propostas</h2>
                        <p className="text-m font-light">Seu imóvel ficará visível para interessados, e você receberá mensagens e propostas diretamente pelo app.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-20">
                    <div className="flex flex-col items-center w-[500px] gap-5" ref={conteudo3ref}>
                        <h2 className="font-semibold text-2xl">Alugue com segurança</h2>
                        <p className="text-m font-light">Negocie com os inquilinos e feche o contrato com segurança, podendo contar com suporte prioritário no plano Premium.</p>
                    </div>
                    <div className="w-[300px] h-[300px]" ref={img3ref}>
                        <Image src={imgAnuncios} alt="Imagem de anuncios" />
                    </div>
                </div>
            </Container>

        </section>
    )

}