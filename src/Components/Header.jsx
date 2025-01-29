import { FaRegEdit } from "react-icons/fa";
import Buttons from "./Button";
import profile from "../images/profile.png"
import SocialLinks from "./SocialLinks";
import CurruntJob from "./CurruntJob";
import Projects from "./Projects";
import Skills from "./Skills";
const Header = () => {
  return (
    <>
    <div className="relative w-full h-[300px]">
      

      <div className="absolute inset-0 bg-cover bg-center justify-center item-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?t=st=1738130082~exp=1738133682~hmac=f4de31c44e93fdafa3e5b2b8e1359441db756fae20f05aec8a5383d2b4a38e6b&w=900')" }}>
     
      <h1 className="absolute top-20 right-120 text-8xl text-bold text-white">MY PORTFOLIO</h1>
    
      
      </div>

      


      {/* <button className="absolute right-5 top-5 p-2 bg-linear-65 from-purple-500 to-pink-500 rounded-lg outline-black">
  <FaRegEdit className="text-white text-2xl cursor-pointer" />
</button> */}

      <div className="container">

      <div className="relative top-10 left-20 flex items-center justify-between w-full h-full px-10">
        
        <div className="flex flex-col items-center gap-4 relative top-30">
          <div className='flex flex-col items-center'>
          <img 
            src={profile} 
            alt="Profile Image" 
            className="w-60 h-60 rounded-full border-7 border-white"
          />
          <div className="items-left relative left-0 flex flex-col gap-1">
          <h1 className="font-bold text-3xl mt-2">Yasin Vahora</h1>
          <h2 className="font-semibold text-1xl text-gray-600">MERN Stack Developer</h2>
          <h3 className="font-medium text-1xl text-gray-600">Anand, Gujarat, India</h3>
          </div>
         
          </div>
          <div className="relative left-5 flex gap-2">
        <Buttons />
      </div>
        </div>
      </div>
      </div>

      
      </div>
      <div className="justify-right absolute top-60 right-15">
      <SocialLinks/>
      </div>
      <div className="justify-right absolute top-80 right-15">
        <CurruntJob/>
      </div>
      <div className="justify-left absolute top-150 left-35">
        <Projects/>
      </div>
      <div className="justify-left absolute top-120 right-15">
        <Skills/>
      </div>
      </>
      
    
  );
};

export default Header;
