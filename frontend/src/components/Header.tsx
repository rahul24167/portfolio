interface HeaderProps {
    title: string;
  }
  
export  const Header=({title}: HeaderProps)=>{
    return (
        <div>
        <div className=" mb-5 pb-5 font-bold text-[#fafafa] text-3xl">
            {title}

        </div>
        <div className="h-[5px] w-10 bg-yellow-gradient bottom-0 left-0 rounded"></div>
        </div>
        
    );
}