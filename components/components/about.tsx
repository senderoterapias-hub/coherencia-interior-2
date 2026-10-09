export function About() {
  return (
    <section
      aria-labelledby="about-title"
      className="px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto overflow-hidden rounded-[2rem] border border-[#8e765d]/30 bg-[#eee5d7] shadow-[0_12px_30px_rgba(72,52,36,0.08)]">
            <img
              src="/adrian.jpg"
              alt="Adrián Patrone"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <h2
            id="about-title"
            className="mt-7 font-serif font-soft text-[2.2rem] leading-[1.05] text-[#3f3025] md:text-5xl"
          >
            Adrián Patrone
          </h2>

          <p className="mt-3 font-serif text-lg leading-relaxed text-[#6f583f] md:text-xl">
            Acompaño procesos de transformación interior y conexión Divina
          </p>
        </div>

        <details className="group mx-auto mt-8 max-w-2xl">
          <summary className="flex cursor-pointer list-none items-center justify-center gap-3 border-y border-[#8e765d]/30 py-5 font-medium text-[#4d3b2e] transition-opacity hover:opacity-70 [&::-webkit-details-marker]:hidden">
            <span>Conocé un poco más sobre mí</span>

            <span
              aria-hidden="true"
              className="text-xl transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>

          <div className="mt-8 space-y-6 text-base leading-[1.85] text-muted-foreground text-pretty md:text-lg">
            <p>
              Hace más de 12 años, una pérdida cercana me llevó a hacerme una
              pregunta:
            </p>

            <p className="text-center font-serif text-2xl leading-snug text-[#3f3025] md:text-3xl">
              ¿Qué hay después de la muerte?
            </p>

            <p>
              Comencé a meditar buscando respuestas y, en ese proceso, empecé
              a sentir y percibir la energía de una manera que no comprendía.
            </p>

            <p>Por momentos pensé que estaba loco.</p>

            <p>Hasta que pedí una señal.</p>

            <p>
              Poco tiempo después, mi tía —Maestra de Reiki— se mudó a unas
              calles de mi casa para abrir un consultorio donde comenzaría a
              enseñar a trabajar con la energía.
            </p>

            <p className="font-serif text-xl leading-snug text-[#3f3025] md:text-2xl">
              Para mí, fue el comienzo de un camino.
            </p>

            <p>
              Comencé a descubrir mi propio mundo interior: mis heridas, mis
              patrones, mi subconsciente.
            </p>

            <p>
              Y al mismo tiempo, fui profundizando en mi conexión con la guía
              superior y la energía sanadora.
            </p>

            <p>
              En aquel momento trabajaba en ventas inmobiliarias y tenía una
              carrera exitosa.
            </p>

            <p>
              Pero algo dentro mío comenzó a mostrarme que mi camino iba por
              otro lugar.
            </p>

            <p className="font-serif text-xl leading-snug text-[#6f583f] md:text-2xl">
              Sentí el llamado a integrar la espiritualidad y la materia.
            </p>

            <p>
              Con el tiempo me convertí en Maestro de Reiki, comencé a formar
              alumnos y a acompañar personas en sesiones y terapias
              vibracionales.
            </p>

            <p>
              Seguí explorando distintos caminos y herramientas que sentía
              cada vez más alineados con mi consciencia.
            </p>

            <p>
              Y de todo ese recorrido nació{' '}
              <strong className="font-medium text-[#3f3025]">
                Coherencia Interior
              </strong>
              .
            </p>

            <p>
              Una síntesis de ese proceso humano y divino:
            </p>

            <p className="text-center font-serif text-xl leading-relaxed text-[#3f3025] md:text-2xl">
              despertar → comprender → integrar → vivir.
            </p>

            <p>
              Porque para mí, despertar no significa convertirte en sanador,
              terapeuta o guía espiritual.
            </p>

            <p className="font-serif text-xl leading-snug text-[#3f3025] md:text-2xl">
              Cada persona tiene su propio camino.
            </p>

            <p>
              Se trata de poder llevar aquello que descubrís dentro tuyo a la
              vida que estás viviendo.
            </p>

            <p>
              Hoy acompaño personas en retiros, sesiones individuales y
              procesos más profundos.
            </p>

            <p>
              Personas que buscan sanar, comprender sus patrones,
              reprogramarse, despertar sus dones o simplemente encontrar una
              forma más integrada de vivir.
            </p>

            <p className="pt-2 text-center font-serif text-xl leading-snug text-[#6f583f] md:text-2xl">
              Y quizás, si llegaste hasta acá, este también sea parte de tu
              camino.
            </p>
          </div>
        </details>
      </div>
    </section>
  )
}
