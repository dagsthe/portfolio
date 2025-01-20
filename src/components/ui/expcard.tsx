import {useState, useEffect} from 'react'

interface Props {
    Title:string,
    Role:string,
    Descriptions: string[];
}

export default function Expcard(props:Props){
    const descriptions = props.Descriptions
    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        const element = document.getElementById("expcard")
        if(element){
            const position = element.getBoundingClientRect()
            if (position.top <= window.innerHeight && position.bottom >= 0) {
                setIsVisible(true);
              }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
    <>
        <div id='expcard' className={`expcard text-3xl ml-10 pb-10 transition-all duration-1000 transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}>
            <h1 className="font-bold text-3xl"> {props.Title}</h1>

            <p className="font-light text-2xl italic pb-5">{props.Role}</p>
            <ul className="text-lg list-disc pl-14 w-[80%]">
                {descriptions.map((description, index) => (
                     <li className="pb-3" key={index}>{description}</li>
                ))}
            </ul>
        </div>
    </>
    );
}