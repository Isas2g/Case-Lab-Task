import React from "react";
import {Div, UL, Li, A} from "./style";
import "./style.scss";

export const Footer = () => {
  return (
    <footer className="footer mt-auto">
        <Div>
            <UL>
                <Li><A href="https://twitter.com/julesforrest">Twitter</A></Li>
                <Li><A href="https://codepen.io/julesforrest">Codepen</A></Li>
                <Li><A href="mailto:julesforrest@gmail.com">Email</A></Li>
                <Li><A href="https://dribbble.com/julesforrest">Dribbble</A></Li>
                <Li><A href="https://github.com/julesforrest">Github</A></Li>
                <Li>
                    <p>👋</p>
                </Li>
            </UL>
        </Div>
    </footer>
  )
}