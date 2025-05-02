'use client'

import { Container } from "./Container"

import { useEffect, useRef } from "react"
import gsap from "gsap"


export function SectionProprietario() {

    const sectionplanoref = useRef(null)
    const cardplanobasicoref = useRef(null)
    const cardplanopremiumref = useRef(null)
    const cadastreh1ref = useRef(null)
    const descricaoref = useRef(null)
    const planosref = useRef(null)
    const btcontrateref = useRef(null)

    useEffect(() => {

        const cardplanobasico = cardplanobasicoref.current
        const cardplanopremium = cardplanopremiumref.current
        const sectionplano = sectionplanoref.current
        const btcontrate = btcontrateref.current
        const cadastreh1 = cadastreh1ref.current
        const descricao = descricaoref.current
        const planos = planosref.current

        gsap.fromTo(cardplanobasico, {

            opacity:0,
            y:20
            
        }, {
            opacity:1,
            y:0,
            duration: 2,
            ease: "power4.out",
            scrollTrigger:{
                trigger: sectionplano,
                start:'13% center',
                end:'',

                markers:false
            }

        })
        gsap.fromTo(cardplanopremium, {

            opacity:0,
            y:20
            
        }, {
            opacity:1,
            y:0,
            duration: 2,
            ease: "power4.out",
            scrollTrigger:{
                trigger: sectionplano,
                start:'50% center',
                end:'',

                markers:false
            }

        })

        gsap.fromTo(btcontrate, {
            opacity: 0,
            y:20

        },{
            opacity:1,
            y:0,
            duration:2,
            ease: "power4.out",
            scrollTrigger:{
                trigger: sectionplano,
                start:'60% center',
                end:'',

                markers:false
            }

        })
        gsap.fromTo (cadastreh1,{

            opacity: 0,
            x:20

        },{
            opacity:1,
            x:0,
            duration:2,
            ease: "power4.out",
            scrollTrigger:{
                trigger: sectionplano,
                start:'13% center',
                end:'',

                markers:false
            }

        })
        gsap.fromTo (descricao,{

            opacity: 0,
            x:20

        },{
            opacity:1,
            x:0,
            duration:2,
            ease: "power4.out",
            scrollTrigger:{
                trigger: sectionplano,
                start:'13% center',
                end:'',

                markers:false
            }

        })
        gsap.fromTo (planos,{

            opacity: 0,
            x:-20

        },{
            opacity:1,
            x:0,
            duration:2,
            ease: "power4.out",
            scrollTrigger:{
                trigger: sectionplano,
                start:'60% center',
                end:'',

                markers:false
            }

        })



    },[])

    return (

        <section className="" ref={sectionplanoref} id="proprietario">

            <Container>

                <div className="flex flex-col md:flex-row gap-8">

                    <div className="flex flex-col items-center justify-center gap-4 md:items-start md:gap-7">
                        <h1 className="text-2xl md:text-3xl"><span className="text-[#830698]">Alugue</span> seu imóvel <br />
                            de forma simples, rápida e segura!</h1>
                        <p className="text-sm font-light md:text-lg" ref={descricaoref}>Cadastre seu imóvel no Aluga-se <br />
                            e alcance inquilinos qualificados sem complicações. <br />
                            Mais visibilidade, mais segurança e menos burocracia para você!</p>
                        <button className="bg-[#830698] text-white py-2 px-4 border-1 rounded-3xl cursor-pointer hover:bg-white hover:text-[#830998]" ref={btcontrateref}>Cadastre seu imóvel agora</button>
                        <div className="text-sm md:text-base" ref={planosref}>
                            <p><span className="font-bold">Plano Gratuito</span> – Publicação do imóvel com opções básicas, anúncios limitados.</p>
                            <p className=""><span className="font-bold">Plano Premium</span> – Mais destaque, suporte prioritário e
                                isenção de taxas no primeiro aluguel.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 mt-15 mb-20 md:w-[30%]" >

                        <div className="flex flex-col items-center bg-white border-1 border-[#830698] rounded-2xl p-5 gap-3" ref={cardplanobasicoref}>

                            <h2 className="font-bold text-[#830698]" >Plano básico</h2>
                            <p className="text-2xl font-bold">R$ 49,90<span className="text-sm">/mês</span></p>
                            <p className="">Anúncios ilimitados, sem comissão
                                no primeiro aluguel</p>
                            <button className="bg-white text-[#830698] border-1 border-[#830698] rounded-2xl p-2 cursor-pointer hover:bg-[#830698] hover:text-white">Assinar plano básico</button>

                        </div>
                        <div className="flex flex-col items-center bg-white border-1 border-[#830698] rounded-2xl p-5 gap-3" ref={cardplanobasicoref}>

                            <h2 className="font-bold text-[#830698]" >Plano premium</h2>
                            <p className="text-2xl font-bold">R$ 149,90<span className="text-sm">/mês</span></p>
                            <p className="">Anúncios ilimitados, sem comissão
                                no primeiro aluguel</p>
                            <button className="bg-white text-[#830698] border-1 border-[#830698] rounded-2xl p-2 cursor-pointer hover:bg-[#830698] hover:text-white">Assinar plano premium</button>

                        </div>


                    </div>

                </div>

            </Container>

        </section>

    )


}