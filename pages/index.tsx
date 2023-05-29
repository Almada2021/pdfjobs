import ChangeColorInput from '@/components/ChangeColorInput'
import Draggable from '@/components/Draggable'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-row  min-h-screen bg-green-300  items-center justify-between p-2 ${inter.className}`}
    >
      <div
        className='
          w-2/3 h-screen
          bg-red-500
          overflow-x-hidden
        '
      >

        <Draggable
          disable={false}
          index={0}
          />
        {/* <Draggable
          disable={false}
        /> */}
      </div>
      <div
        className='
        bg-blue-500
        w-1/3
        h-screen
        '
      >
        <ChangeColorInput />
      </div>
    </main>
  )
}
