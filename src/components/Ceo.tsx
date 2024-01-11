import ceo from '../../public/img/ceo.jpg'

const Ceo = () => {
  return (
    <div className="w-full bg-[#336AEA] h-[500px] mt-[200px]">
      <div className="flex justify-between">
        <div>
            <img src={ceo.src} alt="" className='w-[600px] mt-[-150px] ml-[50px]'/>
        </div>
        <div className='w-[1000px] m-[100px] text-white text-center'>
            <div className='flex flex-col'>
                <span className='text-left text-2xl'>Somos Multi Call (contact center), una empresa proveedora de servicios Call Center, con más de 11 años de experiencia en el sector. Contamos con más de 200 colaboradores y un amplio ecosistema de soluciones comerciales. Somos un aliado sólido en la comercialización de los mismos. A través de los años, gracias a nuestro equipo de profesionales altamente cualificados nos hemos consolidado como expertos en el rubro de televentas, creando y fidelizando clientes.</span>
                <span className='text-3xl mt-6 font-semibold text-left'>Julián Rojas</span>
                <span className='text-xl font-thin text-left'>Gerente - Multicall</span>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Ceo