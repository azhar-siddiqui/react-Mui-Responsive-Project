import React from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  styled,
  TooltipProps,
  tooltipClasses,
  Divider,
} from "@mui/material";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import {
  Logout,
  Mail,
  Notifications,
  PersonAdd,
  Settings,
  KeyboardArrowDown,
} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({ theme }) => ({
  display: "none",
  backgroundColor: "white",
  padding: "5px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

const Icons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 30,
});

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} arrow placement="left" />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white, // if Custom arrow color simply pass eg. "#333"
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white, // if Custom bg color simply pass eg. "#333"
    color: "#333",
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const Navbar = () => {
  const [account, setAccount] = React.useState<null | HTMLElement>(null);

  const open = Boolean(account);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAccount(event.currentTarget);
  };

  const handleClose = () => {
    setAccount(null);
  };

  return (
    <AppBar position="sticky" sx={{ boxShadow: "none", py: 1 }}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", md: "block" } }}>
          Reco
        </Typography>
        <Diversity2Icon sx={{ display: { xs: "block", md: "none" } }} />
        <SearchBar color="text.primary">
          <InputBase placeholder="Search Here.." />
        </SearchBar>
        <Icons>
          <Badge
            badgeContent={4}
            color="error"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Mail />
          </Badge>
          <Badge
            badgeContent={4}
            color="error"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Notifications />
          </Badge>

          <StyledTooltip title="Account Settings" placement="left" arrow>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              disableTouchRipple
              sx={{ "&:hover": { backgroundColor: "transparent" } }}
            >
              <Stack direction="row" gap={2} alignItems="center">
                <Avatar
                  src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Azhar sayyed"
                  sx={{ width: 40, height: 40 }}
                />
                <KeyboardArrowDown />
              </Stack>
            </IconButton>
          </StyledTooltip>

          <Menu
            anchorEl={account}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
