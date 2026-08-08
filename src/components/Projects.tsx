import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import fleetImg from "../assets/imagens/fleet.png";
import sigeconImg from "../assets/imagens/sigecon.png";
import lcnImg from "../assets/imagens/lcn.png";
import planejaImg from "../assets/imagens/planeja-ai.png";
import educadorImg from "../assets/imagens/educador-financeiro.png";
import movieImg from "../assets/imagens/movie-finder.png";
import burguerImg from "../assets/imagens/burguer.png";


interface Project {
  title:string;
  category:string;
  description:string;
  technologies:string[];
  image:string;
  demo:string;
  github:string;
}


const projects:Project[]=[

{
title:"Fleet Management System",
category:"Full Stack | Projeto Principal",
description:
"Sistema completo de gerenciamento de frota com dashboard, veículos, manutenção, ordens de serviço, API e banco de dados.",
technologies:["React","Fastify","SQLite","Dashboard"],
image:fleetImg,
demo:"https://nataliapastre-dev.github.io/fleet-management-system/",
github:"https://github.com/nataliapastre-dev"
},


{
title:"SIGECON",
category:"Front-End | Gestão Empresarial",
description:
"Sistema inteligente de gestão de contratos com dashboards, gráficos, fornecedores e indicadores estratégicos.",
technologies:["React","JavaScript","Recharts","React Router"],
image:sigeconImg,
demo:"https://nataliapastre-dev.github.io/SIGICON-Sistema-de-Gest-o-de-Contratos/",
github:"https://github.com/nataliapastre-dev"
},


{
title:"LCN Oxigênio",
category:"Projeto Real | Cliente",
description:
"Site institucional desenvolvido para empresa real com identidade visual personalizada e layout responsivo.",
technologies:["HTML5","CSS3","JavaScript","Swiper.js"],
image:lcnImg,
demo:"https://nataliapastre-dev.github.io/Site-Institucional-LCN-Oxig-nio/",
github:"https://github.com/nataliapastre-dev"
},


{
title:"Planeja AI",
category:"React Application",
description:
"Aplicação financeira moderna para planejamento e organização de gastos utilizando React.",
technologies:["React","Vite","Tailwind","React Router"],
image:planejaImg,
demo:"https://nataliapastre-dev.github.io/planeja-ai/",
github:"https://github.com/nataliapastre-dev"
},


{
title:"Educador Financeiro Inteligente",
category:"React Application | Finanças",
description:
"Aplicação para controle financeiro, organização de despesas e acompanhamento de gastos.",
technologies:["React","Vite","JavaScript","CSS3"],
image:educadorImg,
demo:"https://nataliapastre-dev.github.io/educador-financeiro-inteligente/",
github:"https://github.com/nataliapastre-dev"
},


{
title:"Movie Finder",
category:"React + API",
description:
"Aplicação de busca de filmes utilizando API externa com informações de trailers, elenco e plataformas.",
technologies:["React","Axios","TMDB API"],
image:movieImg,
demo:"https://nataliapastre-dev.github.io/movie-finder/",
github:"https://github.com/nataliapastre-dev"
},


{
title:"Burguer House Website",
category:"Front-End",
description:
"Landing page moderna desenvolvida com foco em design, responsividade e experiência do usuário.",
technologies:["HTML5","CSS3","JavaScript"],
image:burguerImg,
demo:"https://nataliapastre-dev.github.io/burguerhouse-website/",
github:"https://github.com/nataliapastre-dev"
}

];



export default function Projects(){

return(

<section
id="projects"
className="
relative
py-28
px-6
bg-[#060816]
text-white
overflow-hidden
"
>


<div className="max-w-7xl mx-auto">


<motion.h2

initial={{opacity:0,y:30}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.6}}

className="
text-4xl
md:text-5xl
font-black
text-center
mb-20
bg-gradient-to-r
from-cyan-400
via-purple-400
to-pink-400
bg-clip-text
text-transparent
"

>

Projetos em Destaque

</motion.h2>



<div
className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-10
"
>


{projects.map((project,index)=>(


<motion.article

key={project.title}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.5,
delay:index*0.1
}}

whileHover={{
y:-12
}}

className="
group
rounded-3xl
overflow-hidden
bg-[#111827]
border
border-white/10
hover:border-cyan-400/50
shadow-2xl
transition-all
"

>



{/* AREA DA IMAGEM */}

<div
className="
relative
h-64
p-6
bg-gradient-to-br
from-[#0f172a]
to-[#020617]
flex
items-center
justify-center
overflow-hidden
"
>


<div
className="
absolute
inset-0
bg-cyan-400/5
opacity-0
group-hover:opacity-100
transition
"
/>



<img

src={project.image}

alt={project.title}

className="
relative
w-full
h-full
object-contain
rounded-xl
group-hover:scale-105
transition
duration-500
"

/>


</div>





<div className="p-7">


<span
className="
text-cyan-400
text-xs
font-bold
uppercase
tracking-widest
"
>

{project.category}

</span>




<h3
className="
text-2xl
font-bold
mt-3
group-hover:text-cyan-300
transition
"
>

{project.title}

</h3>



<p
className="
text-gray-400
mt-4
leading-relaxed
text-sm
"
>

{project.description}

</p>




<div
className="
flex
flex-wrap
gap-2
mt-6
"
>

{project.technologies.map((tech)=>(

<span

key={tech}

className="
px-3
py-1
rounded-full
text-xs
bg-purple-500/10
border
border-purple-400/20
text-purple-300
"

>

{tech}

</span>

))}


</div>




<div
className="
flex
gap-3
mt-7
"
>


<a

href={project.demo}

target="_blank"

rel="noopener noreferrer"

className="
flex
items-center
gap-2
px-5
py-2.5
rounded-xl
bg-gradient-to-r
from-cyan-400
to-blue-500
text-black
font-bold
text-sm
hover:scale-105
transition
"

>

Demo

<ExternalLink size={15}/>

</a>




<a

href={project.github}

target="_blank"

rel="noopener noreferrer"

className="
flex
items-center
gap-2
px-5
py-2.5
rounded-xl
border
border-white/20
text-sm
hover:border-purple-400
transition
"

>

GitHub

<FaGithub size={16}/>

</a>



</div>


</div>


</motion.article>


))}


</div>


</div>


</section>

)

}