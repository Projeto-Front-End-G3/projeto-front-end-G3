import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { StyledButtons } from "./style";

const Buttons = () => {
  const { authorized } = useContext(UserContext);
  return (
    <>
      {!authorized && (
        <StyledButtons>
          <Link to="/login">Login</Link>
          <Link to="/register">Cadastrar-se</Link>
        </StyledButtons>
      )}
    </>
  );
};

export default Buttons;
