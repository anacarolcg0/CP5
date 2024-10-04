import Image from "next/image"
import venusterra from "@/img/venuseterra.jpg"
export default function Demonstracao() {
    return (
        <div>
            <h1>Demonstração</h1>
            <h2>A Teoria do Cataclismo de Vênus
                Demonstração: A Influência de Vênus na Terra</h2>
                <Image src={venusterra} alt="Venus na frente da terra" width={400} height={270} />
            <p>
            Velikovsky sugeriu que a passagem de Vênus como um cometa teria provocado uma série de desastres naturais. Para demonstrar isso, vamos considerar:
            <br />Cenário: Imagine que Vênus passou a uma distância relativamente próxima da Terra. <br />
            <br />
            Efeitos: <br />
            <br />
            &rarr; Mudanças Gravitacionais: A gravidade de Vênus poderia causar perturbações nas marés, resultando em tsunamis. <br />
            <br />
            &rarr; Atividade Vulcânica: A interação poderia desencadear erupções vulcânicas e terremotos.
            </p>
        </div>
    )
}