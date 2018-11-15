import React from 'react';
import { shallow } from 'enzyme';
import MainLayout from 'containers/layout/MainLayout';
import PageHeader from 'containers/PageHeader';

it('shows a page\'s header', () => {
  const wrapped = shallow(<MainLayout />);

  expect(wrapped.find(PageHeader).length).toEqual(1);
});
