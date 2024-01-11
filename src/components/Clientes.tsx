import Carrusel from "./Carrusel"
import cl from '../../public/img/clientes.png'
import cl1 from '../../public/img/clientes1.png'
import cl2 from '../../public/img/clientes2.png'
import cl3 from '../../public/img/clientes3.png'

const Clientes = () => {
  const clients=[
    `${cl.src}`,
    `${cl1.src}`,
    `${cl2.src}`,
    `${cl3.src}`,
  ]

  return (
    <div className='text-center text-white text-[50px] flex justify-center'>
      <div className="flex flex-col justify-center items-center">
      <span className="font-semibold">CLIENTES</span>
      <div className="w-[150px] h-[15px] bg-[#336AEA] mt-3"></div>
      <div className="my-[100px]">
      <Carrusel clients={clients}/>
      </div>
      </div>
      
    </div>
  )
}

export default Clientes
