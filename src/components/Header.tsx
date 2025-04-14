import Image from "next/image"
import Logo from "@/assets/logo-alugaapp.png"

import { ItemMenu } from "./ItemMenu"
import { BotaoMenu } from "./BotaoMenu"
import Link from "next/link"
import { SectionSobre } from "./SectionSobre"



export function Header() {
    return (
        <header className="mt-2 w-full h-20 bgtransparent">
            <div className="w-full max-w-[1246] px-[20px] mx-auto">
                <div className="flex items-center gap-10 fixed z-40">
                    <Image src={Logo}
                        alt="logo" />
                    <ul className="flex gap-8">
                        <li>
                            <Link href="/">
                                <BotaoMenu name="Inicio" />
                            </Link>

                        </li>
                        <li>
                            <Link href="#sobre">
                                <ItemMenu name="Sobre nós" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#proprietario">
                                <ItemMenu name="Area proprietario" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#CF">
                                <ItemMenu name="Como funciona" />
                            </Link>
                            
                        </li>
                        <li>
                            <Link href="#TC">
                                <ItemMenu name="Trabalhe conosco" />
                            </Link>
                            
                        </li>
                        <li>
                            <Link href="#baixe">
                                <BotaoMenu name="Baixe nosso App" />
                            </Link>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}