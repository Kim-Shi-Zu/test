import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PythonInterpreter } from '../PythonInterpreter';

describe('PythonInterpreter', () => {
  it('renders the interpreter interface', () => {
    render(<PythonInterpreter />);
    
    // Check if the title is rendered
    expect(screen.getByText('Python Interactive Interpreter')).toBeTruthy();
    
    // Check if the input field is rendered
    expect(screen.getByPlaceholderText('Enter Python command...')).toBeTruthy();
    
    // Check if the Run button is rendered
    expect(screen.getByText('Run')).toBeTruthy();
    
    // Check if the initial Python prompt is displayed
    expect(screen.getByText(/Python 3\.13\.0/)).toBeTruthy();
    expect(screen.getByText('>>>')).toBeTruthy();
  });

  it('handles basic Python commands', () => {
    render(<PythonInterpreter />);
    
    const input = screen.getByPlaceholderText('Enter Python command...');
    const runButton = screen.getByText('Run');
    
    // Test print command
    fireEvent.change(input, { target: { value: 'print("Hello World")' } });
    fireEvent.click(runButton);
    expect(screen.getByText('Hello World')).toBeTruthy();
    
    // Test arithmetic operation
    fireEvent.change(input, { target: { value: '2 + 2' } });
    fireEvent.click(runButton);
    expect(screen.getByText('4')).toBeTruthy();
    
    // Test help command
    fireEvent.change(input, { target: { value: 'help' } });
    fireEvent.click(runButton);
    expect(screen.getByText(/Welcome to the Python Interpreter Simulator/)).toBeTruthy();
  });

  // TODO: Add more tests for other commands and edge cases
});