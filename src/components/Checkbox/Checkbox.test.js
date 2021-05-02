import React from 'react';
import { render } from '@testing-library/react';
import { Checkbox } from './index';

describe('Checkbox component', () => {
  it('should render Checkbox onClick', () => {
    const onClickMock = jest.fn();
    const { container } = render(<Checkbox onClick={onClickMock} index={1} />);
    expect(onClickMock).toHaveBeenCalled();
  });
});
