'use client'

import Image from "next/image"
import Logo from "@/assets/logo-alugaapp.png"

import { FaBars, FaXmark } from "react-icons/fa6";

import { ItemMenu } from "./ItemMenu"
import { BotaoMenu } from "./BotaoMenu"
import Link from "next/link"

import { useState } from "react";

import { useRef } from "react";


export function Header() {

    const menuref = useRef(null);
    const btnref = useRef(null);

    function AbrirMenu(){
        const menu = menuref.current

        menu.classList.toggle("hidden")
        

    }
    

    return (

        <header className="w-full h-25">
            <div className="flex items-center fixed z-40 bg-white w-full  md:gap-15 md:bg-transparent flex-col md:flex-row md:items-center md:justify-center gap-10">
                <div className="flex flex-row items-center justify-between gap-20">
                    <Image src={Logo} alt="logo" />
                    <button ref={btnref} className="flex text-2xl text-[#830698] cursor-pointer md:hidden" onClick={AbrirMenu}>
                        <FaBars />
                    </button>
                </div>

                <div ref={menuref} className="hidden md:block">
                    <ul className="md:flex md:flex-row md:gap-10">
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