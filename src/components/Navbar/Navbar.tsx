import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material";
import {
  DarkModeOutlined,
  LightModeOutlined,
  Settings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import logoPng from "../../assets/Gameplan-Logo.png";

const pages = ["Character", "Quests"];
const settings = ["Profile", "Dashboard"];

export const Navbar: React.FC = () => {
  //! TEMP

  const login = false;

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = React.useContext(ColorModeContext);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
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
        paddingLeft: "0px",
        marginBottom: "30px",
        backgroundColor: colors.greenAccent[500],
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters>
          <Box display={{ xs: "none", md: "block" }}>
            <img
              src={logoPng}
              alt="GamePlan Logo"
              style={{ width: "60px", display: "block", marginRight: "8px" }}
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "28px",
            }}
          >
            GamePlan
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={`/${page}`}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to={`/Account`}>"Account"</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "28px",
            }}
          >
            GamePlan
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex",} }}>
            {pages.map((page) => (
              <Box component="span" display="inline-block" key={page} >
                <Link to={`/${page}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      display: "block",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      color: 'inherit'
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              </Box>
            ))}
            {login ? (
              <Box component="span" display="inline-block">
                <Link to={`/Account`} style={{ textDecoration: "none",color: "inherit" }}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      display: "block",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    Account
                  </Button>
                </Link>
              </Box>
            ) : (
              <Box
                component="span"
                display="inline-block"
              >
                <Link to={`/Signup`} style={{ textDecoration: "none", color: "inherit" }}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      display: "block",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      color: "inherit"
                    }}
                  >
                    Sign Up
                  </Button>
                </Link>
              </Box>
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Settings />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {theme.palette.mode === "dark" ? (
              <Tooltip title="Dark Mode" className="darkM">
                <IconButton onClick={colorMode.toggleColorMode} sx={{ p: 0 }}>
                  <DarkModeOutlined />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Light Mode" className="lightM">
                <IconButton onClick={colorMode.toggleColorMode} sx={{ p: 0 }}>
                  <LightModeOutlined />
                </IconButton>
              </Tooltip>
            )}

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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  {login ? "Logout" : "Login"}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
