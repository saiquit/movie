import {
  createStyles,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { Inbox, Mail } from "@material-ui/icons";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: 300,
    },
    drawerPaper: {
      width: 300,
    },
  }),
);

const NavDrawer: React.FC<Props> = ({ open, setOpen }: Props) => {
  const classes = useStyle();
  return (
    <Drawer
      className={classes.drawer}
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <>
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Drawer>
  );
};

export default NavDrawer;
