import styled from "styled-components";

export const UL = styled.ul`
  list-style-type: none;
  display: inline-grid;
  grid-auto-flow: row;
  grid-gap: 24px;
  justify-items: center;
  margin: auto;
  @media (min-width: 500px) {
    grid-auto-flow: column;
  }
`;
export const A = styled.a`
  color: white;
  text-decoration: none;
  box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.4);
  :hover {
    box-shadow: inset 0 -1.2em 0 hsla(0, 0%, 100%, 0.4);
  }
`;
export const LI = styled.li`
  :last-child {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  :hover ~ li p {
    animation: wave-animation 0.3s infinite;
`;
export const DIV = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  background-color: #2c3034 !important;
  line-height: 1.3;
  font-family: 'Open Sans', sans-serif;
  text-transform: lowercase;
  letter-spacing: 10px;
`;
