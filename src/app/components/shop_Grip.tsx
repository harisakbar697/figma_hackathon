import Shop_GridCard from "./shop_GridCard";
import Toolbar from "./toolbar";

export default function Shop_default(){
    return(
        <div>
         <div className="bg-purple-100 py-6 w-full ">
         <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-indigo-900">Shop Grid Default</h1>
            <div className="text-sm text-black flex gap-3 ">
            <ul>Home</ul>
            <li>Pages</li>
            <li className="text-pink-500"> Shop Grid Default </li>
            </div>
            </div>
        </div>
        <Toolbar/>
<Shop_GridCard/>

         </div>
    )

}