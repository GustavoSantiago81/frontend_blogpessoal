import "./Navbar.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import Login from "../../../paginas/login/Login";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function Navbar() {
  const [token, setToken] = useLocalStorage("token");
  const history = useNavigate();

  function goLogout() {
    setToken("");
    alert("Usuário deslogado");
    history("/login");
  }

  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={1} className="cursor">
              <Link to={"/home"}>
                <Typography variant="h6" color="inherit">
                  home
                </Typography>
              </Link>
            </Box>

            <Link to={"/postagens"}>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  postagens
                </Typography>
              </Box>
            </Link>

            <Link to={"/temas"}>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  temas
                </Typography>
              </Box>
            </Link>

            <Box mx={1} className="cursor">
              <Link to={"/cadastrarTema"}>
                <Typography variant="h6" color="inherit">
                  cadastrar tema
                </Typography>
              </Link>
            </Box>

            <Box mx={1} className="cursor" onClick={goLogout}>
              <Typography variant="h6" color="inherit">
                logout
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;