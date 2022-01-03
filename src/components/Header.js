import { MenuIcon } from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import Logo from "./images/PngItem_1083749.png"

function Header() {
  const [user] = useAuthState(auth);
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithPopup(provider)
      .then(() => history.push("/channels"))
      .catch((error) => alert(error.message));
  };

  return (
    <header className="bg-discord_blue flex items-center justify-between py-4 px-6">
      <a href="/">
        <img
          src={Logo}
          className="w-32 h-12 object-contain"
          alt=""
        />
      </a>
      
      <div className="flex space-x-4">
        <button
          className="bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium"
          onClick={!user ? signIn : () => history.push("/channels")}
        >
          {!user ? "Login" : "Open Discord"}
        </button>
        <MenuIcon className="h-9 text-white cursor-pointer lg:hidden" />
      </div>
    </header>
  );
}

export default Header;