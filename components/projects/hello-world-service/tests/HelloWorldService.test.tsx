import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { HelloWorldService } from '../';

/**
 * Test suite for the HelloWorldService component
 */
describe('HelloWorldService', () => {
  // TODO: Implement actual tests
  
  it('renders without crashing', () => {
    // Arrange
    render(<HelloWorldService />);
    
    // Assert
    expect(screen.getByText('Hello World Service')).toBeTruthy();
  });

  it('displays the initial hello world message', () => {
    // Arrange
    render(<HelloWorldService />);
    
    // Assert
    expect(screen.getByText('Hello, World!')).toBeTruthy();
  });

  it('updates the message when the Run Example button is clicked', () => {
    // Arrange
    render(<HelloWorldService />);
    
    // Act
    fireEvent.click(screen.getByText('Run Example'));
    
    // Assert
    expect(screen.getByText('Hello, Python! (Run count: 1)')).toBeTruthy();
  });
});