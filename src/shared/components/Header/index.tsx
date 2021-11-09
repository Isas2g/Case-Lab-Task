import { MainMenu } from "./MainMenu";
import React from "react";
import {useLocation} from "react-router";
import {Image} from "react-bootstrap";
import banner from "../../assets/banner-white.png";
import "./style.scss";

type TokenFunc = (str: string) => void;

interface Props {
    token: string;
    setToken: TokenFunc;
}


export const Header:React.FC<Props> = ({token, setToken}) => {
  const location = useLocation();

  return (
    <header>
      {location.pathname === "/login" || !token
        ? <header className="text-left p-2">
            <Image src={banner}/>
          </header>
        : ""
      }
      {token && !(location.pathname === "/login")
        ? <MainMenu token={token} setToken={setToken} />
        : ""
      }
    </header>
  );
}