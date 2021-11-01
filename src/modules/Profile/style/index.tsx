import React from 'react';
import styled from 'styled-components';

interface Props {
    src: string;
}

const AvatarImage = styled.img`
  width: 200px;
  height: 200px;
`

const AvatarDiv = styled.div`
  width: 200px;
  height: 200px;
  background: #f0f0f0;
`

export const Avatar: React.FC<Props> = ({src}) => {
    return(
        <AvatarDiv className="m-2">
            <AvatarImage src={src} />
        </AvatarDiv>
    )
}
