import { ReactNode } from "react"

type Props = {
   children : ReactNode 
}

export function Container( {children} : Props ){
    return(
        <div className="w-full max-w-[1246] px-[20px] mx-auto">
            {children}
        </div>
    )
}