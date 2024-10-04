import { NextResponse } from "next/server";

const imagem = [
  { id: 1, Tema:"Foto do livro - Worlds in Collision", url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTh3H780uK2Fe16EzQ6YBuVukZtTIr7vxnZR8rP20H-PlMR3Tf' },
  { id: 2,Tema:"Foto do autor - Immanuel Velikovsky" ,url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Immanuel_Velikovsky.jpg' },
  { id: 3, Tema:"Foto da teoria do livro - Cataclismo Astronômico" ,url: 'https://services.meteored.com/img/article/cataclismo-cosmico-captado-inedito-fenomeno-america-do-norte-europa-astronomia-347721-1_1024.jpg' }
]

export async function GET() {
  return NextResponse.json(imagem);
}