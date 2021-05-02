import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './index';

describe('Button component', () => {
  it('should render Button', () => {
    const text = 'This should appear :)';
    const { container } = render(<Button>{text}</Button>);
    const el = container;
    expect(el).toHaveTextContent(text);
  });
});
