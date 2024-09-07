import "./Sidebar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";
import { BsQuestionCircleFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

function Sidebar() {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } =
    useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <GiHamburgerMenu
          onClick={() => setExtended((prev) => !prev)}
          className="icons menu"
        />
        <div onClick={() => newChat()} className="new-chat">
          <FaPlus className="icons" />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, idx) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  key={idx}
                  className="recent-entry"
                >
                  <IoMdChatbubbles className="icons" />
                  <p>{item.slice(0, 15)}....</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-icon recent-entry">
          <BsQuestionCircleFill className="icons" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-icon recent-entry">
          <FaClock className="icons" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-icon recent-entry">
          <IoMdSettings className="icons" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
