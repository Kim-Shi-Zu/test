import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FileProcessorCli from '../';

// File Processor CLI component ကိုစစ်ဆေးရန် test cases များ
describe('FileProcessorCli', () => {
  it('renders CLI interface correctly', () => {
    render(<FileProcessorCli />);
    expect(screen.getByText('File Processor CLI')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter arguments (e.g.: --input file.txt --output out/)')).toBeInTheDocument();
  });

  it('parses command-line arguments correctly', () => {
    render(<FileProcessorCli />);
    const input = screen.getByPlaceholderText('Enter arguments (e.g.: --input file.txt --output out/)');
    fireEvent.change(input, { target: { value: '--input data.csv --output results/' } });
    fireEvent.click(screen.getByText('Process Arguments'));
    
    expect(screen.getByText('Parsed Arguments:')).toBeInTheDocument();
    expect(screen.getByText('--input')).toBeInTheDocument();
    expect(screen.getByText('data.csv')).toBeInTheDocument();
    expect(screen.getByText('--output')).toBeInTheDocument();
    expect(screen.getByText('results/')).toBeInTheDocument();
  });
});