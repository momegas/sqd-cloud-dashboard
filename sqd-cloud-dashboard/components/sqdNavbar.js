import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const settings = ["Profile", "Account", "Logout"];
const contents = [
  { page: "Overview", url: "/dashboard" },
  { page: "Sites", url: "/sites" },
  { page: "Apps", url: "/apps-overview" },
  { page: "Databases", url: "/databases-overview" },
  { page: "Settings", url: "/" },
];

const SqdNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        backgroundImage: "none",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl" sx={{ borderBottom: 1, marginBottom: "10px" }}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/sqdLogo.svg"
              alt="Squaredev Logo"
              width={40}
              height={40}
            />
            <Typography variant="h6" sx={{ marginLeft: "10px" }}>
              Ana
            </Typography>
          </Typography>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <NotificationsIcon sx={{ marginRight: "10px" }} />
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Container maxWidth="xl">
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "space-evenly",
            paddingBottom: "10px",
          }}
        >
          {contents.map(({ page, url }) => (
            <Box key={page} sx={{ display: "flex", alignSelf: "left" }}>
              <Button
                variant="text"
                sx={{
                  textTransform: "Capitalize",
                  ":hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                {" "}
                <Typography component="h6">
                  <Link
                    href={url}
                    underline="none"
                    variant="inherit"
                    sx={{
                      color: "text.secondary",
                      ":hover": {
                        color: "text.primary",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {page}
                  </Link>
                </Typography>
              </Button>
            </Box>
          ))}
        </Box>
      </Container>
    </AppBar>
  );
};
export default SqdNavbar;
