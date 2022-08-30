const SelectRover = ({setRover, setCamera}) => {
  return (
    <section>
      <button onClick={() => setRover("curiosity") & setCamera("")}>
        Curiosity
      </button>
      <button onClick={() => setRover("spirit") & setCamera("")}>Spirit</button>
      <button onClick={() => setRover("opportunity") & setCamera("")}>
        Opportunity
      </button>
    </section>
  );
};

export default SelectRover;
