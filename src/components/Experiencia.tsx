import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Database
} from "lucide-react";


export default function Experiencia() {


  const experiences = [

    {
      icon:<Code2 size={26}/>,
      title:"Desenvolvedora Front-End",
      period:"2024 - Atual",
      company:"Projetos Freelance",
      description:
      "Desenvolvimento de aplicações web modernas utilizando React, TypeScript, Vite, Tailwind CSS e integração com APIs REST."
    },


    {
      icon:<Database size={26}/>,
      title:"Projetos Full Stack",
      period:"2026",
      company:"Projetos acadêmicos e pessoais",
      description:
      "Criação de aplicações com Java, Spring Boot, Python, SQL e desenvolvimento de soluções orientadas a dados."
    },


    {
      icon:<Briefcase size={26}/>,
      title:"Experiência Corporativa",
      period:"10+ anos",
      company:"Área administrativa e processos",
      description:
      "Experiência em análise de dados, automação de processos, organização operacional e melhoria contínua."
    }

  ];



  return (

    <section
      id="experiencia"
      className="
      py-24
      bg-[#06030f]
      text-white
      "
    >


      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        "
      >


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
            duration:.6
          }}

          viewport={{
            once:true
          }}

          className="
          text-center
          mb-14
          "

        >


          <h2
            className="
            text-4xl
            md:text-5xl
            font-black
            "
          >

            Minha{" "}

            <span
              className="
              bg-gradient-to-r
              from-purple-400
              to-indigo-500
              bg-clip-text
              text-transparent
              "
            >
              Experiência
            </span>


          </h2>



          <p
            className="
            mt-4
            text-slate-400
            max-w-2xl
            mx-auto
            "
          >

            Trajetória profissional unindo tecnologia,
            experiência de negócio e desenvolvimento de software.

          </p>


        </motion.div>





        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          "
        >


          {experiences.map((item,index)=>(


            <motion.div

              key={item.title}

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
                delay:index*.1
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
              p-7
              backdrop-blur-xl
              hover:border-purple-400/50
              hover:-translate-y-2
              transition
              "

            >


              <div
                className="
                w-12
                h-12
                flex
                items-center
                justify-center
                rounded-xl
                bg-purple-500/10
                text-purple-400
                mb-6
                "
              >

                {item.icon}

              </div>



              <h3
                className="
                text-xl
                font-bold
                group-hover:text-purple-400
                transition
                "
              >

                {item.title}

              </h3>



              <p
                className="
                text-purple-400
                text-sm
                mt-2
                "
              >

                {item.company}

              </p>



              <span
                className="
                text-xs
                text-slate-500
                "
              >

                {item.period}

              </span>



              <p
                className="
                mt-4
                text-sm
                leading-7
                text-slate-400
                "
              >

                {item.description}

              </p>



            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );

}