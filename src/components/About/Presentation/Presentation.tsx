export function Presentation() {
  return (
    <section className="space-y-4 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-2/3">
        
        <p className="text-2xl text-secondary/80">
          Soy un apasionado ingeniero de software en constante aprendizaje.
        </p>
        <p className="text-secondary mt-5">
          He dedicado mi tiempo a adquirir conocimientos sólidos en desarrollo
          web. He aprendido por mi cuenta a utilizar diversos frameworks
          modernos, entendiendo que no se trata de aprenderlos todos, sino de
          construir una base sólida que permita adaptarse a los desafíos del
          mundo real.
        </p>
        <p className="text-secondary">
          Mi enfoque está en desarrollar proyectos prácticos y reales, donde
          pueda aplicar mis habilidades y aprender en el proceso. Me encantaría
          formar parte de su equipo de desarrollo y contribuir al éxito de los
          proyectos con creatividad, dedicación y trabajo en equipo.
        </p>
      </div>

      <div className="w-full md:w-1/3">
        <div className=" w-full flex justify-center items-center">
          <img src="/MeImage.png" alt="Sobre mi" className=" w-44" />
        </div>
      </div>
    </section>
  );
}
