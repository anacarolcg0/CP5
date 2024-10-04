import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/introducao">Introdução</Link></li>
                <li><Link href="/teorias">Teorias</Link></li>
                <li><Link href="/criticas">Criticas</Link></li>
                <li><Link href="/demonstracao">Demonstração</Link></li>
            </ul>
        </nav>
  )
}