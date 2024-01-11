import logo from '../../public/img/logoB.png'

const Headers = () => {
  return (
    <div className='w-full h-[150px] flex justify-stretch gap-[30%] items-center relative z-10'>
<div className='w-[500px]'>
<div className='w-[1000px] h-[1000px]  bg-[#336AEA] flex justify-center items-end rounded-[100%] absolute right-[55%] bottom-[-100%]'>
      <img className='w-[450px] mb-[90px]' src={`${logo.src}`} alt="" />
      </div>
</div>

    <div className='flex gap-10 text-4xl text-white font-semibold mt-20'>
      <span>Somos</span>
      <span>Clientes</span>
      <span>Servicios</span>
</div>
    </div>
  )
}

export default Headers
