import { useState } from "react";
import { UserLogin } from "../pages/chat/UserLogin";
import Header from "../pages/chat/Header";
import {ChatCard} from '../pages/chat/ChatCard'
import { useAppDispatch, useAppSelector } from "./store/hooks";
import "./styles/App.css";
import { v4 as uid } from "uuid";
import { addUser } from "./store/usersSlice";

function AppChat() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = (name) => {
    if (name.trim() !== "") {
      const user = users.find((user) => user.name === name);
      let requestedUser = { name };

      if (user) {
        requestedUser.id = user.id;
      } else {
        requestedUser.id = uid();
        dispatch(addUser(requestedUser));
      }
      setUser(requestedUser);
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        {isLoggedIn ? (
          <ChatCard user={user} />
        ) : (
          <UserLogin handleLogin={handleLogin} />
        )}
      </div>
    </div>



  );
}

export default AppChat;
