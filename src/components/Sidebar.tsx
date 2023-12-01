import React from "react";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Inbox,
  ModeNight,
  Send,
  StarBorder,
} from "@mui/icons-material";

interface SidebarProps {
  setMode: (mode: string) => void;
  mode: string;
}

const Sidebar: React.FC<SidebarProps> = ({ mode, setMode }) => {
  const [open, setOpen] = React.useState(false);

  const handleSidebarList = () => {
    setOpen(!open);
  };

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", md: "block" } }}>
      <Box position="fixed">
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              General
            </ListSubheader>
          }
        >
          <ListItemButton disableRipple>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
          </ListItemButton>
          <ListItemButton onClick={handleSidebarList} disableRipple>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton disableRipple>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
          </ListItemButton>
          <ListItemButton disableRipple>
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
          </ListItemButton>
          <ListItemButton
            disableRipple
            onChange={() => setMode(mode === "light" ? "dark" : "light")}
          >
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
