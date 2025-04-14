type Props = {
    name: string
}

export function ItemMenu({name}:Props) {
    return (
        <button className="flex items-center gap-3 cursor-pointer hover:text-[#830698]">
            <span className="p-2  font-regular">{name}</span>
        </button>
    )
}