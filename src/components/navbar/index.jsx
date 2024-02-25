import React from "react";
import { IoSunnyOutline, IoMoonOutline, IoMenuOutline } from "react-icons/io5";
import { MdOutlineTranslate } from "react-icons/md";
export default function Navbar() {
    return (
        <nav className="flex items-center  w-full min-h-16     border-b-[1px] border-white/10 p-2">
            <div className="w-1/2 justify-start items-center inline-flex ">
                <div className="px-4 hover:bg-white/20  h-12  gap-2 flex items-center justify-center  transition-all delay-150 ease-in-out rounded-md ">

                    <IoMenuOutline size={20}/>
                </div>
                <div className="px-4 hover:bg-white/20  h-12  gap-2 flex items-center justify-center  transition-all delay-150 ease-in-out rounded-md ">
                    <MdOutlineTranslate size={20} />
                    <span className="font-bold text-base">
                        TR
                    </span>
                </div>
            </div>
            <div className="flex-shrink-0 items-center  inline-flex ">
                <h1 className="font-bold normal-case text-lg sm:text-3xl max-w-[66vw] sm:max-w-full truncate">Karakter Sayacı</h1>
            </div>
            <div className="w-1/2 justify-end inline-flex items-center h-full">
                <button className="px-4 hover:bg-white/20  h-12  gap-2 flex items-center justify-center  transition-all delay-150 ease-in-out rounded-md    ">
                    <IoSunnyOutline size={20}/>
                </button>
                <button className="px-4 hover:bg-white/20  h-12  gap-2  items-center justify-center  transition-all delay-150 ease-in-out rounded-md   hidden ">
                    <IoMoonOutline size={20}/>
                </button>
            </div>
        </nav>
    )
}