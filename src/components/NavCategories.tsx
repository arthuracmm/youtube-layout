import { ChevronRight } from "lucide-react";

export function NavCategories() {
    return (
        <nav className="flex w-auto text-white gap-4 items-center relative">
            <a href="#" className="rounded-md bg-white p-1.5 text-sm text-black pl-3 pr-3 font-semibold">Tudo</a>
            <a href="#" className="rounded-md bg-zinc-700 p-1.5 text-sm text-white pl-3 pr-3 font-semibold">JavaScript</a>
            <a href="#" className="rounded-md bg-zinc-700 p-1.5 text-sm text-white pl-3 pr-3 font-semibold">Jogos</a>
            <a href="#" className="rounded-md bg-zinc-700 p-1.5 text-sm text-white pl-3 pr-3 font-semibold">Computadores</a>
            <a href="#" className="rounded-md bg-zinc-700 p-1.5 text-sm text-white pl-3 pr-3 font-semibold">Musica</a>
            <a href="#" className="rounded-md bg-zinc-700 p-1.5 text-sm text-white pl-3 pr-3 font-semibold">Noticias</a>
            <a href="#" className="rounded-md bg-zinc-700 p-1.5 text-sm text-white pl-3 pr-3 font-semibold">Desenvolvimento de Software</a>
            <a href="#" className="rounded-md bg-zinc-700 p-1.5 text-sm text-white pl-3 pr-3 font-semibold">Podcasts</a>
            <a href="#" className="rounded-md bg-zinc-700 p-1.5 text-sm text-white pl-3 pr-3 font-semibold">React</a>
            <a href="#" className="rounded-md bg-zinc-700 p-1.5 text-sm text-white pl-3 pr-3 font-semibold">Ao Vivo</a>
            <a href="#" className="rounded-md bg-zinc-700 p-1.5 text-sm text-white pl-3 pr-3 font-semibold">Lista de Reprodução</a>
            <a href="#" className="rounded-md bg-zinc-700 p-1.5 text-sm text-white pl-3 pr-3 font-semibold">Calculo</a>
            <a href="#" className="rounded-md bg-zinc-700 p-1.5 text-sm text-white pl-3 pr-3 font-semibold">Ao Vivo</a>
            <a href="#" className="rounded-md bg-zinc-700 p-1.5 text-sm text-white pl-3 pr-3 font-semibold">Animação</a>
            <a href="#" className="rounded-md bg-zinc-700 p-1.5 text-sm text-white pl-3 pr-3 font-semibold">Jogo de Ação</a>
            <ChevronRight className="absolute bg-zinc-950 p-2 box-content rounded-full right-0" />
        </nav>
    )
}