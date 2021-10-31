import { MainMenu } from "./MainMenu";
import React, {useState} from "react";
import {useLocation} from "react-router";

type TokenFunc = (str: string) => void;

interface Props {
    token: string;
    setToken: TokenFunc;
}

export const Header:React.FC<Props> = ({token, setToken}) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" || location.pathname === "/login" || !token
        ? <header className="App-header p-2">
            HEADER
          </header>
        : ''
      }
      {token
        ? <MainMenu token={token} setToken={setToken} />
        : ''
      }
    </>
  );
}