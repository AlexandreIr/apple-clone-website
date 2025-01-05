import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

function Navbar() {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <nav className="flex w-full screen-max-width">
            <img src={appleImg} alt="apple" width={20} height={20} />
            <div className="flex flex-1 gap-10 justify-center max-sm:hidden">
                {navLists.map((navItem,i)=>(
                    <div key={i} className="text-sm 
                    cursor-pointer text-gray 
                    hover:text-white transition-all">
                        {navItem}
                    </div>
                ))}
            </div>
            <div className="flex gap-8 max-sm:justify-end max-sm:flex-1">
                <img src={searchImg} alt="search" width={20} height={20}/>
                <img src={bagImg} alt="bag" width={20} height={20}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar