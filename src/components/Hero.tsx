
import {
  ArrowRight,
  Download,
  Code2,
  Briefcase,
  GraduationCap,
  MapPin,
} from "lucide-react";

import { motion } from "framer-motion";

import fotoPerfil from "../assets/imagens/foto-perfil.jpeg";

export default function Hero() {
  const technologies = [
    "React",
    "TypeScript",
    "JavaScript",
    "Vite",
    "Tailwind CSS",
    "Java",
    "Spring Boot",
    "Python",
    "SQL",
    "APIs REST",
  ];

  const stats = [
    {
      number: "10+",
      text: "Anos experiência",
    },
    {
      number: "20+",
      text: "Projetos",
    },
    {
      number: "2026",
      text: "Conclusão ADS",
    },
  ];

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#06030f]
        text-white
        pt-28
        pb-24
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,#9333ea40,transparent_35%),radial-gradient(circle_at_bottom_right,#6d28d940,transparent_40%)]
        "
      />

      <div
        className="
          absolute
          w-96
          h-96
          bg-purple-600/20
          blur-[120px]
          rounded-full
          top-20
          right-20
        "
      />

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="
              uppercase
              tracking-[5px]
              text-sm
              text-purple-400
              font-semibold
              mb-6
            "
          >
            Desenvolvedora Front-End
          </p>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-black
              leading-tight
            "
          >
            Natália

            <span
              className="
                block
                bg-gradient-to-r
                from-purple-400
                via-violet-400
                to-indigo-500
                bg-clip-text
                text-transparent
              "
            >
              Pastre
            </span>
          </h1>

          <h2
            className="
              mt-5
              text-2xl
              md:text-3xl
              font-bold
              text-slate-200
            "
          >
            Desenvolvendo soluções digitais
            <br />
            com tecnologia e visão de negócio
          </h2>

          <p
            className="
              mt-6
              max-w-xl
              text-lg
              leading-8
              text-slate-400
            "
          >
            Sou Desenvolvedora Front-End com uma trajetória de mais de 10 anos
            em ambientes corporativos, atuando em análise de dados, otimização
            de processos e automação.
          </p>

          <p
            className="
              mt-4
              max-w-xl
              text-lg
              leading-8
              text-slate-400
            "
          >
            Essa bagagem fortaleceu minha visão analítica e capacidade
            estratégica de resolver problemas, habilidades que hoje aplico na
            criação de soluções digitais. Desenvolvo aplicações web modernas e
            intuitivas utilizando React, TypeScript, Vite e APIs REST no
            Front-End, além de Java e Python para suporte em lógica, dados e
            back-end — sempre unindo código limpo, boas práticas e foco no
            valor para o negócio.
          </p>

          <div
            className="
              flex
              flex-wrap
              gap-3
              mt-8
            "
          >
            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-xl
                  bg-white/5
                  border
                  border-white/10
                  text-sm
                  text-slate-300
                  backdrop-blur
                  hover:border-purple-400/70
                  hover:text-white
                  transition
                "
              >
                <Code2 size={15} className="text-purple-400" />
                {tech}
              </span>
            ))}
          </div>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-10
            "
          >
            <a
              href="#projects"
              className="
                flex
                justify-center
                items-center
                gap-2
                px-8
                py-4
                rounded-xl
                bg-gradient-to-r
                from-purple-600
                to-indigo-600
                font-bold
                shadow-xl
                shadow-purple-600/30
                hover:scale-105
                transition
              "
            >
              Ver Projetos

              <ArrowRight size={20} />
            </a>

            <a
              href={`${import.meta.env.BASE_URL}curriculo-natalia-pastre.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                justify-center
                items-center
                gap-2
                px-8
                py-4
                rounded-xl
                border
                border-white/20
                bg-white/5
                backdrop-blur
                font-bold
                hover:bg-white/10
                transition
              "
            >
              <Download size={20} />

              Currículo PDF
            </a>
          </div>

          <div
            className="
              grid
              grid-cols-3
              gap-4
              mt-14
            "
          >
            {stats.map((item) => (
              <div
                key={item.text}
                className="
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  p-5
                  text-center
                  backdrop-blur-xl
                  hover:border-purple-400/40
                  transition
                "
              >
                <h3
                  className="
                    text-3xl
                    font-black
                    text-purple-400
                  "
                >
                  {item.number}
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    text-slate-400
                  "
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            flex
            flex-col
            items-center
            gap-10
          "
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative"
          >
            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-purple-500/30
                blur-3xl
              "
            />

            <div
              className="
                relative
                p-2
                rounded-full
                bg-gradient-to-r
                from-purple-400
                via-violet-500
                to-indigo-600
              "
            >
              <img
                src={fotoPerfil}
                alt="Natália Baptista Pastre"
                className="
                  w-72
                  h-72
                  md:w-96
                  md:h-96
                  rounded-full
                  object-cover
                  border-[10px]
                  border-[#06030f]
                "
              />
            </div>
          </motion.div>

          <div
            className="
              w-full
              max-w-md
              rounded-3xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              p-8
              shadow-2xl
              hover:border-purple-400/30
              transition
            "
          >
            <h3
              className="
                text-2xl
                font-bold
                mb-6
              "
            >
              Transformando experiência em tecnologia
            </h3>

            <div className="space-y-6">
              <Info
                icon={<Briefcase />}
                title="Experiência"
                text="10+ anos em processos corporativos, análise de dados, automação e melhoria contínua."
              />

              <Info
                icon={<GraduationCap />}
                title="Formação"
                text="Análise e Desenvolvimento de Sistemas (ADS) • conclusão em dezembro de 2026."
              />

              <Info
                icon={<MapPin />}
                title="Atuação"
                text="Trabalho remoto para todo Brasil ou presencial em Araraquara-SP."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Info({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        flex
        gap-4
        items-start
      "
    >
      <div
        className="
          text-purple-400
          mt-1
        "
      >
        {icon}
      </div>

      <div>
        <p
          className="
            font-semibold
            text-white
          "
        >
          {title}
        </p>

        <p
          className="
            text-sm
            text-slate-400
            leading-relaxed
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}

