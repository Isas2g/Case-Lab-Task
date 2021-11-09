import React from "react";
import styled from "styled-components";

interface Props {
  src: string;
  role: string | null;
}

const AvatarImage = styled.img`
  width: 200px;
  height: 200px;
`;

const AvatarDiv = styled.div`
  width: 200px;
  height: 200px;
`;
const Role = styled.p`
  font-family: "Roboto", sans-serif;
  color: black;
`;

export const Avatar: React.FC<Props> = ({ src, role }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <AvatarDiv className="m-2">
        <AvatarImage src={src} />
      </AvatarDiv>
      <Role className="role">Роль: {role === "teacher" ? "учитель." : "ученик."}</Role>
    </div>
  );
};
