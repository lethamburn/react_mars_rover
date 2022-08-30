const Cameras = ({ setCamera, camera, rover }) => {
  return (
    <section className="cameras">
    {camera !== "" ? <h2>{camera}</h2> : <h2>Select the camera:</h2>}
      
      <div>
        <button onClick={() => setCamera("FHAZ")}>
          Front Hazard Avoidance Camera
        </button>
        <button onClick={() => setCamera("RHAZ")}>
          Rear Hazard Avoidance Camera
        </button>
        <button onClick={() => setCamera("NAVCAM")}>Navigation Camera</button>
        {rover === "curiosity" ? (
          <>
            <button onClick={() => setCamera("MAST")}>Mast Camera</button>
            <button onClick={() => setCamera("CHEMCAM")}>
              Chemistry and Camera Complex
            </button>
            <button onClick={() => setCamera("MAHLI")}>
              Mars Hand Lens Imager
            </button>
            <button onClick={() => setCamera("MARDI")}>
              Mars Descent Imager
            </button>
          </>
        ) : null}
        {rover === "opportunity" || rover === "spirit" ? (
          <>
            <button onClick={() => setCamera("PANCAM")}>
              Panoramic Camera
            </button>
            <button onClick={() => setCamera("MINITES")}>
              Miniature Thermal Emission Spectrometer (Mini-TES)
            </button>
          </>
        ) : null}
        <button onClick={() => setCamera("")}>All Cameras</button>
      </div>
    </section>
  );
};

export default Cameras;
