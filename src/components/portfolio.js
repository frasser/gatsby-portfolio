import * as React from "react"
import Cards from "./cards";

const Portfolio =(/*{data}*/)=>{








    return(
        <>
        <div className=" h-auto w-full my-4">

            <div className="w-auto  flex justify-center  mx-8 border-b-2 border-solid border-gray-300">
                <div className="bg-green-50  font-medium rounded-l-full w-24 "><div className="m-1 text-center  text-green-500 p-4 rounded-full hover:bg-green-400 hover:text-white active:bg-green-600 active:text-white md:cursor-pointer ">All</div></div>
                <div className="bg-green-50  font-medium  "><div className="m-1 text-center text-green-500 p-4 rounded-full hover:bg-green-400 hover:text-white  active:bg-green-600 active:text-white md:cursor-pointer ">Android</div></div>
                <div className="bg-green-50  font-medium rounded-r-full w-24"><div className="m-1 text-center   text-green-500 p-4 rounded-full hover:bg-green-400 hover:text-white active:bg-green-600 active:text-white md:cursor-pointer">Web</div></div>
            </div>

            <Cards />
            

        </div>
        </>
    )
}

export default Portfolio