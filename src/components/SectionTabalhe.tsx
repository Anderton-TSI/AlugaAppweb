import { Container } from "./Container";

export function SectionTrabalhe() {

    return (

        <section className="" id="TC">
            <Container>
                <div className="py-10 md:flex md:flex-col md:items-center md:justify-center">
                    <div className="flex flex-col gap-20 justify-center items-center">
                        <div className="flex flex-col gap-5 md:items-center">
                            <h2 className="text-center text-lg font-medium md:text-3xl md:font-light md:w-[63%] md:text-start">Seja um corretor parceiro do <span className="text-[#830698] font-bold">Aluga-se </span>
                                e aumente seus ganhos!</h2>
                            <p className="text-center text-sm font-light md:text-base md:font-light md:w-[63%] md:text-start">Conecte-se a proprietários e inquilinos, facilite negociações
                                e amplie suas oportunidades no mercado imobiliário.</p>
                        </div>
                        <div className=" flex flex-col gap-10 md:gap-15 md:flex-row md:w-[80%]">
                            <div className=" flex flex-col gap-4 md:w-[70%]">
                                <h3 className="font-medium">Quem pode se candidatar?</h3>
                                <p className="font-light">Corretores autônomos ou imobiliárias.
                                    Profissionais com experiência em aluguel de imóveis.
                                    Pessoas que querem crescer no mercado imobiliário
                                    com suporte de tecnologia.</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="font-medium">Perguntas Frequentes (FAQ)</h3>
                                <div>
                                    <p className="font-light">
                                        <span className="text-[#830698] md:font-semibold">Preciso pagar para participar?</span> Não, o cadastro é gratuito!
                                    </p>
                                    <p className="font-light">
                                        <span className="text-[#830698] md:font-semibold">Como recebo pelas intermediações?</span> Por comissão em
                                        cada aluguel fechado.
                                    </p>
                                    <p className="font-light">
                                        <span className="text-[#830698] md:font-semibold">Preciso ter CRECI?</span> Depende do modelo de atuação,
                                        mas experiência em locação é um diferencial.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="text-[#830698] text-xs font-medium">Junte-se ao Aluga-se e transforme sua carreira no mercado imobiliário!</p>
                    </div>
                </div>
            </Container>
        </section>

    )


}