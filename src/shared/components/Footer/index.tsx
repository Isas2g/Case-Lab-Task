import React from "react";
import {DIV, UL, A, LI} from "../../styles/style";
import "./style.scss";

export const Footer = () => {
  return (
    <footer className="footer mt-auto">
        <DIV>
            <UL>
                <LI><A href="https://rosatom.ru/">Росатом</A></LI>
                <LI><A href="https://greenatom.ru">Гринатом</A></LI>
                <LI><A href="https://github.com/Isas2g/Case-Lab-Task">GitHub</A></LI>
                <LI>
                    <p>👋</p>
                </LI>
            </UL>
        </DIV>
    </footer>
  )
}
