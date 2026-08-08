import { motion } from "framer-motion";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";


export default function About() {


  const technologies = [
    {
      name:"React",
      icon:<FaReact/>
    },
    {
      name:"JavaScript",
      icon:<FaJs/>
    },
    {
      name:"TypeScript",
      icon:<SiTypescript/>
    },
    {
      name:"HTML5",
      icon:<FaHtml5/>
    },
    {
      name:"CSS3",
      icon:<FaCss3Alt/>
    },
    {
      name:"Tailwind CSS",
      icon:<SiTailwindcss/>
    },
    {
      name:"Java",
      icon:<FaJava/>
    },
    {
      name:"Spring Boot",
      icon:<SiSpringboot/>
    },
    {
      name:"Python",
      icon:<FaPython/>
    },
    {
      name:"SQL",
      icon:<SiMysql/>
    },
    {
      name:"Git",
      icon:<FaGitAlt/>
    },
  ];



  const timeline = [

    {
      year:"2024",
      title:"Transição para Tecnologia",
      description:
      "Iniciei minha jornada em Análise e Desenvolvimento de Sistemas, unindo minha experiência profissional com o desenvolvimento de software."
    },


    {
      year:"2025",
      title:"Construção de projetos e evolução técnica",
      description:
      "Desenvolvimento de aplicações utilizando React, Java, Python, SQL e aprofundamento em boas práticas de programação."
    },


    {
      year:"2026",
      title:"Desenvolvimento de soluções completas",
      description:
      "Criação de aplicações web, APIs, dashboards e sistemas integrados aplicando conhecimentos de Front-End e Back-End."
    },


    {
      year:"2026",
      title:"Conclusão da graduação ADS",
      description:
      "Finalização do curso de Análise e Desenvolvimento de Sistemas consolidando minha formação em tecnologia."
    }

  ];




  return (

    <section

      id="about"

      className="
      relative
      overflow-hidden
      min-h-screen
      bg-[#080A12]
      text-white
      py-24
      px-6
      "

    >



      <div

        className="
        absolute
        top-20
        left-0
        w-80
        h-80
        bg-purple-600/20
        blur-[130px]
        rounded-full
        "

      />



      <div

        className="
        absolute
        bottom-20
        right-0
        w-96
        h-96
        bg-indigo-600/10
        blur-[140px]
        rounded-full
        "

      />




      <div

        className="
        relative
        max-w-7xl
        mx-auto
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
          mb-16
          "

        >



          <h2

            className="
            text-4xl
            md:text-5xl
            font-black
            "

          >

            Sobre{" "}


            <span

              className="
              text-transparent
              bg-gradient-to-r
              from-purple-400
              to-indigo-500
              bg-clip-text
              "

            >

              Mim

            </span>


          </h2>




          <p

            className="
            mt-5
            max-w-2xl
            mx-auto
            text-slate-400
            text-lg
            "

          >

            Conheça minha trajetória, evolução profissional e a conexão
            entre experiência de negócio e desenvolvimento de software.

          </p>




        </motion.div>
        


        <div

          className="
          grid
          lg:grid-cols-2
          gap-14
          "

        >




          {/* TEXTO PRINCIPAL */}


          <motion.div

            initial={{
              opacity:0,
              x:-40
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:.7
            }}

            viewport={{
              once:true
            }}

          >




            <div

              className="
              rounded-3xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              p-8
              hover:border-purple-400/30
              transition
              "

            >





              <h3

                className="
                text-3xl
                font-black
                mb-6
                "

              >

                Da experiência de negócio ao desenvolvimento de software

              </h3>






              <p

                className="
                text-slate-400
                leading-8
                mb-5
                "

              >

                Sou Natália Baptista Pastre, estudante de Análise e Desenvolvimento
                de Sistemas e desenvolvedora Front-End focada na criação de
                aplicações modernas, responsivas e centradas na experiência do usuário.

              </p>






              <p

                className="
                text-slate-400
                leading-8
                mb-5
                "

              >

                Minha trajetória de mais de 10 anos no ambiente corporativo
                desenvolveu uma visão analítica, organização de processos,
                facilidade para entender regras de negócio e transformar
                necessidades reais em soluções eficientes.

              </p>







              <p

                className="
                text-slate-400
                leading-8
                "

              >

                Atualmente aplico essa experiência no desenvolvimento de software,
                utilizando tecnologias como{" "}


                <strong className="text-white">

                  React, TypeScript, JavaScript e APIs REST

                </strong>


                , além de conhecimentos em{" "}


                <strong className="text-white">

                  Java, Python, SQL e Spring Boot

                </strong>


                para construir soluções completas.

              </p>




            </div>





          </motion.div>









          {/* TIMELINE */}


          <motion.div

            initial={{
              opacity:0,
              x:40
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:.7
            }}

            viewport={{
              once:true
            }}

          >




            <div

              className="
              relative
              border-l
              border-purple-400/30
              pl-8
              space-y-8
              "

            >





              {
                timeline.map((item,index)=>(


                  <div

                    key={index}

                    className="
                    relative
                    "

                  >




                    <span

                      className="
                      absolute
                      -left-[42px]
                      top-6
                      w-5
                      h-5
                      rounded-full
                      bg-gradient-to-r
                      from-purple-500
                      to-indigo-500
                      shadow-lg
                      shadow-purple-500/40
                      "

                    />







                    <div

                      className="
                      rounded-2xl
                      bg-white/5
                      border
                      border-white/10
                      p-6
                      backdrop-blur-xl
                      hover:border-purple-400/40
                      hover:-translate-y-1
                      transition
                      "

                    >




                      <span

                        className="
                        text-purple-400
                        text-sm
                        font-bold
                        "

                      >

                        {item.year}

                      </span>







                      <h4

                        className="
                        text-xl
                        font-bold
                        mt-2
                        "

                      >

                        {item.title}

                      </h4>







                      <p

                        className="
                        mt-3
                        text-slate-400
                        leading-7
                        "

                      >

                        {item.description}

                      </p>





                    </div>





                  </div>



                ))
              }





            </div>






          </motion.div>






        </div>
        




        {/* TECNOLOGIAS */}



        <div

          className="
          mt-24
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
            mb-12
            "

          >





            <h3

              className="
              text-3xl
              md:text-4xl
              font-black
              "

            >

              Tecnologias{" "}



              <span

                className="
                text-transparent
                bg-gradient-to-r
                from-purple-400
                to-indigo-500
                bg-clip-text
                "

              >

                Principais

              </span>



            </h3>






            <p

              className="
              mt-4
              text-slate-400
              max-w-2xl
              mx-auto
              "

            >

              Stack utilizada nos estudos, projetos pessoais e desenvolvimento
              de aplicações web modernas.

            </p>





          </motion.div>







          <div

            className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-6
            gap-5
            "

          >






            {
              technologies.map((tech,index)=>(



                <motion.div


                  key={index}



                  initial={{

                    opacity:0,

                    y:20

                  }}



                  whileInView={{

                    opacity:1,

                    y:0

                  }}



                  transition={{

                    duration:.4,

                    delay:index * .05

                  }}



                  viewport={{

                    once:true

                  }}






                  whileHover={{

                    scale:1.05,

                    y:-8

                  }}




                  className="
                  group
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  p-5
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-3
                  backdrop-blur-xl
                  hover:border-purple-400/50
                  hover:bg-purple-500/10
                  transition
                  "

                >






                  <div

                    className="
                    text-4xl
                    text-purple-400
                    group-hover:text-indigo-400
                    transition
                    "

                  >

                    {tech.icon}



                  </div>






                  <span

                    className="
                    text-sm
                    text-slate-300
                    text-center
                    "

                  >

                    {tech.name}



                  </span>







                </motion.div>





              ))
            }






          </div>






        </div>







      </div>





    </section>





  );

}