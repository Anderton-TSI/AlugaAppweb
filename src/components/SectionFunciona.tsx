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

                markers: false

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

                markers: false

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

                markers: false

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

                markers: false

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

                markers: false

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

                markers: false

            }

        })


    },[])

    return (
        <section className="bg-[#E1D0E4]" ref={sectioncfref} id="CF">

            <Container>
                <div className="flex flex-col gap-5 md:p-10">
                    <div className="flex justify-center">
                        <h1 className="font-bold md:text-3xl">Como funciona</h1>
                    </div>
                    <div className="flex justify center items-center gap-5">
                        <div className="flex flex-col gap-4 md:text-center" ref={conteudo1ref}>
                            <h2 className="text-sm font-bold md:text-2xl">Cadastre seu imóvel</h2>
                            <p className="text-sm font-light md:text-lg">Crie uma conta no app e adicione fotos, descrição e valor do aluguel para atrair inquilinos.</p>
                        </div>
                        <div className="" ref={img1ref}>
                            <Image src={imgCadastro} alt="Imagem de cadastro" />
                        </div>
                    </div>
                    <div className="flex justify center items-center gap-5">
                        <div className="" ref={img2ref}>
                            <Image src={imgPropostas} alt="Imagem de notificações" />
                        </div>
                        <div className="flex flex-col gap-4 md:text-center" ref={conteudo2ref}>
                            <h2 className="text-sm font-bold md:text-2xl">Receba propostas</h2>
                            <p className="text-sm font-light md:text-lg">Seu imóvel ficará visível para interessados, e você receberá mensagens e propostas diretamente pelo app.</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4">
                        <div className="flex flex-col gap-4 md:text-center" ref={conteudo3ref}>
                            <h2 className="text-sm font-bold md:text-2xl">Alugue com segurança</h2>
                            <p className="text-sm font-light md:text-lg">Negocie com os inquilinos e feche o contrato com segurança, podendo contar com suporte prioritário no plano Premium.</p>
                        </div>
                        <div className="" ref={img3ref}>
                            <Image src={imgAnuncios} alt="Imagem de anuncios" />    
                        </div>
                    </div>
                </div>
            </Container>

        </section>
    )

}