import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  border-radius: 100px;
  background-color: #4285f4;
  border: none;
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .25);
  transition: box-shadow .218s;
  &:hover {
    box-shadow: 0 0 3px 3px rgba(66, 133, 244, .3);
  }
  ${({ outlined }) => outlined && `
    background-image: none;
    background: transparent;
    border: 1px solid #4285f4;
  `}
  span {
    font-size: 14px;
    text-align: center;
    color: #ffffff;
    ${({ outlined }) => outlined && `
      color: #4285f4;
    `}
  }
  i {
    text-align: center;
  }
`;
