import debate from "@/img/debate.jpg"
import Image from "next/image"

export default function Criticas() {
    return (
        <div>
            <h1>Críticas</h1>
            <h2>Críticas e Repercussões de "Worlds in Collision"</h2>
            <Image src={debate} alt="Debate" width={400} height={270} />
            <p>
                Apesar da popularidade do livro, Velikovsky enfrentou severas críticas da comunidade científica, que considerava suas teorias não baseadas em evidências empíricas. <br />
                <ul>
                    Entre as críticas: <br />
                    <br />
                    &rarr; Falta de Evidências Científicas: Os cientistas argumentaram que as ideias de Velikovsky careciam de dados observacionais sólidos e eram muitas vezes contraditórias com a astrofísica estabelecida. <br />
                    <br />
                    &rarr; Reações Acadêmicas: O livro gerou debates acalorados, resultando em uma divisão entre aqueles que apoiavam suas ideias e os que defendiam a ciência tradicional. <br />
                    <br />
                    &rarr; Legado Cultural: Apesar das controvérsias, Velikovsky influenciou movimentos de pensamento alternativo e popularizou a ideia de que a história da Terra pode ser mais dramática do que a ciência convencional sugere.
                </ul>
            </p>
        </div>
    )
}