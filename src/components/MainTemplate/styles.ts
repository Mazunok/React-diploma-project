import styled from "styled-components";
import { Color } from "../../ui/colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: ${Color.Black};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export { Wrapper, Container };
