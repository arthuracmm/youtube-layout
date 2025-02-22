import { EllipsisVertical } from "lucide-react";

export function HomeVideos() {
    return (
        <div className="grid grid-cols-5 p-2 rounded-md">
            <div className="flex flex-col gap-2 text-white ">
                <div className="flex gap-1">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-75 h-42 object-cover rounded-lg" />
                </div>

                <div className="flex gap-2">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-10 h-10 rounded-full" />
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <h1 className="w-58 font-semibold leading-tight line-clamp-2">Login Form in HTML & CSS</h1>
                            <EllipsisVertical size={20} />
                        </div>
                        <p className="text-sm text-white/50 mt-2">Codehal</p>
                        <p className="text-sm text-white/50">2 mi de visualizações • ha 1 ano</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 text-white ">
                <div className="flex gap-1">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-75 h-42 object-cover rounded-lg" />
                </div>

                <div className="flex gap-2">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-10 h-10 rounded-full" />
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <h1 className="w-58 font-semibold leading-tight line-clamp-2">como REALMENTE e ser PROGRAMADOR (e quanto ganha</h1>
                            <EllipsisVertical size={20} />
                        </div>
                        <p className="text-sm text-white/50 mt-2">Yudi Ganeko</p>
                        <p className="text-sm text-white/50">10 mil visualizações • ha 2 semanas</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 text-white ">
                <div className="flex gap-1">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-75 h-42 object-cover rounded-lg" />
                </div>

                <div className="flex gap-2">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-10 h-10 rounded-full" />
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <h1 className="w-58 font-semibold leading-tight line-clamp-2">esse video vai te encontrar quando você mais precisar!</h1>
                            <EllipsisVertical size={20} />
                        </div>
                        <p className="text-sm text-white/50 mt-2">faria</p>
                        <p className="text-sm text-white/50">8,1 mil visualizações • ha 3 semanas</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 text-white ">
                <div className="flex gap-1">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-75 h-42 object-cover rounded-lg" />
                </div>

                <div className="flex gap-2">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-10 h-10 rounded-full" />
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <h1 className="w-58 font-semibold leading-tight line-clamp-2">Verify OTP page using Html and css only</h1>
                            <EllipsisVertical size={20} />
                        </div>
                        <p className="text-sm text-white/50 mt-2">Pixel Tv</p>
                        <p className="text-sm text-white/50">32 visualizações • ha 13 horas</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 text-white ">
                <div className="flex gap-1">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-75 h-42 object-cover rounded-lg" />
                </div>

                <div className="flex gap-2">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-10 h-10 rounded-full" />
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <h1 className="w-58 font-semibold leading-tight line-clamp-2">Como Desenvolvi Meu Projeto Final da Faculdade de TI</h1>
                            <EllipsisVertical size={20} />
                        </div>
                        <p className="text-sm text-white/50 mt-2">dewoibau</p>
                        <p className="text-sm text-white/50">251 mil vizualizações • ha 10 dias</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}