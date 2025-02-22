import './App.css'
import { Header } from './components/Header'
import { Aside } from './components/Aside'
import { NavCategories } from './components/NavCategories'
import { HomeVideos } from './components/HomeVideos'

function App() {
  return (
    <>
      <div className="bg-zinc-950 flex flex-col">
      <Header />
        <div className="flex flex-1 overflow-hidden">
          <Aside />
          <div className='flex flex-col w-screen gap-4 p-4'>
            <NavCategories />
            <HomeVideos />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
