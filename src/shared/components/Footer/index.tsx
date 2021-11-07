import React from "react";
import {Div, UL, Li, A} from "./style";
import "./style.scss";

export const Footer = () => {
  return (
    <footer className="footer mt-auto">
        <Div>
            <UL>
                <Li><A href="https://rosatom.ru/">Росатом</A></Li>
                <Li><A href="https://greenatom.ru">Гринатом</A></Li>
                <Li><A href="https://github.com/Isas2g/Case-Lab-Task">GitHub</A></Li>
                <Li>
                    <p>👋</p>
                </Li>
            </UL>
        </Div>
    </footer>
  )
}
