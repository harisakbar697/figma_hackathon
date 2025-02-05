import ShoppingCart from "./curtcard";


export default function Shopping_curt(){
    return(
        <div>
                 <div className="bg-purple-100 py-6 w-full ">
         <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-indigo-900">Shopping Curt</h1>
            <div className="text-sm text-black flex gap-3 ">
            <ul>Home</ul>
            <li>Pages</li>
            <li className="text-pink-500">Shopping Curt</li>
            </div>
            </div>
        </div>
        <ShoppingCart/>
        </div>
    )
}