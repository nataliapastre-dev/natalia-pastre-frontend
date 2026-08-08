import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const links = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#about" },
  { name: "Experiência", href: "#experiencia" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Projetos", href: "#projects" },
  { name: "Certificações", href: "#certificacoes" },
];


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);


  function closeMenu(){

    setIsOpen(false);

  }


  return (

    <header

      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-[#050816]/70
      backdrop-blur-2xl
      border-b
      border-white/10
      shadow-lg
      shadow-purple-900/10
      "

    >


      <nav

        className="
        max-w-7xl
        mx-auto
        h-20
        px-6
        flex
        items-center
        justify-between
        "

      >



        <a

          href="#home"

          className="
          relative
          text-3xl
          font-black
          tracking-tight
          "

        >

          <span className="text-white">

            Natália

          </span>


          <span

            className="
            ml-2
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-purple-400
            via-fuchsia-400
            to-indigo-500
            "

          >

            Pastre

          </span>


          <span

            className="
            absolute
            -bottom-2
            left-0
            w-12
            h-[3px]
            rounded-full
            bg-gradient-to-r
            from-purple-400
            to-indigo-500
            "

          />


        </a>





        <ul

          className="
          hidden
          md:flex
          items-center
          gap-8
          "

        >


          {links.map((link)=>(


            <li key={link.name}>


              <a

                href={link.href}

                className="
                group
                relative
                text-sm
                font-medium
                text-slate-300
                hover:text-white
                transition
                "

              >

                {link.name}



                <span

                  className="
                  absolute
                  left-0
                  -bottom-2
                  w-0
                  h-[2px]
                  rounded-full
                  bg-gradient-to-r
                  from-purple-400
                  to-indigo-500
                  transition-all
                  duration-300
                  group-hover:w-full
                  "

                />


              </a>


            </li>


          ))}




          <li>


            <a

              href="#contato"

              className="
              px-7
              py-3
              rounded-full
              bg-gradient-to-r
              from-purple-600
              to-indigo-600
              text-white
              font-semibold
              text-sm
              shadow-lg
              shadow-purple-500/30
              hover:scale-105
              hover:shadow-purple-500/50
              transition
              "

            >

              Contato

            </a>


          </li>


        </ul>





        <button

          onClick={()=>setIsOpen(!isOpen)}

          className="
          md:hidden
          text-white
          hover:text-purple-400
          transition
          "

        >

          {

            isOpen ?

            <X size={32}/>

            :

            <Menu size={32}/>

          }


        </button>


      </nav>







      <AnimatePresence>


        {

          isOpen && (


            <motion.div


              initial={{
                opacity:0,
                height:0
              }}


              animate={{
                opacity:1,
                height:"auto"
              }}


              exit={{
                opacity:0,
                height:0
              }}


              className="
              md:hidden
              bg-[#050816]/95
              backdrop-blur-xl
              border-t
              border-white/10
              "

            >



              <ul

                className="
                flex
                flex-col
                gap-2
                px-6
                py-6
                "

              >


                {links.map((link)=>(


                  <li key={link.name}>


                    <a

                      href={link.href}

                      onClick={closeMenu}

                      className="
                      block
                      px-5
                      py-3
                      rounded-xl
                      text-slate-300
                      hover:bg-purple-500/10
                      hover:text-purple-300
                      transition
                      "

                    >

                      {link.name}


                    </a>


                  </li>


                ))}




                <li className="mt-3">


                  <a

                    href="#contato"

                    onClick={closeMenu}

                    className="
                    block
                    text-center
                    rounded-xl
                    px-5
                    py-3
                    font-bold
                    text-white
                    bg-gradient-to-r
                    from-purple-600
                    to-indigo-600
                    "

                  >

                    Contato

                  </a>


                </li>


              </ul>



            </motion.div>


          )


        }


      </AnimatePresence>



    </header>


  );

}