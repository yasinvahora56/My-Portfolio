import { Button } from "@material-tailwind/react";
import  resume  from "../Documents/My_resume.pdf";

const Buttons = () => {
  return (
    <>
    <a href={resume} target="_blank"><Button className="rounded-2 cursor-pointer">Resume</Button></a>
    <Button variant="outlined" className="rounded-2 cursor-pointer">Contact Me</Button>
    </>
  )
}

export default Buttons
