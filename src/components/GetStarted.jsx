import styles from "../style.js";
import { arrowUp } from "../assets";
import "./getStarted.css";

const GetStarted = () => {
  return (
    <div
      id="getStarted"
      className={`group ${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full transition-all ease-in-out hover:bg-opacity-95`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className={`w-[23px] h-[23px] object-contain transition-all ease-in-out group-hover:translate-x-[1px] group-hover:-translate-y-[1px]`}
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px] ">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
