import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  overflow: hidden;
  position: relative;
`;

const ImageContent = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 40%;
  background-color: rgba(0, 0, 0, 0.1);
`;

function Image(props) {
  const { width, height, src, alt, isBackgroundImageNeeded, className } = props;

  return (
    <ImageWrapper width={width} height={height}>
      <ImageContent src={src} alt={alt} className={className} />
      {isBackgroundImageNeeded && <ImageBackground />}
    </ImageWrapper>
  );
}

export default Image;
