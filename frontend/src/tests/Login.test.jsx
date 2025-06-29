import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../pages/Login.jsx';

describe('Login Page', () => {
  it('muestra el botón de Google', () => {
    render(<Login />);
    expect(
      screen.getByRole('button', { name: /google/i })
    ).toBeInTheDocument();
  });
});
