import * as React from "react"

const  Footer=()=> {
    return (
            <div className="w-full bg-custom-blue-prussian text-white">
                <div className="flex justify-center items-center xl:px-40 py-10 lg:px-20 md:px-10 sm:px-5 px-10 ">
          
                    <div className="flex item-center opacity-60 pt-2">
                    © {new Date().getFullYear()}, Build in  
                    {``}
                    <a className="text-red-400" href="https://www.gatsbyjs.com"  target="blank" rel="noreferrer "> {`\u00A0`} Gatsby</a>
                    {`\u00A0`} by  {`\u00A0`} <a className="text-red-400" href="https://www.linkedin.com/in/juan-pablo-sanchez-frasser-3a4099232/?locale=en_US"  target="blank" rel="noreferrer ">@jpfrazzer</a>
                    
                    </div>
                </div>
            </div>
    )
}

export default Footer
