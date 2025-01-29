import { Button } from "@material-tailwind/react";
import  resume  from "../Documents/My_resume.pdf";

const Buttons = () => {
  return (
    <>
    <a href={resume} target="_blank"><Button className="rounded-2 cursor-pointer">Resume</Button></a>
    <a href="https://wa.me/917990471946?text=Hii Yasin Vahora" target="_blank"><Button variant="outlined" className="rounded-2 cursor-pointer">Contact Me</Button></a>
    </>
  )
}

export default Buttons
