import logo from '../../public/img/logoB.png'
const Footer = () => {
  return (
    <div className="w-full">
        <div className=" text-white mt-10 flex justify-evenly h-[200px] items-start gap-[10px]">
            <div>
                <img className='w-[350px]' src={logo.src} alt="" />
            </div>

            <div className='flex gap-[5px]'>
                <div className='bg-[#336AEA] w-[50px] h-[50px] flex justify-center items-center text-3xl rounded-md'><i className="fa-solid fa-location-dot"></i></div>
                <div className='flex flex-col w-[200px]'>
                    <span className='font-thin text-slate-300 text-[15px]'>Dirección</span>
                    <span className='text-[20px]'>Av. Jose Santos Chocano 822 2do Piso Los Olivos - Lima</span>
                </div>
            </div>

            <div className='flex gap-[5px]'>
                <div className='bg-[#336AEA] w-[50px] h-[50px] flex justify-center items-center text-3xl rounded-md'><i className="fa-solid fa-location-dot"></i></div>
                <div className='flex flex-col'>
                    <span className='font-thin text-slate-300 text-[15px]'>Teléfono</span>
                    <span className='text-[20px]'>958 236 866</span>
                </div>
            </div>

            <div className='flex gap-[5px]'>
                <div className='bg-[#336AEA] w-[50px] h-[50px] flex justify-center items-center text-3xl rounded-md'><i className="fa-solid fa-location-dot"></i></div>
                <div className='flex flex-col w-[160px]'>
                    <span className='font-thin text-slate-300 text-[15px]'>Dirección</span>
                    <span className='text-[20px]'>reclutamiento@multicallleds.com</span>
                </div>
            </div>



        </div>
        <div className="w-full flex flex-col justify-center text-center items-center text-white">
            <div className="bg-white h-[2px] w-[95%]"></div>
            <span>@{new Date().getFullYear()}. Todos los derechos reservados.</span>
        </div>
    </div>
  )
}

export default Footer