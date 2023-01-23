import styled from 'styled-components';

const StyledBox = styled.div`
    background: ${props => props.bgColor};
    width: 100px;
    height: 100px;
    margin: 20px;
    display: inline-block;
`;

export default StyledBox;


