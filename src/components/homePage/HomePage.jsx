import "./HomePage.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { newNote } from "../../redux/notesSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  let [heading, setHeading] = useState("");
  let [content, setContent] = useState("");

  const handleSubmit = () => {
    let payload = {
      heading,
      content,
      createdAt: "just now",
    };
    dispatch(newNote(payload));
    setHeading("");
    setContent("");
  };

  const allNotes = useSelector((state) => state.notes);

  return (
    <div className="home-page-session">
      <div className="input-area">
        <p className="para-1">Add a Note</p>
        <div>
          <p
            className="para-2"
            htmlFor="title"
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              placeholder="Title"
              className="input-title"
              id="title"
              type="text"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </p>
          <textarea
            className="input-text"
            type="text"
            placeholder="Take a note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="submit-btn" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
      </div>
      <div className="notes-title">
        <DescriptionOutlinedIcon className="notes-icon" />
        <p>My notes</p>
      </div>
      <p className="recent-text">Recently viewed</p>
      <div className="display-sam">
        {allNotes
          .filter((e) => e.heading !== null)
          .map((e, i) => {
            return (
              <div key={i} className="display-notes-container">
                <div className="display-notes">
                  <div className="heading-container">
                    <p>{e.heading}</p>
                    <div className="icons-container">
                      <EditOutlinedIcon
                        style={{ fontSize: "22px", cursor: "pointer" }}
                      />
                      <DeleteOutlineOutlinedIcon
                        style={{ fontSize: "22px", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                  <p>{e.content}</p>
                  <p className="date">{e.createdAt}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
