import { Keyboard, Menu, Search, MicIcon, Plus, BellIcon, User} from 'lucide-react'
import youtubeLogo from '../../public/images/youtube-logo.png'

export function Header() {
    return (
      <>
        <div className="flex pt-4 pb-4 pr-5 pl-5 bg-zinc-950 text-white justify-between w-100%">
            <div className="flex gap-5 items-center">
                <Menu />
                <img src={youtubeLogo} alt="a" className='h-5 cursor-pointer'/>
            </div>

            <div className="flex items-center">
                <div className="flex border border-zinc-700 rounded-full items-center">
                    <input type="text" placeholder='Pesquisar' className=' p-2 rounded-full rounded-br-none rounded-tr-none outline-none w-xl group pl-4 items-center justify-between overflow-hidden'/>
                    <Keyboard size={18} className='mr-4'/>
                    <div className='flex items-center justify-center w-16 h-10 bg-zinc-800 rounded-full rounded-bl-none rounded-tl-none border-l border-zinc-700'>
                        <Search size={18}/>
                    </div>
                </div>
                <MicIcon size={18} className='ml-4 p-2.5 box-content bg-zinc-800 rounded-full'/>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex bg-zinc-800 gap-2 items-center p-2 rounded-full cursor-pointer pl-3 pr-3">
                    <Plus />
                    <p className='font-bold'>Criar</p>
                </div>
                <BellIcon />
                <div className="flex bg-zinc-800 gap-2 items-center p-2 rounded-full cursor-pointer">
                    <User />             
                </div>
            </div>
        </div>
      </>
    )
  }