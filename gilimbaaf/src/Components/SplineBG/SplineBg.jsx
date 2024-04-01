import Spline from "@splinetool/react-spline";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const SplineBg = () => {
  return (
      <BackgroundContainer>
          <Spline className="spline" scene="https://prod.spline.design/jvlSuYrsvhZcFnXi/scene.splinecode"></Spline>
    </BackgroundContainer>
  )
}


export default SplineBg