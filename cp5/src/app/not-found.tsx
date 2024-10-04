import Image from "next/image"
import erro from "@/img/close.png"
export default function NotFound() {
    return (
        <div>
            <h1>404 : Not Found</h1>
            <Image src={erro} alt="erro" width={200} height={200} />
            <p>O recurso que você tentou acessar não está disponivel!</p>
        </div>
    )
}