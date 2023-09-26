import { useState } from "react";
import "../App.css";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created new room");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Room Id & username is required");
      return;
    }

    // redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const hadleInputEnter = (e) => {
    if (e.code == "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="homepageWrapper">
      <div className="formWrapper">
        <img
          className="homepageLogo"
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/program-update-4664319-3868281.png?f=avif&w=200"
          alt="code-sync"
        />
        <h4 className="mainLable">Paste invitation Room Id </h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputbox"
            placeholder="RoomId"
            value={roomId}
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
            onKeyUp={hadleInputEnter}
          />
          <input
            type="text"
            className="inputbox"
            placeholder="UserName"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            onKeyUp={hadleInputEnter}
          />

          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don&apos;t have an invitation code  &nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">
              create one
            </a>
          </span>
        </div>
      </div>

      <footer>
        <h4>
          Built with ❤️ by &nbsp;<a href="coders-club">coders-club</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
