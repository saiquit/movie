import {
  createStyles,
  Divider,
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React, { Dispatch, SetStateAction } from "react";
import { genres } from "../movies";

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
        {genres.map((text, index) => (
          <>
            <ListItem button key={text.id}>
              <ListItemIcon>
                <Icon component={text.icon} />
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Drawer>
  );
};

export default NavDrawer;
