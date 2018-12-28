import styled from 'styled-components';

export const LanguageChooserWrap = styled.div`
  display: inline-block;
  padding-right: 25px;
`;

export const CurrentFlag = styled.div`
  position: relative;
  display: inline;
  border: 1px solid #fff;
  padding: 8px 20px 8px 8px;
  &::before{
  content: '';
  width: 0;
  height: 0;
  border-width: 4px;
  border-style: solid;
  border-color: #fff transparent transparent transparent;
  position: absolute;
  top: 47%;
  right: 7px;
  }
`;
