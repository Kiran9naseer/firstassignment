import Link from "next/link"
export default function Header(){
  return(
  
    <div>
      <nav className="bg-black">
        <div className="max-w-2xl  px-2 sm:px-6 lg:px-6">
          <div className="flex items-center justify-between  h-2">
            
          </div>
          <div className="hidden md:block">
   
            <div className="ml-10 flex align-center pb-4 font-normal text-2xl space-x-7">
           
             <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg ">Home</Link>

             <Link href="/about" className="text-white hover:bg-white hover:text-black rounded-lg ">About</Link>

             <Link href="/apply" className="text-white hover:bg-white hover:text-black rounded-lg p-0 ">Apply</Link>

             <Link href="/result" className="text-white hover:bg-white hover:text-black rounded-lg ">Result</Link>

             <Link href="/jobs" className="text-white hover:bg-white hover:text-black rounded-lg ">Jobs</Link>
            </div>
          </div>
        </div>
      </nav>
      
    </div>
   )
   }
