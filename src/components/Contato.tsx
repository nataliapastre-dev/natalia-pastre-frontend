import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";


export default function Contato() {

  return (

    <section
      id="contato"
      className="
      py-24
      bg-[#06030f]
      text-white
      "
    >

      <div
        className="
        max-w-5xl
        mx-auto
        px-6
        "
      >

        <div
          className="
          rounded-3xl
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          p-10
          shadow-2xl
          "
        >

          <h2
            className="
            text-3xl
            md:text-4xl
            font-black
            mb-4
            "
          >

            Vamos conversar?

          </h2>



          <p
            className="
            text-slate-400
            max-w-xl
            mb-8
            leading-7
            "
          >

            Estou aberta a oportunidades em desenvolvimento Front-End,
            projetos colaborativos e novos desafios na área de tecnologia.

          </p>




          <div
            className="
            grid
            md:grid-cols-3
            gap-5
            "
          >


            <a

              href="https://github.com/nataliapastre-dev"

              target="_blank"

              rel="noreferrer"

              className="
              flex
              flex-col
              gap-3
              p-6
              rounded-2xl
              bg-white/5
              border
              border-white/10
              hover:border-purple-400
              hover:bg-purple-500/10
              transition
              "

            >

              <FaGithub

                size={28}

                className="text-purple-400"

              />


              <span
                className="
                font-semibold
                "
              >

                GitHub

              </span>


              <span
                className="
                text-sm
                text-slate-400
                "
              >

                github.com/nataliapastre-dev

              </span>


            </a>





            <a

              href="https://linkedin.com/in/nataliapastre-dev"

              target="_blank"

              rel="noreferrer"

              className="
              flex
              flex-col
              gap-3
              p-6
              rounded-2xl
              bg-white/5
              border
              border-white/10
              hover:border-purple-400
              hover:bg-purple-500/10
              transition
              "

            >

              <FaLinkedin

                size={28}

                className="text-purple-400"

              />


              <span
                className="
                font-semibold
                "
              >

                LinkedIn

              </span>


              <span
                className="
                text-sm
                text-slate-400
                "
              >

                linkedin.com/in/nataliapastre-dev

              </span>


            </a>






            <a

              href="mailto:natalia.pastre@yahoo.com.br"

              className="
              flex
              flex-col
              gap-3
              p-6
              rounded-2xl
              bg-white/5
              border
              border-white/10
              hover:border-purple-400
              hover:bg-purple-500/10
              transition
              "

            >

              <Mail

                size={28}

                className="text-purple-400"

              />


              <span
                className="
                font-semibold
                "
              >

                Email

              </span>


              <span
                className="
                text-sm
                text-slate-400
                "
              >

                natalia.pastre@yahoo.com.br

              </span>


            </a>


          </div>


        </div>


      </div>


    </section>

  );

}