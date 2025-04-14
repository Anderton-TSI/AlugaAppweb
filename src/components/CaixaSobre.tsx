type Props = {

    titulo : string
    descricao:string

}

export function CaixaSobre({titulo , descricao} : Props){

    return(

        <div className="flex flex-col max-w-[500] px-[30px] mx-auto">
            <h1 className="text-[#4C0358] text-center font-bold">{titulo}</h1>
            <p className="text-start">{descricao}</p>
        </div>

    )

}