import { ReactNode } from "react";

interface Props{
    Name: string,
    title: string,
    children?: ReactNode; // Explicitly define the children prop
}

export default function Page(props:Props){
    return(
        <>
            <div id={props.Name} className={`${props.Name} h-auto mt-[1000px] sm:w-[80% w-[60%] mx-auto my-auto`}>
                <h1 className="text-8xl py-8">{props.title}</h1>
                {props.children}
            </div>
        </>
    )
}