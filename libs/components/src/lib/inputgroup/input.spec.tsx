import { render } from '@testing-library/react';

import InputGroup from './input';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputGroup />);
    expect(baseElement).toBeTruthy();
  });
});
