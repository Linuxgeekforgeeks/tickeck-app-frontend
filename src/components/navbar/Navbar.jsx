import { useAuthContext } from "../../context/AuthContext";
import "./Navbar.css";
export const Navbar = () => {
  const { user } = useAuthContext;
  return (
    <>
      <nav>
        <h1>
          <a href="/">Support Desk</a>
        </h1>{" "}
        <div className="right">
          {user ? (
            <>
              <p>({user})</p>
            </>
          ) : (
            <button>
              <a href="/login">Login</a>
            </button>
          )}
          <button>
            <a href="/logout">LogOut</a>
          </button>
        </div>
      </nav>
    </>
  );
};
