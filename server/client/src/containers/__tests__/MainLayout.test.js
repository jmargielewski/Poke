import React from 'react';
import { shallow } from 'enzyme';
import MainLayout from '../layout/MainLayout';
import Header from '../../components/Header';

it('shows a navigation', () => {
  const wrapped = shallow(<MainLayout />);

  expect(wrapped.find(Header).length).toEqual(1);
});
