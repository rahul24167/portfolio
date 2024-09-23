import {NavLink, useLocation} from "react-router-dom"

export const Navbar = ()=>{
    const location = useLocation();
    return(
        <>
        <nav className="absolute top-0 right-0 rounded-bl-3xl rounded-tr-3xl bg-[#2b2b2c] flex flex-row justify-center items-center gap-8 px-5 flex-wrap h-16 w-[456px] font-semibold">
            <NavLink 
              to="/projects"
              className={`${location.pathname === "/projects" || location.pathname === "/"
                ? "text-yellow-500":
                "text-white hover:text-[#b3b3b3]" 
              }`}>Projects
            </NavLink>
            <NavLink 
              to="/resume"
              className={({ isActive }) =>
                isActive ? "text-[#ffbb5c]" : "text-white hover:text-[#b3b3b3]"
              }>Resume
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#ffbb5c]" : "text-white hover:text-[#b3b3b3]"
              }>About
            </NavLink>
            <NavLink 
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#ffbb5c]" : "text-white hover:text-[#b3b3b3]"
              }>Contact
            </NavLink>
        </nav>
        </>
    );
}