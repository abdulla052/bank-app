import style from "../style.js";

const Button = ({ children = "Get Started", styles }) => {
  return (
    <button
      type="button"
      className={`font-poppins font-medium bg-blue-gradient text-primary text-[18px] px-6 py-4 rounded-[10px] outline-none ${style.hoverEffect} ${styles}`}>
      {children}
    </button>
  );

  Button.defaultProp = {};
};

export default Button;
