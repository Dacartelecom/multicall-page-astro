import portada from '../../public/img/portada.png'
const Portada = () => {
  return (
    <div className='w-full flex gap-[30%] relative z-0'>
      <div className='w-[400px] h-[800px]'>
      <div className='w-[1300px] h-[1040px] absolute z-0 overflow-hidden'>
      <img className='w-[1200px] right-[35%] bottom-[20%] absolute' src={`${portada.src}`} alt="" />
      </div>
      </div>

      <div className='flex h-[700px] items-center gap-10 text-[70px] text-white  font-semibold leading-[100px]'>
      <div className='flex flex-col mb-10'>
      <span>LOS MEJORES</span>
      <span >TALENTOS DE LA</span>
      <span>INDUSTRIA CALL CENTER</span>
      <span className='text-[23px] leading-[10px]'>Garantizamos la Presentación de un servicio óptimo por parte del capital humano</span>
      </div>


</div>
    </div>
  )
}

export default Portada
