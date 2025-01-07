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
                        <a href="https://api.whatsapp.com/send?phone=5511987130883" target="_blank">
                            {navItem}
                        </a>
                    </div>
                ))}
            </div>
            <div className="flex gap-8 max-sm:justify-end max-sm:flex-1">
                <a href="https://api.whatsapp.com/send?phone=5511987130883">
                    <img src={searchImg} alt="search" width={20} height={20}/>
                    
                </a>
                <a href="https://api.whatsapp.com/send?phone=5511987130883">
                    <img src={bagImg} alt="bag" width={20} height={20}/>
                </a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar