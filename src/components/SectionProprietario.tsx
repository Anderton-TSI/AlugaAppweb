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

                markers:true
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

                markers:true
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

                markers:true
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

                markers:true
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

                markers:true
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

                markers:true
            }

        })



    },[])

    return (

        <section className="w-full h-[704px] mt-10" ref={sectionplanoref} id="proprietario">

            <Container>

                <div className="flex">
                    <div className="flex flex-col items-start max-w-[700px] max-h-[400px] mt-35 gap-13">
                        <h1 className="text-3xl font-light" ref={cadastreh1ref}><span className="text-[#830698]">Alugue</span> seu imóvel <br />
                            de forma simples, rápida e segura!</h1>
                        <p className="font-light" ref={descricaoref}>Cadastre seu imóvel no Aluga-se <br />
                            e alcance inquilinos qualificados sem complicações. <br />
                            Mais visibilidade, mais segurança e menos burocracia para você!</p>
                        <button className="px-6 py-1.5 mb-15 rounded-3xl  font-regular text-white bg-[#830698] border-1 cursor-pointer hover:border-1 hover:border[#830698] hover:bg-white hover:text-[#830698]" ref={btcontrateref}>Contrate seu imóvel agora</button>
                        <div className="w-[500px]" ref={planosref}>
                            <p><span className="font-bold">Plano Gratuito</span> – Publicação do imóvel com opções básicas, anúncios limitados.</p>
                            <p className="mt-3"><span className="font-bold">Plano Premium</span> – Mais destaque, suporte prioritário e
                                isenção de taxas no primeiro aluguel.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-[600px] h-[650px] relative top-5 left-15 gap-15" >

                        <div className="w-[400] h-[300] flex flex-col items-center justify-center gap-8 border-1 rounded-3xl border-[#830698]" ref={cardplanobasicoref}>

                            <h2 className="text-[#830698] font-bold" >Plano básico</h2>
                            <p className="text-4xl font-bold">R$ 49,90<span className="text-sm">/mês</span></p>
                            <p className="w-[300px] font-medium text-center">Anúncios ilimitados, sem comissão
                                no primeiro aluguel</p>
                            <button className="border-1 p-3 rounded-2xl border-[#830698] text-[#830698] cursor-pointer hover:bg-[#830698] hover:text-white">Assinar plano básico</button>

                        </div>

                        <div className="w-[400] h-[300] flex flex-col items-center justify-center gap-8 border-1 rounded-3xl border-[#830698]" ref={cardplanopremiumref}>

                            <h2 className="text-[#830698] font-bold" >Plano premium</h2>
                            <p className="text-4xl font-bold">R$ 149,90<span className="text-sm">/mês</span></p>
                            <p className="w-[300px] font-medium text-center">Tudo do básico <br />
                                + Publicidade na página inicial <br />
                                + Suporte Prioritário</p>
                            <button className="border-1 p-3 rounded-2xl border-[#830698] text-[#830698] cursor-pointer hover:bg-[#830698] hover:text-white">Assinar plano básico</button>

                        </div>


                    </div>

                </div>

            </Container>

        </section>

    )


}