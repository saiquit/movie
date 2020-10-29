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
import { Link } from "react-router-dom";

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
    name: {
      textDecoration: "none",
      color: theme.palette.grey[900],
      fontWeight: theme.typography.fontWeightMedium,
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
            <Link className={classes.name} to={`/category/${text.id}`}>
              <ListItem button key={text.id}>
                <ListItemIcon>
                  <Icon component={text.icon} />
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItem>
              <Divider />
            </Link>
          </>
        ))}
      </List>
    </Drawer>
  );
};

export default NavDrawer;
