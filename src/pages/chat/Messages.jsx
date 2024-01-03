import React, { useEffect, useRef } from "react";
import "../styles/MessageCard.css";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import { useAppSelector } from "../store/hooks";
// import { useNavigate } from 'react-router-dom';
// import {
//   Button,
  
 
// } from "@mui/material";
export const Messages = ({ userId }) => {

  const { messages } = useAppSelector((state) => state);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // const navigate = useNavigate();
  // const fornextpage = () => {
  //   navigate("/FeedbackPageContact");
  // };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="messages-card">
      {messages.map((message) => (
        <Message key={message.id} messageItem={message} userId={userId} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

const Message = ({ messageItem, userId }) => {
  return (
    <>
      <div
        className={`message-box ${
          messageItem.userId === userId
            ? "message-box-right"
            : "message-box-left"
        }`}
      >
        <Avatar
          sx={{ width: 24, height: 24, margin: "10px 3px" }}
          aria-label="current-user"
        >
          <PersonIcon />
        </Avatar>
        <div>
          <div className="username">{messageItem.userName}</div>
          <div className="message">
            <div className="message-text">{messageItem.message}</div>
            <div className="message-time">{messageItem.time}</div>
          </div>
          {/* <Button 
         variant="contained"
         style={{ margin: "10px" ,backgroundColor:"pink",fontSize:"30px",color:"black",borderRadius:"30px"}}
        onClick={fornextpage}>
           Done
        </Button> */}
        </div>
      </div>
     
    </>
  );
};
