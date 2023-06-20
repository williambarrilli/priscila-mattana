import ReactPlayer from "react-player";
import "./styles.css";

export const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="box-title">
          <label className="title">Em um relacionamento</label>
          <label className="title">saudável com o</label>
          <label className="title-double">TDAH</label>
          <label className="title"> & </label>
          <label className="title"> A organização</label>
        </div>
        <div className="video-player">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LgMo2cOS3HE"
            controls={false}
            playing
            width={"100%"}
            height={"100%"}
          />
        </div>

        <label className="text">
          Aprenda em menos de 30 dias a como modificar sua vida com essas 8
          dicas práticas para quem acha que tem TDAH ou dificuldade em
          organização e procrastinação
        </label>

        <div className="box-btn">
          <button
            className="btn"
            onClick={() =>
              window.open("https://chk.eduzz.com/1955919", "_blank")
            }
          >
            Clique aqui é adquira essa oportunidade
          </button>
        </div>
      </div>
      {/* <source src="https://youtu.be/wX9AwH8WA3g" type="video/ogg" /> */}
    </div>
  );
};
