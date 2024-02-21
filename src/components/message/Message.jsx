import { RiEmotionHappyLine, RiEmotionUnhappyLine } from "react-icons/ri";
import "./Message.scss";

export default function Message({ type, message }) {
  return (
    <section
      className={`messageContainer ${type === "error" ? "bg-error" : "bg-success"}`}
    >
      <div className={`message ${type === "error" ? "error" : "success"}`}>
        <h1>
          {type === "error" ? (
            <RiEmotionUnhappyLine className="icon" />
          ) : (
            <RiEmotionHappyLine className="icon" />
          )}
          {type === "error" ? "Error" : "Success"}
        </h1>
        <p>{message}</p>
      </div>
    </section>
  );
}
