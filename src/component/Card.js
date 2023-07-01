import {MdSunny} from "react-icons/md";
import {LiaCloudSunRainSolid} from 'react-icons/lia';
const Card = () =>{
    return (
      <>
      <div className="wea_card_grp">
        <div className="card">
          <p>Sun</p>
          <span>
            <MdSunny />
          </span>
          <p>
            15<sup>o</sup>
            <span style={{ color: "#b7abab" }}>
              -3<sup>o</sup>
            </span>
          </p>
        </div>
        <div className="card">
          <p>Mon</p>
          <span>
            <MdSunny />
          </span>
          <p>
            15<sup>o</sup>
            <span style={{ color: "#b7abab" }}>
              -3<sup>o</sup>
            </span>
          </p>
        </div>
        <div className="card">
          <p>Tue</p>
          <span className="cloud_sun">
            <LiaCloudSunRainSolid />
          </span>
          <p>
            15<sup>o</sup>
            <span style={{ color: "#b7abab" }}>
              -3<sup>o</sup>
            </span>
          </p>
        </div>
        <div className="card">
          <p>Wed</p>
          <span>
            <MdSunny />
          </span>
          <p>
            15<sup>o</sup>
            <span style={{ color: "#b7abab" }}>
              -3<sup>o</sup>
            </span>
          </p>
        </div>
        <div className="card">
          <p>Thur</p>
          <span className="cloud_sun">
            <LiaCloudSunRainSolid />
          </span>
          <p>
            15<sup>o</sup>
            <span style={{ color: "#b7abab" }}>
              -3<sup>o</sup>
            </span>
          </p>
        </div>
        <div className="card">
          <p>Fri</p>
          <div>
            <MdSunny />
          </div>
          <p>
            15<sup>o</sup>
            <span style={{ color: "#b7abab" }}>
              -3<sup>o</sup>
            </span>
          </p>
        </div>
        <div className="card">
          <p>Sat</p>
          <span className="cloud_sun">
            <LiaCloudSunRainSolid />
          </span>
          <p>
            15<sup>o</sup>
            <span style={{ color: "#b7abab" }}>
              -3<sup>o</sup>
            </span>
          </p>
        </div>
        </div>
      </>
    );
}

export default Card;