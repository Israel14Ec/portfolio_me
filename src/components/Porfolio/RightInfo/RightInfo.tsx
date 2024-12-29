import { FaSearch } from "react-icons/fa"

export function RightInfo() {
  return (
    <div className="bg-white w-full p-5 shadow-lg h-full flex flex-col items-center justify-center">
      
      <div>
        <div className=" flex gap-2 items-center">
        <FaSearch size={20} className=" text-purple-500"/>
          <h3 className="text-secondary text-lg font-semibold">
            Soluciones Tecnológicas
          </h3>
        </div>
    
          
        <p className="text-tertiary text-sm">
          Explora los diversos proyectos que he desarrollado.
        </p>
      </div>

      <div className="relative w-full mt-4">
        <div className="absolute inset-0 h-1 bg-gradient-to-r from-slate-500 via-purple-500 to-red-500"></div>
      </div>
    </div>
  );
}
