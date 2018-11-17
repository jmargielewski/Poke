import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from 'components/AppHeader/AppHeader';

it('App Header', () => {
  const wrapped = shallow(<AppHeader />);

  expect(wrapped.find('nav').length).toEqual(1);
});
