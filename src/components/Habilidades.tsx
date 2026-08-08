import { motion } from "framer-motion";

import {
  Code2,
  Database,
  GitBranch,
  Layout,
  Server,
  Wrench,
  Sparkles,
} from "lucide-react";


export default function Habilidades() {


  const skills = [

    {
      title: "Front-End Development",

      description:
        "Criação de interfaces modernas, responsivas e experiências digitais com foco em usabilidade.",

      icon: <Layout size={32} />,

      highlight: true,

      items: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Vite",
        "Tailwind CSS",
        "React Router",
       
      ],
    },


    {
      title: "Back-End & APIs",

      description:
        "Desenvolvimento de serviços, APIs REST e integração entre aplicações.",

      icon: <Server size={32} />,

      items: [
        "Java",
        "Spring Boot",
        "Python",
        "Node.js",
        
        "APIs REST",
        
      ],
    },


    {
      title: "Banco de Dados",

      description:
        "Estruturação e manipulação de dados para aplicações web.",

      icon: <Database size={32} />,

      items: [
        "SQL",
        "SQLite",
        "Modelagem de Dados",
        "Consultas SQL",
        "Integração com APIs",
      ],
    },


    {
      title: "Versionamento & Deploy",

      description:
        "Organização de código, colaboração e publicação de aplicações.",

      icon: <GitBranch size={32} />,

      items: [
        "Git",
        "GitHub",
        "GitHub Pages",
        "Deploy Vite",
        "Controle de versões",
      ],
    },


    {
      title: "Fundamentos de Desenvolvimento",

      description:
        "Base técnica para criação de soluções eficientes e escaláveis.",

      icon: <Code2 size={32} />,

      items: [
        "Lógica de Programação",
        "Programação Orientada a Objetos",
        "Estruturas de Dados",
        "Clean Code",
        "Boas práticas",
      ],
    },


    {
      title: "Ferramentas & Workflow",

      description:
        "Ferramentas utilizadas no desenvolvimento e gerenciamento de projetos.",

      icon: <Wrench size={32} />,

      items: [
        "VS Code",
        "Postman",
        "Axios",
        "Metodologias Ágeis",
      ],
    },

  ];



  return (
        <section
      id="habilidades"
      className="
      relative
      py-28
      bg-[#050816]
      text-white
      overflow-hidden
      "
    >


      <div
        className="
        absolute
        top-20
        left-20
        w-72
        h-72
        bg-purple-600/20
        blur-[120px]
        rounded-full
        "
      />


      <div
        className="
        absolute
        bottom-10
        right-20
        w-80
        h-80
        bg-indigo-600/20
        blur-[120px]
        rounded-full
        "
      />



      <div
        className="
        relative
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


          <div
            className="
            flex
            justify-center
            mb-5
            "
          >

            <div
              className="
              p-4
              rounded-2xl
              bg-purple-500/10
              border
              border-purple-400/20
              "
            >

              <Sparkles
                size={38}
                className="text-purple-400"
              />

            </div>

          </div>




          <h2
            className="
            text-4xl
            md:text-5xl
            font-black
            "
          >

            Habilidades{" "}

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

              Técnicas

            </span>


          </h2>




          <p
            className="
            mt-5
            max-w-2xl
            mx-auto
            text-slate-400
            text-lg
            leading-8
            "
          >

            Tecnologias e conhecimentos aplicados no desenvolvimento
            de aplicações web modernas, unindo experiência profissional,
            lógica de programação e boas práticas de engenharia de software.

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



          {skills.map((skill,index)=>(


            <motion.div

              key={skill.title}


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


              className={`
              group
              relative
              rounded-3xl
              p-7
              backdrop-blur-xl
              border
              transition-all
              duration-300
              hover:-translate-y-2
              ${
                skill.highlight
                ?
                "bg-purple-500/10 border-purple-400/40 shadow-lg shadow-purple-500/10"
                :
                "bg-white/5 border-white/10 hover:border-purple-400/40"
              }
              `}


            >


              <div
                className="
                absolute
                inset-0
                rounded-3xl
                bg-gradient-to-br
                from-purple-500/10
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition
                "
              />



              <div
                className="
                relative
                "
              >
                <div
                  className="
                  flex
                  items-center
                  gap-4
                  mb-5
                  "
                >


                  <div
                    className="
                    p-3
                    rounded-2xl
                    bg-purple-500/10
                    text-purple-400
                    border
                    border-purple-400/20
                    "
                  >

                    {skill.icon}

                  </div>



                  <h3
                    className="
                    text-xl
                    font-bold
                    text-white
                    "
                  >

                    {skill.title}

                  </h3>


                </div>





                <p
                  className="
                  text-sm
                  text-slate-400
                  leading-7
                  mb-6
                  "
                >

                  {skill.description}

                </p>





                <div
                  className="
                  flex
                  flex-wrap
                  gap-2
                  "
                >


                  {skill.items.map((item)=>(


                    <span

                      key={item}

                      className="
                      px-3
                      py-2
                      rounded-xl
                      bg-white/5
                      border
                      border-white/10
                      text-sm
                      text-slate-300
                      hover:text-white
                      hover:border-purple-400/40
                      transition
                      "

                    >

                      {item}

                    </span>


                  ))}


                </div>



              </div>



            </motion.div>


          ))}



        </div>



      </div>



    </section>


  );

}