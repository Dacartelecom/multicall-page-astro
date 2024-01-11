import type { FC } from 'react'
import type { CardsProps } from '../interfaces/CardsProps'

const Cards:FC<CardsProps> = ({
  children,
  title,
  logo
}) => {
  return (
    <div className="w-[280px] h-[390px] bg-[#336AEA] flex flex-col items-center rounded-2xl text-center shadow-lg shadow-black">
      <div className='m-5 flex flex-col items-center'>
      <img src={logo} alt="" className='w-[100px] my-2'/>
      <span className='text-white text-2xl font-bold'>{title}</span>
      <span className='text-white text-xl'>{children}</span>
      </div>
    </div>
  )
}

export default Cards
