import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';



test('it should render', () => {
  const { container, getByText,debug } = render(<App/>)
  expect(getByText('Data Grid using React')).toBeInTheDocument()

})
