import React from 'react';
import { mount } from 'enzyme';
import Signup from 'containers/auth/Signup';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Signup />
    </Root>,
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has all elements', () => {
  expect(wrapped.find('form').length).toEqual(1);
  expect(wrapped.find('input').length).toEqual(2);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('inputs behaviour', () => {
  it('has a input type text that users can type in', () => {
    wrapped.find('input[type="text"]').simulate('change', {
      target: { value: 'something' },
    });
    wrapped.update();
    expect(wrapped.find('input[type="text"]').prop('value')).toEqual('something');
  });

  it('has a input type password that users can type in', () => {
    wrapped.find('input[type="password"]').simulate('change', {
      target: { value: 'something' },
    });
    wrapped.update();
    expect(wrapped.find('input[type="password"]').prop('value')).toEqual('something');
  });
});
