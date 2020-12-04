import React from 'react';
import { render } from '@testing-library/react';
import RateQuoteUI from './RateQuoteUI';


test('renders app correctly', () => {
  const { container } = render(<RateQuoteUI />);
  expect(container).toMatchSnapshot()
});


