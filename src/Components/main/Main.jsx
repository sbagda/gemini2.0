import "./Main.css";
import { FaUserCircle } from "react-icons/fa";
import { VscCompass } from "react-icons/vsc";
import { CiYoutube } from "react-icons/ci";
import { BsCodeSlash } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { TfiGallery } from "react-icons/tfi";
import { MdOutlineMicNone } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import { useContext } from "react";
import { Context } from "../../context/Context";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="navbar">
        <p>Gemini 2.0</p>
        <FaUserCircle className="user-icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Sahil.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Create a 12-week study plan for learning a new language</p>
                <VscCompass className="icon" />
              </div>
              <div className="card">
                <p>Suggest video to quickly solve a problem</p>
                <CiYoutube className="icon" />
              </div>
              <div className="card">
                <p>Look up a linux shell command for a specific task</p>
                <BsCodeSlash className="icon" />
              </div>
              <div className="card">
                <p>
                  Suggest an organized list of the best food spots in a city
                </p>
                <CiLocationOn className="icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <FaUserCircle className="r-icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src="src/assets/gemini_logo.png" alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <TfiGallery className="b-icon" />
              <MdOutlineMicNone className="b-icon" />
              {input ? (
                <VscSend onClick={() => onSent()} className="b-icon" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate information.including about people, so
            double check its response. Your privacy and GeminiApp.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
