import styled from 'styled-components';

export const GoogleButton = styled.div`
  border-radius: 1px;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
  -webkit-transition: background-color .218s,border-color .218s,box-shadow .218s;
  transition: background-color .218s,border-color .218s,box-shadow .218s;
  background-color: #fff;
  background-image: none;
  color: #262626;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  position: relative;
  vertical-align: middle;
  white-space: nowrap;
  max-width: 240px;
  background-color: #4285f4;
  border: none;
  color: #fff;
  text-align: center;
  margin: 0 auto;
  &:hover {
    -webkit-box-shadow: 0 0 3px 3px rgba(66,133,244,.3);
    box-shadow: 0 0 3px 3px rgba(66,133,244,.3);
  }
  &:active {
    background-color: #3367d6;
  }
`;

export const GoogleButtonWrap = styled.div`
  border: 1px solid transparent;
`;

export const GoogleButtonIconWrap = styled.div`
  padding: 15px;
  background-color: #fff;
  -webkit-border-radius: 1px;
  border-radius: 1px;
  float: left;
`;

export const GoogleButtonIcon = styled.div`
  width: 18px;
  height: 18px;
`;

export const GoogleButtonContent = styled.span`
  display: inline-block;
  line-height: 48px;
`;
