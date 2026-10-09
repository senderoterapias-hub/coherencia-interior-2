export function About() {
  return (
    <section
      aria-labelledby="about-title"
      className="px-5 py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        {/* PRESENTACIÓN */}
        <div className="flex items-center justify-center gap-5 sm:gap-7">
          <div className="min-w-0 flex-1 text-right">
            <p className="font-serif text-lg leading-relaxed text-[#6f583f] md:text-xl">
              Mi nombre es
            </p>

            <h2
              id="about-title"
              className="mt-1 font-serif font-soft text-[2rem] leading-[1.05] text-[#3f3025] sm:text-[2.3rem] md:text-5xl"
            >
              Adrián Patrone
            </h2>

            <p className="mt-3 font-serif text-base leading-relaxed text-[#6f583f] sm:text-lg md:text-xl">
              Acompaño procesos de transformación interior y conexión Divina
            </p>
          </div>

          <div className="size-24 shrink-0 overflow-hidden rounded-full border border-[#8e765d]/30 bg-[#eee5d7] shadow-[0_8px_24px_rgba(72,52,36,0.10)] sm:size-28 md:size-32">
            <img
              src="/adrian.jpg"
              alt="Adrián Patrone"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* DESPLEGABLE */}
        <details className="group mx-auto mt-8 max-w-2xl">
          <summary className="flex cursor-pointer list-none items-center justify-center gap-3 border-y border-[#8e765d]/30 py-5 text-base font-medium text-[#4d3b2e] transition-opacity hover:opacity-70 [&::-webkit-details-marker]:hidden">
            <span>Conocé un poco más sobre mí</span>

            <span
              aria-hidden="true"
              className="text-xl font-normal transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>

          <div className="mt-8 space-y-6 text-base leading-[1.8] text-muted-foreground text-pretty md:text-lg">
            <p>
              Hace más de 12 años, una muerte cercana me llevó a hacerme una
              pregunta:
            </p>

            <p className="text-center font-serif text-2xl leading-snug text-[#3f3025] md:text-3xl">
              ¿La vida es solo esto que veo o hay más?
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

            {/* FOTO DEL RETIRO */}
            <figure className="py-3">
              <div className="overflow-hidden rounded-[1.5rem] border border-[#8e765d]/25 bg-[#eee5d7] shadow-[0_10px_30px_rgba(72,52,36,0.08)]">
                <img
                  src="/retiro.jpg"
                  alt="Adrián acompañando un retiro"
                  className="w-full object-cover"
                />
              </div>

              <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                Acompañando un retiro
              </figcaption>
            </figure>

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

            <p>Una síntesis de ese proceso humano y divino:</p>

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
