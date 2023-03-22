import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
//import { makeStyles } from "@mui/material/styles";
import React from "react";

/*
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
*/
export const VaccineList = ({ vaccines }) => {
  //const classes = useStyles();

  return (<List name="vaccines-list-cat">

    {vaccines.map(vaccine =>
      <ListItem key={vaccine}>
        <ListItemAvatar>
          <Avatar>
            <FontAwesomeIcon icon={faCheckCircle} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={vaccine} />
      </ListItem>
    )}
  </List>)
}
