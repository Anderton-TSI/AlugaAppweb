import Image from "next/image"

import imgApple from "@/assets/img-appstore.png"
import imgGoogleplay from "@/assets/img-googleplay.png"

export function Footer(){

    return(

        <div className="w-full h-[300px] flex flex-col bg-[#890698] justify-center items-center gap-3" id="baixe">
            <h2 className="text-2xl font-bold text-white">Baixe a alugue!</h2>
            <div className="flex w-80 gap-4">

                <div className="bg-white rounded-[5px] px-3 cursor-pointer" >
                    <Image src={imgApple} alt="Baixe na AppleStore"/>
                </div>
                <div className="bg-white rounded-[5px] px-3 cursor-pointer" >
                    <Image src={imgGoogleplay} alt="Baixe no Google Play"/>
                </div>

            </div>
            <div className="flex flex-col items-center text-sm gap-1 text-white font-light mt-4">
                <p>Todos direitos reservados</p>
                <p>CNPJ: 00.000.000/0000-00</p>
                <p>AlugaApp Desenvolvimento de Sistemas e Aplicativos Ltda.</p>
                <p>Suporte: (84) 9 9829-5183</p>
                <p>Rua Opérario Antonio Cassimiro, 66. JK. Currais Novos/RN. CEP 59380-000.</p>
            </div>
        </div>

    )

}