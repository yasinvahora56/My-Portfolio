import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
  import image from "../images/image.png"
const SocialLinks = () => {
  return (
    <div className="flex flex-row gap-2">
      <a href="https://www.linkedin.com/in/yasin-vahora-33686b264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        className="Linkdin social">
        <FontAwesomeIcon className="text-blue-500" icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/yasinvahora56"
        className="Github Icon text-white">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      {/* <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon className="text-blue-400" icon={faTwitter} size="2x" />
      </a> */}
      <a 
        href="https://www.instagram.com/_i_am_yasin__/"
        className="instagram social relative w-8 h-8 rounded-lg"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <FontAwesomeIcon className="text-white absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-100" icon={faInstagram} size="2x" />
      </a>
    </div>
  )
}

export default SocialLinks
