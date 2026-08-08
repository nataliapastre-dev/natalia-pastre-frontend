import { motion } from "framer-motion";
import { Award, GraduationCap, Sparkles, ExternalLink } from "lucide-react";


export default function Certificacoes() {


  const certifications = [

    {
      category: "Backend",
      title: "Bootcamp Sem Parar: Back-End do Zero à Prática",
      institution: "Empresa Sem Parar • Plataforma DIO",
      details: "43 horas • Concluído em 09/07/2026",
      certificate: "Certificado TTSNJ6J",
    },


    {
      category: "Front-End",
      title: "Bootcamp Santander 2026: AI React Front-End",
      institution: "Santander Universidades • Plataforma DIO",
      details: "42 horas • Concluído em 06/06/2026",
      certificate: "Certificado BYSWWX3Y",
    },


    {
      category: "Dados e Automação",
      title: "Bootcamp Accenture: Python para Análise e Automação de Dados",
      institution: "Accenture • Plataforma DIO",
      details: "55 horas • Concluído em 29/04/2026",
      certificate: "Certificado BBSKBOPP",
    },


    {
      category: "Desenvolvimento",
      title: "Bootcamp Instituto Matera: Desenvolvimento de Software",
      institution: "Instituto Matera",
      details: "6 horas • Concluído entre 16 e 18/03/2026",
      certificate: "Certificado de conclusão",
    },


    {
      category: "Python e Inteligência Artificial",
      title: "Fundamentos da Linguagem Python: do Básico a Aplicações de IA",
      institution: "Data Science Academy",
      details: "96 horas • Concluído em 15/01/2026",
      certificate: "Certificado de conclusão",
    },


  ];



  return (

    <section

      id="certificacoes"

      className="
      relative
      py-28
      bg-[#06030f]
      text-white
      overflow-hidden
      "

    >



      <div

        className="
        absolute
        top-20
        right-20
        w-80
        h-80
        bg-purple-600/20
        blur-[120px]
        rounded-full
        "

      />




      <div className="max-w-7xl mx-auto px-6 relative">



        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.7
          }}

          viewport={{
            once:true
          }}

          className="
          text-center
          mb-16
          "

        >



          <div className="flex justify-center mb-5">


            <div

              className="
              p-4
              rounded-2xl
              bg-purple-500/10
              border
              border-purple-400/20
              "

            >

              <GraduationCap

                size={42}

                className="text-purple-400"

              />


            </div>


          </div>




          <h2

            className="
            text-4xl
            md:text-6xl
            font-black
            "

          >

            Certificações{" "}

            <span

              className="
              bg-gradient-to-r
              from-purple-400
              via-violet-400
              to-indigo-500
              bg-clip-text
              text-transparent
              "

            >

              e Cursos

            </span>


          </h2>




          <p

            className="
            mt-5
            max-w-2xl
            mx-auto
            text-slate-400
            leading-7
            "

          >

            Formação complementar em desenvolvimento de software,
            Front-End, Back-End, Python, automação de dados e
            tecnologias utilizadas no mercado.

          </p>



        </motion.div>






        <div

          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-7
          "

        >



          {certifications.map((cert,index)=>(



            <motion.div


              key={cert.title}


              initial={{

                opacity:0,
                y:40

              }}


              whileInView={{

                opacity:1,
                y:0

              }}


              transition={{

                duration:.5,
                delay:index * .08

              }}


              viewport={{

                once:true

              }}



              className="
              group
              rounded-3xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              p-7
              hover:-translate-y-3
              hover:border-purple-400/50
              transition-all
              duration-300
              "

            >




              <div

                className="
                flex
                justify-between
                items-start
                mb-6
                "

              >



                <div

                  className="
                  p-3
                  rounded-xl
                  bg-purple-500/10
                  border
                  border-purple-400/20
                  "

                >

                  <Award

                    size={26}

                    className="text-purple-400"

                  />

                </div>





                <span

                  className="
                  flex
                  items-center
                  gap-1
                  text-xs
                  font-semibold
                  px-3
                  py-2
                  rounded-full
                  bg-purple-500/10
                  text-purple-300
                  border
                  border-purple-400/20
                  "

                >

                  <Sparkles size={13}/>

                  {cert.category}


                </span>


              </div>






              <h3

                className="
                text-lg
                font-bold
                leading-6
                group-hover:text-purple-400
                transition
                "

              >

                {cert.title}

              </h3>





              <p

                className="
                mt-4
                text-sm
                text-slate-300
                "

              >

                {cert.institution}

              </p>




              <p

                className="
                mt-3
                text-sm
                text-slate-400
                "

              >

                {cert.details}

              </p>





              <div

                className="
                mt-5
                flex
                items-center
                gap-2
                text-xs
                text-purple-300
                "

              >

                <ExternalLink size={14}/>

                {cert.certificate}


              </div>




            </motion.div>



          ))}



        </div>





      </div>


    </section>


  );

}