type Props = {
    name: string
}

export function BotaoMenu({name}:Props) {
    return (
        <button className="flex items-center gap-3 cursor-pointer">
            <span className="px-6 py-1.5 rounded-3xl  font-regular text-white bg-[#830698] hover:bg-[#aa76d3] hover:text-white">{name}</span>
        </button>
    )
}