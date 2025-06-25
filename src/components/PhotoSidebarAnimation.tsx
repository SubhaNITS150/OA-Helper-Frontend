import { photoDataItems } from "../../public/assets/photosData"
import "../styles/photosidebaranimation.scss";

export default function PhotoSidebarAnimation() {
  return (
    <div className="flex py-2 px-2 h-[90%] relative">
      <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1750849703/FrontImg_gnlrfa.jpg" alt="" />

      <div className="absolute w-10 h-10 -left-5 bottom-45 -rotate-15 pic1">
        <img src={photoDataItems[5].imageUrl} alt="google" />
      </div>
      <div className="absolute w-10 h-10 right-7 bottom-45 rotate-15 pic2">
        <img src={photoDataItems[1].imageUrl} alt="spotify" />
      </div>

      <div className="absolute w-15 h-15 -left-12 bottom-60 rotate-5 pic3">
        <img src={photoDataItems[9].imageUrl} alt="linkedin" />
      </div>
      <div className="absolute w-12 h-12 right-2 bottom-60 -rotate-25 pic4">
        <img src={photoDataItems[4].imageUrl} alt="pinterest" />
      </div>

      <div className="absolute w-22 h-22 -left-12 bottom-75 rotate-15 pic5">
        <img src={photoDataItems[2].imageUrl} alt="swiggy" />
      </div>
      <div className="absolute w-22 h-22 right-3 bottom-75 -rotate-15 pic6">
        <img src={photoDataItems[3].imageUrl} alt="mastercard" />
      </div>

      <div className="absolute w-22 h-22 -left-4 bottom-95 rotate-25 pic7">
        <img src={photoDataItems[8].imageUrl} alt="redbus" />
      </div>
      <div className="absolute w-22 h-22 right-8 bottom-92 -rotate-20 pic8">
        <img src={photoDataItems[6].imageUrl} alt="zomato" />
      </div>
    </div>
  )
}
