import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Home Page', () => {
  it('renders the welcome heading', () => {
    render(<Home />);
    expect(screen.getByTestId('home-title')).toHaveTextContent('Welcome to Learnflo!');
  });
});
