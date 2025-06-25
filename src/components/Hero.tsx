"use client";
import { landingDataItems } from "../../public/assets/landingData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SlideComponent from "./SlideComponent";
import "@/app/globals.css";

export default function Hero() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      speed={1000}
      rewind={false}
      // autoplay={{
      //   disableOnInteraction: false,
      //   delay: 5000,
      // }}
      className="h-[90vh] w-full"
    >
      <SwiperSlide>
        <SlideComponent
          heading={landingDataItems[0].heading}
          highlight={landingDataItems[0].highlight}
          text={landingDataItems[0].text}
          imageUrl={landingDataItems[0].imageUrl}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideComponent
          heading={landingDataItems[1].heading}
          highlight={landingDataItems[1].highlight}
          text={landingDataItems[1].text}
          imageUrl={landingDataItems[1].imageUrl}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideComponent
          heading={landingDataItems[2].heading}
          highlight={landingDataItems[2].highlight}
          text={landingDataItems[2].text}
          imageUrl={landingDataItems[2].imageUrl}
        />
      </SwiperSlide>
    </Swiper>
  );
}
