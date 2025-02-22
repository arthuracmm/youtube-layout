import { EllipsisVertical, Zap } from "lucide-react"

export function Shorts() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex text-white font-bold gap-2 ml-4">
                <Zap className="text-red-600" />
                <h1>Shorts</h1>
            </div>

            <div className="grid grid-cols-7">
                <div className="flex flex-col gap-1 p-4">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-60 h-95 object-cover rounded-lg" />
                    <div className="flex text-white">
                        <h1 className="w-50 font-semibold leading-tight line-clamp-2">Science project for class 8th students working aaaaaaa</h1>
                        <EllipsisVertical size={20} />
                    </div>
                    <p className="text-sm text-white/50">10 mi de visualizações</p>
                </div>
                <div className="flex flex-col gap-1 p-4">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-60 h-95 object-cover rounded-lg" />
                    <div className="flex text-white">
                        <h1 className="w-50 font-semibold leading-tight line-clamp-2">PS5 Pro Upgrade 🔥 #ps5pro #diy #diycraft #aaaaaaaaaaaaaa</h1>
                        <EllipsisVertical size={20} />
                    </div>
                    <p className="text-sm text-white/50">1.7 mi de visualizações</p>
                </div>
                <div className="flex flex-col gap-1 p-4">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-60 h-95 object-cover rounded-lg" />
                    <div className="flex text-white">
                        <h1 className="w-50 font-semibold leading-tight line-clamp-2">Login Page UI in Flutter 👨💻</h1>
                        <EllipsisVertical size={20} />
                    </div>
                    <p className="text-sm text-white/50">1.2 mi de visualizações</p>
                </div>
                <div className="flex flex-col gap-1 p-4">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-60 h-95 object-cover rounded-lg" />
                    <div className="flex text-white">
                        <h1 className="w-50 font-semibold leading-tight line-clamp-2">My Productive morning routine as 16 year old aaaaaaaaaaaa</h1>
                        <EllipsisVertical size={20} />
                    </div>
                    <p className="text-sm text-white/50">1.5 mi de visualizações</p>
                </div>
                <div className="flex flex-col gap-1 p-4">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-60 h-95 object-cover rounded-lg" />
                    <div className="flex text-white">
                        <h1 className="w-50 font-semibold leading-tight line-clamp-2">Lie a magic box! 😎 #orico #tech # techtok aaaaaaaaaaaaaa</h1>
                        <EllipsisVertical size={20} />
                    </div>
                    <p className="text-sm text-white/50">2 mi de visualizações</p>
                </div>
                <div className="flex flex-col gap-1 p-4">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-60 h-95 object-cover rounded-lg" />
                    <div className="flex text-white">
                        <h1 className="w-50 font-semibold leading-tight line-clamp-2">JULGANDO o seu SETUP GAMER #setupgamer aaaaaaaaaaa</h1>
                        <EllipsisVertical size={20} />
                    </div>
                    <p className="text-sm text-white/50">2.1 mi de visualizações</p>
                </div>
                <div className="flex flex-col gap-1 p-4">
                    <img src="https://rseat.pics/" alt="Thumb Video" className="w-60 h-95 object-cover rounded-lg" />
                    <div className="flex text-white">
                        <h1 className="w-50 font-semibold leading-tight line-clamp-2">💀..!#coding</h1>
                        <EllipsisVertical size={20} />
                    </div>
                    <p className="text-sm text-white/50">4.1 mi de visualizações</p>
                </div>
            </div>
        </div>

    )
}