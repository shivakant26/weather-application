import "./Weather.scss";
import { BiSearch } from "react-icons/bi";
import { AiOutlineCloud } from "react-icons/ai";
import {
  BsFillCloudDrizzleFill,
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { PiSmileySadFill ,PiSmileyWinkFill, PiSmileyStickerFill , PiSmileyMehFill} from "react-icons/pi";
import { FaThumbsDown, FaThumbsUp , FaSmile } from "react-icons/fa";
import HalfChart from "./Chart";
import Card from "./Card";
import { useEffect, useState } from "react";
import DayCard from "./DayCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Redux/weatherSlice";

const Weather = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [keys, setKeys] = useState("today");
  const [currentData, setCurrentData] = useState([]);
  const dispatch = useDispatch();
  const locationData = useSelector((state) => state?.api?.posts);
  console.log(123, locationData);

  const handleTab = (val) => {
    switch (val) {
      case "today":
        setActiveTab(true);
        setKeys("today");
        break;
      case "week":
        setActiveTab(false);
        setKeys("week");
        break;
      default:
        console.log("none");
    }
  };
  const handleLocaion = (e) => {
    const currentLocation = e.target.value;
    let data = locationData?.filter((el) => {
      return el.location.toLowerCase() === currentLocation.toLowerCase();
    });
    setCurrentData(data);
  };
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  console.log(4444, currentData[0]?.location);

  return (
    <>
      <div className="main_wrapper">
        <div className="weather_content">
          <div className="wea_siderbar">
            <div className="search_btn">
              <span>
                <BiSearch />
              </span>
              <input
                type="search"
                placeholder="Search for places..."
                onChange={(e) => handleLocaion(e)}
              />
            </div>
            <div className="weather_seens">
              <span>
                <img
                  src={require("../assets/image/wea_home.jpg")}
                  alt="weather_home"
                />
              </span>
              <h1>
                {currentData.length > 0 ? currentData[0]?.temprature : "12"}
                <sup>
                  o<sub>C</sub>
                </sup>
              </h1>
              <p>
                Monday , <span>16:00</span>
              </p>
            </div>
            <div className="wea_place">
              <div className="row">
                <span>
                  <AiOutlineCloud />
                </span>
                <span>
                  {currentData.length > 0
                    ? currentData[0]?.weather_status
                    : "Cloudly"}
                </span>
              </div>
              <div className="row">
                <span>
                  <BsFillCloudDrizzleFill />
                </span>
                <span>
                  Rain -{" "}
                  {currentData.length > 0
                    ? currentData[0]?.rain_percentage
                    : "20"}
                  %
                </span>
              </div>
              <img
                src={require("../assets/image/newyork.jpg")}
                alt="location_image"
              />
            </div>
          </div>
          <div className="wea_content">
            <div className="tabber_section">
              <div className="tab_header">
                <div className="tabs">
                  <span
                    className={keys === "today" ? "active" : ""}
                    onClick={() => handleTab("today")}
                  >
                    Today
                  </span>
                  <span
                    className={keys === "week" ? "active" : ""}
                    onClick={() => handleTab("week")}
                  >
                    Week
                  </span>
                </div>
                <div className="right_menu">
                  <span className="cen">
                    <sup>o</sup>C
                  </span>
                  <span className="faren">
                    <sup>o</sup>F
                  </span>
                  <span className="profile">
                    <img
                      src={require("../assets/image/profile.jpg")}
                      alt="profile_pic"
                    />
                  </span>
                </div>
              </div>
              <div className="day_weather">
                {activeTab ? <DayCard /> : <Card />}
                <div className="todya_highlight">
                  <h2>Today Hightlights</h2>

                  <div className="today_highlight_grp">
                    <div className="card_highlight">
                      <p>Uv Indev</p>
                      <HalfChart />
                    </div>
                    <div className="card_highlight">
                      <p>Wind status</p>
                      <h2>
                        {currentData.length > 0
                          ? currentData[0]?.wind_speed
                          : "7.70"}
                        <span>km/h</span>
                      </h2>
                    </div>
                    <div className="card_highlight">
                      <p>Sunrise & Sunset</p>
                      <div className="row">
                        <div>
                          <BsFillArrowUpCircleFill />
                        </div>
                        <div style={{ marginLeft: "15px", lineHeight: "15px" }}>
                          <p>6:35 Am</p>
                          <span>-1m 46s</span>
                        </div>
                      </div>
                      <div className="row">
                        <div>
                          <BsFillArrowDownCircleFill />
                        </div>
                        <div style={{ marginLeft: "15px", lineHeight: "15px" }}>
                          <p>6:35 Am</p>
                          <span>-2m 22s</span>
                        </div>
                      </div>
                    </div>
                    <div className="card_highlight">
                      <p>Humidity</p>
                      <h2>
                        {currentData?.length > 0
                          ? currentData[0]?.humidity
                          : "50"}
                        <span>%</span>
                      </h2>
                      <div className="effect">
                        <span>normal</span>
                        <span className="unhelthy">
                          <FaThumbsUp />
                        </span>
                      </div>
                    </div>
                    <div className="card_highlight">
                      <p>Visibility</p>
                      <h2>
                        {currentData?.length > 0
                          ? currentData[0]?.visibility
                          : "3.2"}
                        <span>km</span>
                      </h2>
                      <div className="effect">
                        <span>
                          {currentData?.length > 0 ? (
                            <>
                              {currentData[0]?.visibility <= 1
                                ? "Bad"
                                : currentData[0]?.visibility > 1 && currentData[0]?.visibility <= 3
                                ? "Normal"
                                : currentData[0]?.visibility > 3 && currentData[0]?.visibility <= 5
                                ? "Good" : "Excelent" }
                            </>
                          ) : (
                            "normal"
                          )}
                        </span>
                       
                        <span className="normal">
                        {currentData?.length > 0 ? (
                            <>
                              {currentData[0]?.visibility <= 1
                                ? <PiSmileySadFill style={{color:'#CD1818'}}/>
                                : currentData[0]?.visibility > 1 && currentData[0]?.visibility <= 3
                                ? <PiSmileyMehFill style={{color:'#03C988'}}/>
                                : currentData[0]?.visibility > 3 && currentData[0]?.visibility <= 5
                                ? <PiSmileyStickerFill style={{color:'#0C134F'}}/> : <PiSmileyWinkFill style={{color:'#1D267D'}}/> }
                            </>
                          ) : (
                            <FaSmile />
                          )}
                          
                        </span>
                      </div>
                    </div>
                    <div className="card_highlight">
                      <p>Air Quality</p>
                      <h2>
                        {currentData.length > 0
                          ? currentData[0]?.air_quality?.index
                          : "105"}
                      </h2>
                      <div className="effect">
                        <span>Unhelthly</span>
                        <span className="unhelthy">
                          <FaThumbsDown />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
