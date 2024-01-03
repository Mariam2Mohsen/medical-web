import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

import { useNavigate } from 'react-router-dom';

export const UserLogin = ({ handleLogin }) => {
  const navigate = useNavigate();
  const fornext = () => {
    navigate("/FeedbackPageContact");
  };
  const [name, setName] = useState("");

  return (
    <Card style={{textAlign:"center"}}>
      <CardContent>
        <Typography variant="h4" textAlign="center" gutterBottom style={{fontSize:"60px"}}>
          Login 
        </Typography>
        <TextField
          label="username"
          placeholder="enter username"
          size="large"
          style={{ margin: "10px",fontSize:"50px",borderRadius:"30px",width:'350px' }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <Button
          variant="contained"
          style={{ margin: "10px",fontSize:"30px",borderRadius:"30px" }}
          onClick={() => handleLogin(name)}
        >
          Join chat
        </Button>
           <Button 
         variant="contained"
         style={{ margin: "10px" ,backgroundColor:"pink",fontSize:"30px",color:"black",borderRadius:"30px"}}
        onClick={fornext}>
           Done
        </Button>
      </CardContent>
    </Card>
  );
};
