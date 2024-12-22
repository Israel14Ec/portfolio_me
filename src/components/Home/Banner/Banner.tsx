

export function Banner() {
  return (
    <div className=" bg-white p-5 flex flex-col items-center">
        <div className=" mb-4">
            <h2 className=" text-4xl font-extrabold text-secondary text-center">Ingeniero de software</h2>
            <p className=" text-tertiary text-center">Desarrollo de soluciones tecnológicas</p>
        </div>
        <div className=" mb-8">
            <h3 className="text-xl font-extrabold text-secondary text-center"> {`<Desarrollador>`} </h3>
            <p className=" text-tertiary">Desarrollador front-end y back-end en diversas tecnologías</p>
        </div> 

        <img src="/background.png" alt="Imagen del desarollador" className=" w-32"/>
    </div>
  )
}
