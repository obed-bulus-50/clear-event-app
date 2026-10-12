import { Children } from "react"

export default function GreetingCard({name,message, }){
    return(
    
      <div className="flex flex-col justify-center items-center h-screen ">
        <h1 className=" flex gap-3 text-4xl font-bold"> welcome to my app {name}</h1>
        <p className="text-lg">{message}</p>
        <Button></Button>
    
      </div> 
    )
}

const Button = ({onclick, children, type="button"})=>{
  return(
    <div className="mt-10 ">
      <p className="font-bold ">my tech form</p>
    <form action="" className="flex flex-col border-1 rounded w-100 ">
      
      <input type="text"
      name="name"
      placeholder="name"
      required className="border-1 " />
      
      <input type="password"
      name="password"
      placeholder="password"
      required  className="border-1"/>

      <input type="text"
      name="message"
      placeholder="messaage" className="border-1 " />

      <div className="flex flex-row gap-5">
      <button type="sumit"
      onclick={onclick} className="hover:text-blue-300">{children}sumit</button>
      <button type="reset"
      onclick={onclick} className="hover:text-blue-300 active:bg-red-300  runded">reset</button>
      </div>
    </form>
    </div>
  )

}