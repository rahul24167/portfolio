import { Header } from "./Header"
import{ ProjectCard } from "./ProjectCard"
export const MainContent= ()=>{
    return <div className=" bg-eerie-black rounded-3xl relative w-[891px] min-h-[769px] h-fit m-0 border-[1px] border-solid border-[#3d3d3d]">
        <div className="absolute top-0 right-0 rounded-bl-3xl rounded-tr-3xl bg-[#2b2b2c] flex flex-row justify-center items-center gap-8 px-5 flex-wrap h-16 w-[456px]">
            <div>
                Projects
            </div>
            <div>
                Resume
            </div>
            <div>
                About Me
            </div>
            <div>
                Contact
            </div>
        </div>

        <div className=" pt-8 pl-7">
            <Header title="Projects"></Header>
            <ProjectCard></ProjectCard>
        </div>
    </div>
}