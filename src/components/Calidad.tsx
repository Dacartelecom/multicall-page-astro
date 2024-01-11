import Cards from "./Cards"
import logo from "../../public/img/Diagrama.png"

const Calidad = () => {
  return (
    <div className='text-center text-white text-[50px] flex justify-center'>
      <div className="flex flex-col justify-center items-center">
      <span className="font-semibold">LO QUE OFRECEMOS</span>
      <div className="w-[150px] h-[15px] bg-[#336AEA] mt-3"></div>
      <div className="my-[100px]">
        <div className="flex gap-[50px]">
          <Cards logo={`${logo.src}`} title="texto prueba">
          <span>hola</span>
          </Cards>
          <Cards logo={`${logo.src}`} title="texto prueba">
          <span>hola</span>
          </Cards>          
          <Cards logo={`${logo.src}`} title="texto prueba">
          <span>hola</span>
          </Cards>
          <Cards logo={`${logo.src}`} title="texto prueba">
          <span>hola</span>
          </Cards>
          </div>
      </div>
      </div>
      
    </div>
  )
}

export default Calidad
