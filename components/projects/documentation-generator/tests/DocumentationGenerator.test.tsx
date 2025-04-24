import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DocumentationGenerator from '../DocumentationGenerator';

describe('DocumentationGenerator', () => {
  it('renders input and button', () => {
    render(<DocumentationGenerator />);
    expect(screen.getByText('Documentation Generator')).toBeTruthy();
    expect(screen.getByLabelText(/Enter Python Code:/i)).toBeTruthy();
    expect(screen.getByText('Generate Documentation')).toBeTruthy();
  });

  it('shows error for empty input', () => {
    render(<DocumentationGenerator />);
    fireEvent.click(screen.getByText('Generate Documentation'));
    expect(screen.getByText(/Please enter Python code with docstrings/i)).toBeTruthy();
  });

  it('shows error for code without docstrings', () => {
    render(<DocumentationGenerator />);
    const textarea = screen.getByLabelText(/Enter Python Code:/i);
    fireEvent.change(textarea, { target: { value: 'def foo():\n    pass' } });
    fireEvent.click(screen.getByText('Generate Documentation'));
    expect(screen.getByText(/No docstrings found/i)).toBeTruthy();
  });

  it('extracts and displays docstrings', () => {
    render(<DocumentationGenerator />);
    const textarea = screen.getByLabelText(/Enter Python Code:/i);
    fireEvent.change(textarea, { target: { value: 'def greet(name):\n    """Return a greeting message."""\n    return f"Hello, {name}!"' } });
    fireEvent.click(screen.getByText('Generate Documentation'));
    expect(screen.getByText(/Function: greet/i)).toBeTruthy();
    expect(screen.getByText(/Return a greeting message/i)).toBeTruthy();
  });
});
