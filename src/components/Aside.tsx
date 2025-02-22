import { Home, Zap, GalleryVerticalEnd, CircleUser, History, UserCircle, Flame, ShoppingBag, Music, Film, Radio, GamepadIcon, Newspaper, Trophy } from "lucide-react";

export function Aside() {
    return (
        <>
            <aside className="h-screen flex flex-col text-white">
                <nav className="flex flex-col p-2 gap-1">
                    <a href="#" className=" flex gap-5 rounded-md bg-zinc-800 p-2 pl-4 w-52 h-10 items-center">
                        <Home size={20}/>
                        <p className="text-md">Inicio</p>
                    </a>
                    <a href="#" className=" flex gap-5 rounded-md hover:bg-zinc-800 p-2 pl-4 w-52 h-10 items-center">
                        <Zap size={20}/>
                        <p className="text-md">Shorts</p>
                    </a>
                    <a href="#" className=" flex gap-5 rounded-md hover:bg-zinc-800 p-2 pl-4 w-52 h-10 items-center">
                        <GalleryVerticalEnd size={20}/>
                        <p className="text-md">Inscrições</p>
                    </a>

                    <div className="flex h-0.5 bg-zinc-700 rounded-full mt-4 mb-4"/>

                    <a href="#" className=" flex gap-5 rounded-md hover:bg-zinc-800 p-2 pl-4 w-52 h-10 items-center">
                        <CircleUser size={20}/>
                        <p className="text-md">Você</p>
                    </a>
                    <a href="#" className=" flex gap-5 rounded-md hover:bg-zinc-800 p-2 pl-4 w-52 h-10 items-center">
                        <History size={20}/>
                        <p className="text-md">Historico</p>
                    </a>

                    <div className="flex h-0.5 bg-zinc-700 rounded-full mt-4 mb-4"/>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <p className="w-40 break-normal">Faça login para curtir videos, comentar e se inscrever</p>
                        <div className="flex rounded-full text-blue-500 gap-2 border border-zinc-800 p-2 w-40 justify-center items-center">
                            <UserCircle />
                            <p>Fazer Login</p>
                        </div>
                    </div>

                    <div className="flex h-0.5 bg-zinc-700 rounded-full mt-4 mb-4"/>

                    <h2 className="font-bold ml-4">Explorar</h2>

                    <a href="#" className=" flex gap-5 rounded-md hover:bg-zinc-800 p-2 pl-4 w-52 h-10 items-center">
                        <Flame size={20}/>
                        <p className="text-md">Em alta</p>
                    </a>
                    <a href="#" className=" flex gap-5 rounded-md hover:bg-zinc-800 p-2 pl-4 w-52 h-10 items-center">
                        <ShoppingBag size={20}/>
                        <p className="text-md">Shopping</p>
                    </a>
                    <a href="#" className=" flex gap-5 rounded-md hover:bg-zinc-800 p-2 pl-4 w-52 h-10 items-center">
                        <Music size={20}/>
                        <p className="text-md">Musica</p>
                    </a>
                    <a href="#" className=" flex gap-5 rounded-md hover:bg-zinc-800 p-2 pl-4 w-52 h-10 items-center">
                        <Film size={20}/>
                        <p className="text-md">Filmes</p>
                    </a>
                    <a href="#" className=" flex gap-5 rounded-md hover:bg-zinc-800 p-2 pl-4 w-52 h-10 items-center">
                        <Radio size={20}/>
                        <p className="text-md">Ao Vivo</p>
                    </a>
                    <a href="#" className=" flex gap-5 rounded-md hover:bg-zinc-800 p-2 pl-4 w-52 h-10 items-center">
                        <GamepadIcon size={20}/>
                        <p className="text-md">Jogos</p>
                    </a>
                    <a href="#" className=" flex gap-5 rounded-md hover:bg-zinc-800 p-2 pl-4 w-52 h-10 items-center">
                        <Newspaper size={20}/>
                        <p className="text-md">Noticias</p>
                    </a>
                    <a href="#" className=" flex gap-5 rounded-md hover:bg-zinc-800 p-2 pl-4 w-52 h-10 items-center">
                        <Trophy size={20}/>
                        <p className="text-md">Esportes</p>
                    </a>
                </nav>
            </aside>
        </>
    )
}