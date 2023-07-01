import { MdSunny } from "react-icons/md";
import { LiaCloudSunRainSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

const DayCard = () => {
  const hourArray = [
    {
      hours: "00:00 Am",
      icons: <MdSunny />,
    },
    {
      hours: "1:00 Am",
      icons: <MdSunny />,
    },
    {
      hours: "2:00 Am",
      icons: <LiaCloudSunRainSolid />,
    },
    {
      hours: "3:00 Am",
      icons: <MdSunny />,
    },
    {
      hours: "4:00 Am",
      icons: <LiaCloudSunRainSolid />,
    },
    {
      hours: "5:00 Am",
      icons: <MdSunny />,
    },
    {
      hours: "6:00 Am",
      icons: <MdSunny />,
    },
    {
      hours: "7:00 Am",
      icons: <LiaCloudSunRainSolid />,
    },
    {
      hours: "8:00 Am",
      icons: <MdSunny />,
    },
    {
      hours: "9:00 Am",
      icons: <MdSunny />,
    },
    {
      hours: "10:00 Am",
      icons: <LiaCloudSunRainSolid />,
    },
    {
      hours: "11:00 Am",
      icons: <MdSunny />,
    },
    {
      hours: "12:00 Pm",
      icons: <MdSunny />,
    },
    {
      hours: "13:00 Pm",
      icons: <LiaCloudSunRainSolid />,
    },
    {
      hours: "14:00 Pm",
      icons: <MdSunny />,
    },
    {
      hours: "15:00 Pm",
      icons: <MdSunny />,
    },
    {
      hours: "16:00 Pm",
      icons: <MdSunny />,
    },
    {
      hours: "17:00 Pm",
      icons: <LiaCloudSunRainSolid />,
    },
    {
      hours: "18:00 Pm",
      icons: <LiaCloudSunRainSolid />,
    },
    {
      hours: "19:00 Pm",
      icons: <MdSunny />,
    },
    {
      hours: "14:00 Pm",
      icons: <MdSunny />,
    },
    {
      hours: "20:00 Pm",
      icons: <MdSunny />,
    },
    {
      hours: "21:00 Pm",
      icons: <LiaCloudSunRainSolid />,
    },
    {
      hours: "22:00 Pm",
      icons: <MdSunny />,
    },
    {
      hours: "23:00 Pm",
      icons: <LiaCloudSunRainSolid />,
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={7}
        modules={[Autoplay , Navigation]}
        // loop={true}
        autoplay={{
          delay: 2500,
        }}
        className="mySwiper"
      >
        {hourArray?.map((item, index) => {
          return (
            <SwiperSlide>
              <div className="card" key={index}>
                <p>{item.hours}</p>
                <span>
                  {item.icons}
                </span>
                <p>
                  15<sup>o</sup>
                  <span style={{ color: "#b7abab" }}>
                    -3<sup>o</sup>
                  </span>
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default DayCard;
