import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CodeFormatter from '../CodeFormatter';

/**
 * Test suite for the CodeFormatter component
 * CodeFormatter ကွန်ပိုနန့်အတွက် စမ်းသပ်မှုများ
 */
describe('CodeFormatter', () => {
  test('renders the component correctly', () => {
    render(<CodeFormatter />);
    
    // Check if the title is rendered
    expect(screen.getByText('Python Code Formatter')).toBeTruthy();
    
    // Check if the textarea is rendered
    expect(screen.getByLabelText(/Enter Python Code:/i)).toBeTruthy();
    
    // Check if the format button is rendered
    expect(screen.getByRole('button', { name: /Format Code/i })).toBeTruthy();
  });

  test('formats code when button is clicked', () => {
    render(<CodeFormatter />);
    
    // Get the textarea and button
    const textarea = screen.getByLabelText(/Enter Python Code:/i);
    const formatButton = screen.getByRole('button', { name: /Format Code/i });
    
    // Enter some code
    fireEvent.change(textarea, { target: { value: 'def test():\n  x=1+2\n  return x' } });
    
    // Click the format button
    fireEvent.click(formatButton);
    
    // Check if the formatted code is displayed
    const formattedOutput = screen.getByText(/def test\(\):/i);
    expect(formattedOutput).toBeTruthy();
  });

  test('shows error for empty input', () => {
    render(<CodeFormatter />);
    
    // Get the button
    const formatButton = screen.getByRole('button', { name: /Format Code/i });
    
    // Click the format button without entering any code
    fireEvent.click(formatButton);
    
    // Check if error message is displayed
    expect(screen.getByText('Please enter some Python code to format')).toBeTruthy();
  });
});