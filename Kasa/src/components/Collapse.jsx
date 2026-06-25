import { useState } from "react";

const Collapse = ({ title, content }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">

      <button
        className="collapse__button"
        onClick={() => setIsOpen(!isOpen)} >
      
       <span>{title}</span>

        <i
          className={`fa-solid fa-chevron-up collapse__arrow ${isOpen ? "open" : ""}`}
        ></i>

      </button>

      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        <div>{content}</div>
      </div>

    </div>
  );
};

export default Collapse;