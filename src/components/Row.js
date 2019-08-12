import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  ${props => props.justify
    ? `justify-content: ${props.justify}`
    : ''};
  ${props => props.align
    ? `align-items: ${props.align}`
    : ''};
`;

export default Row;
