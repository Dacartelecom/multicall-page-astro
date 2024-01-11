import service1 from '../../public/img/services1.jpg'
import service2 from '../../public/img/services2.jpg'
import service3 from '../../public/img/services3.jpg'


const Services = () => {
  return (
    <div className='text-center text-white text-[50px] flex justify-center'>
      <div className="flex flex-col justify-center items-center">
      <span className="font-semibold">NUESTROS SERVICIOS</span>
      <div className="w-[150px] h-[15px] bg-[#336AEA] mt-3"></div>
        <div className="my-[100px] w-3/4">
            <div className="flex gap-[50px] items-center">

                <div className=' h-[720px] overflow-hidden relative z-0'>
                    <img className='mt-[-10px]' src={service1.src} alt="" />
                    <span className='absolute text-white text-3xl z-10 bottom-5 left-5 font-semibold'>ATENCIÓN AL CLIENTE</span>
                </div>

                <div className=" flex flex-col gap-[20px]">
                    <div className='relative z-0'>
                        <img src={service2.src} alt="" />
                        <span className='absolute text-white text-3xl z-10 bottom-5 left-5 font-semibold'>BACKOFFICE</span>
                    </div>

                    <div className='relative z-0'>
                        <img src={service3.src} alt="" />
                        <span className='absolute text-white text-3xl z-10 bottom-5 left-5 font-semibold'>TELEVENTAS</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Services