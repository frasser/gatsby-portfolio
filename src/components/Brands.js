import * as React from "react"
import javascript from '../images/javascript.svg'
import androidLogo from '../images/android.svg'
import gatsby from '../images/gatsby.svg'
import flutter from '../images/flutter.svg'
import dart from '../images/dart.svg'
import graphql from '../images/graphql.svg'
import kotlin from '../images/kotlin.svg'
import mongo from '../images/mongo.svg'
import react from '../images/react.svg'
import nativeReact from '../images/native react.png'
const Brands = ()=>{
    return (
        <div className="flex items-center p-10 justify-around  ">
            
            <button className="px-2 opacity-75 hover:opacity-100 focus:opacity-100"><img className="w-12 h-12" src={javascript} alt="javascript" title='JavaScript' style={{ maxHeight: `60px` }}/></button>
            <button className="px-2 opacity-75 hover:opacity-100 focus:opacity-100"> <img className="w-12 h-12" src={dart} alt="dart" title='Dart' style={{ maxHeight: `60px` }}/></button>
            <button className="px-2 opacity-75 hover:opacity-100 focus:opacity-100"><img className="w-12 h-12" src={kotlin} alt="kotlin" title='Kotlin' style={{ maxHeight: `60px` }}/></button>
            <button className="px-2 opacity-75 hover:opacity-100 focus:opacity-100"> <img className="w-12 h-12" src={androidLogo} alt="android" title='Android' style={{ maxHeight: `60px` }} /></button>
            <button className="px-2 opacity-75 hover:opacity-100 focus:opacity-100"><img className="w-12 h-12" src={react} alt="react js" title='React native' style={{ maxHeight: `60px` }}/></button>
           
            <button className="px-2 opacity-75 hover:opacity-100 focus:opacity-100"><img className="w-12 h-12" src= {flutter} alt="flutter" title='Flutter' style={{ maxHeight: `60px` }} /></button>
            <button className="px-2 opacity-75 hover:opacity-100 focus:opacity-100"><img className="w-12 h-12" src={gatsby} alt="gatsby js" title='Gatsby js' style={{ maxHeight: `60px` }} /></button>

            <button className="px-2 opacity-75 hover:opacity-100 focus:opacity-100"><img className="w-12 h-12" src={graphql} alt="graphql" title='Graphql' style={{ maxHeight: `60px` }}/></button>
            <button className="px-2 opacity-75 hover:opacity-100 focus:opacity-100"><img className="w-12 h-12" src={mongo} alt="mongo db" title='Mongo DB' style={{ maxHeight: `60px` }}/></button>
        </div>
    )
}
export default Brands