import { useState, useEffect } from "react";
import { API } from "../api/api";
import Cameras from "../components/Cameras";
import SelectRover from "../components/SelectRover";
import Sol from "../components/Sol";

const Rover = () => {
  const [curiosityPhotos, setCuriosityPhotos] = useState([]);
  const [rover, setRover] = useState(null);
  const [sol, setSol] = useState(100);
  const [camera, setCamera] = useState("");

  const getAllPhotos = async () => {
    if (rover !== null) {
      API.get(
        `/${rover}/photos?sol=${sol}&api_key=5JS20gQ4aHePLkpWjSmtjLn62zWN6AYu0kR2jFvI`
      ).then((res) => {
        setCuriosityPhotos(res.data.photos);
      });
    }
  };

  const filteredPhotos = curiosityPhotos.filter((item) =>
    item.camera.name.toLowerCase().includes(camera.toLowerCase())
  );

  useEffect(() => {
    getAllPhotos();
  }, [rover, sol]);

  return (
    <article className="rover">
      <div className="controlPanel">
        <h2>{rover !== null ? rover.toUpperCase() : "Select the rover:"}</h2>
        <SelectRover setRover={setRover} setCamera={setCamera} />
        {rover !== null ? (
          <>
            <Sol sol={sol} setSol={setSol} />
            <Cameras setCamera={setCamera} camera={camera} rover={rover} />
          </>
        ) : null}
      </div>
      {curiosityPhotos.length ? (
        <div className="gallery cf">
          {filteredPhotos.map((item) => (
            <div key={item.id}>
              <img src={item.img_src} alt={item.camera.full_name} />
            </div>
          ))}
        </div>
      ) : (
        <div className="gallery">Choose another settings.</div>
      )}
    </article>
  );
};

export default Rover;
