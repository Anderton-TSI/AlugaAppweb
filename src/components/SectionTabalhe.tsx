import { Container } from "./Container";

export function SectionTrabalhe() {

    return (

        <section className="w-full h-[704px] mt-20" id="TC">
            <Container>
                <div className="flex flex-col items-center">
                    <div className="w-[600px] h-[200px] flex flex-col gap-10">
                        <h2 className="text-3xl font-light">Seja um corretor parceiro do <span className="text-[#830698] font-bold">Aluga-se </span>
                            e aumente seus ganhos!</h2>
                        <p>Conecte-se a proprietários e inquilinos, facilite negociações
                            e amplie suas oportunidades no mercado imobiliário.</p>
                    </div>
                    <div className="flex w-[1000px] gap-15 mt-10">
                        <div className="w-[500px]">
                            <h3 className="font-bold mb-4">Quem pode se candidatar?</h3>
                            <p>Corretores autônomos ou imobiliárias.
                                Profissionais com experiência em aluguel de imóveis.
                                Pessoas que querem crescer no mercado imobiliário
                                com suporte de tecnologia.</p>
                        </div>
                        <div className="w-[500px]">
                            <h3 className="font-bold mb-4">Perguntas Frequentes (FAQ)</h3>
                            <p>
                                <span className="text-[#830698] font-semibold">Preciso pagar para participar?</span> Não, o cadastro é gratuito!
                            </p>
                            <p>
                                <span className="text-[#830698] font-semibold">Como recebo pelas intermediações?</span> Por comissão em
                                cada aluguel fechado.
                            </p>
                            <p>
                                <span className="text-[#830698] font-semibold">Preciso ter CRECI?</span> Depende do modelo de atuação,
                                mas experiência em locação é um diferencial.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-25">
                    <p className="font-bold text-[#830698]">Junte-se ao Aluga-se e transforme sua carreira no mercado imobiliário!</p>
                </div>
            </Container>
        </section>

    )


}