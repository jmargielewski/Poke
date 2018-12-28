import styled from 'styled-components';
import { tundraNight } from '../../constants/colors';

const Header = styled.header`
  line-height: 75px;
  background: ${tundraNight};
`;

const Navigation = styled.nav`
  display: flex;
`;

const NavLeft = styled.div`
  flex-grow: 1;
`;

const NavRight = styled.div`
  flex-grow: 0;
`;

export {
  Header,
  Navigation,
  NavLeft,
  NavRight,
};
