import { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const HomeSampleImg_1 = "./assets/images/home_sample_img_1.png";
const HomeSampleImg_2 = "./assets/images/home_sample_img_2.png";
const hitesh = "./assets/images/hitesh.png";
const sujoy = "./assets/images/sujoy.png";
const sujoy_hitesh_1 = "./assets/images/sujoy_hitesh_1.jpg";
const sujoy_hitesh_2 = "./assets/images/sujoy_hitesh_2.jpg";
const sample_image_1 = "./assets/images/sample_image_1.png";
const sample_image_2 = "./assets/images/sample_image_2.png";
const sample_image_3 = "./assets/images/sample_image_3.png";
const sample_image_4 = "./assets/images/sample_image_4.png";
const sample_image_5 = "./assets/images/sample_image_5.png";

const advances_course_vid_cropped =
  "./assets/videos/advanced_course_vid_croped.mp4";
const platinum_course_vid_cropped =
  "./assets/videos/platinum_course_vid_croped.mp4";
const forex_campaign_vid_cropped =
  "./assets/videos/forex_campaign_vid_cropped.mp4";

const sample_vid_3 = "./assets/videos/sample_vid_3.mp4";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <BarLoader
          color="blue"
          loading={loading}
          size={150}
          // aria-label="Loading Spinner"
          // data-testid="loader"
        />
      ) : (
        <>
          <div>
            <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" rel="noreferrer" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <div className="images">
            <img src={HomeSampleImg_1} alt="" />
            <img src={HomeSampleImg_2} alt="" />

            <img src={hitesh} alt="" />
            <img src={sujoy} alt="" />

            <img src={sujoy_hitesh_1} alt="" />
            <img src={sujoy_hitesh_2} alt="" />

            <img src={sample_image_1} alt="" />
            <img src={sample_image_2} alt="" />

            <img src={sample_image_3} alt="" />
            <img src={sample_image_4} alt="" />

            <img src={sample_image_5} alt="" />
          </div>
          <div className="videos">
            <video
              src={advances_course_vid_cropped}
              controls={false}
              autoPlay
              loop
              muted
            />
            <video
              src={forex_campaign_vid_cropped}
              controls={false}
              autoPlay
              loop
              muted
            />
            <video
              src={platinum_course_vid_cropped}
              controls={false}
              autoPlay
              loop
              muted
            />
            <video src={sample_vid_3} controls={false} autoPlay loop muted />
          </div>
        </>
      )}
    </>
  );
}

export default App;
