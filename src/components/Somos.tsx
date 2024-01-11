import somos from '../../public/img/somos.jpg'
const Somos = () => {
  return (
    <div className="w-full bg-[#336AEA] h-[500px] mb-[100px]">
      <div className="flex justify-between">
        <div className='w-[1000px] m-[100px] text-white text-center'>
        <div className='flex flex-col'>
          <span className='text-5xl my-6 font-bold'>Quiénes somos</span>
        <span className='text-left text-2xl'>Somos Multi Call (contact center), una empresa proveedora de servicios Call Center, con más de 11 años de experiencia en el sector. Contamos con más de 200 colaboradores y un amplio ecosistema de soluciones comerciales. Somos un aliado sólido en la comercialización de los mismos. A través de los años, gracias a nuestro equipo de profesionales altamente cualificados nos hemos consolidado como expertos en el rubro de televentas, creando y fidelizando clientes.</span>
        </div>
        
        </div>
        <div>
        <img src={somos.src} alt="" className='w-[700px] mt-[50px]'/>
        </div>
      </div>
    </div>
  )
}

export default Somos
