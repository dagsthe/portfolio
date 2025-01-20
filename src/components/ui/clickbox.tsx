interface Props{
    title:string,
    img:string
}

import { Parallax } from 'react-next-parallax';

export default function clickbox(props:Props){
    return(
        <>
        <Parallax offsetMultiplier={1} scale={1.1}>
            <button className="relative clickbox text-center border-2 rounded-lg border-opacity-50 dark:border-white light:border-black h-[250px] w-[99%] max-w-full ">
                <h1 className="text-5xl font-mono dark:text-gray-200 light:text-black" >{props.title}</h1>
                <span className="flex justify-center h-[70%]">
                    <img src={props.img} width={150} height={50} className="pt-5"/>
                </span>
                 
                <p className="text-4xl opacity-80 font-bold text-gray-400 absolute -top-[10%] -left-[3%]">+</p>
                <p className="text-4xl opacity-80 font-bold text-gray-400 absolute -top-[10%] -right-[3%]">+</p>
                <p className="text-4xl opacity-80 font-bold text-gray-400 absolute -bottom-[7%] -left-[3%]">+</p>
                <p className="text-4xl opacity-80 font-bold text-gray-400 absolute -bottom-[7%] -right-[3%]">+</p>
            </button>
        </Parallax>
        </>
    )
}