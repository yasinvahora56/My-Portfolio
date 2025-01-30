import { Button } from "@material-tailwind/react";
import  resume  from "../Documents/My_resume.pdf";

const Buttons = () => {
  return (
    <>
    <a href={resume} target="_blank"><Button className="rounded-2 cursor-pointer bg-linear-to-t from-sky-500 to-indigo-500 h-10">Resume</Button></a>
    <a href="https://wa.me/917990471946?text=Hii Yasin Vahora" target="_blank"><Button variant="" className="rounded-2 cursor-pointer text-black border-1 border-none bg-neutral-100 border-solid-black hover:bg-linear-to-t from-sky-500 to-indigo-500 hover:text-white hover:border-none ">Contact Me</Button></a>
    </>
  )
}

export default Buttons
