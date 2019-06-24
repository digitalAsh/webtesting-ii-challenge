import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'

import Display from './Display';

describe('<App />', () => {

it('renders ball, strike, hit, foul', () => {
    const { getByText } = render(<Display />);

    getByText(/balls/i)
    getByText(/strikes/i)
  })

})