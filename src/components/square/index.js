import posed from 'react-pose';
import styled from 'styled-components';

const Square = styled.div`
  margin:20px;
  height: 50px;
  width: 50px;
  background-color: ${props => props.color ?  props.theme.fireColors[props.color]  : props.theme.fireColors.red};
`;

const SquareAnimated = posed(Square)({
  start: {x: 0, transition: {duration: 1000}},
  end: {x: 100, transition: {duration: 1000}},
});

export default SquareAnimated;


