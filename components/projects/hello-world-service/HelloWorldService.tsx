import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/**
 * Hello World Service Component
 * 
 * A simple component that demonstrates basic Python concepts
 * from Lesson 1.1: What is Python?
 */
const HelloWorldService: React.FC = () => {
  const [message, setMessage] = React.useState('Hello, World!');
  const [count, setCount] = React.useState(0);

  const runPythonExample = () => {
    // TODO: In a real implementation, this would execute Python code
    // or simulate the execution of Python code
    setCount(prev => prev + 1);
    setMessage(`Hello, Python! (Run count: ${count + 1})`);
  };

  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle>Hello World Service</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-4 border rounded-md bg-slate-50 mb-4">
          <p className="text-lg font-mono">{message}</p>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Python Equivalent:</h3>
            <pre className="p-2 bg-gray-100 rounded-md overflow-x-auto">
              <code className="text-sm">
{`# A simple Python Hello World program
print("Hello, World!")

# The Zen of Python
import this`}
              </code>
            </pre>
          </div>
          <Button 
            onClick={runPythonExample}
            className="mt-4"
            aria-label="Run Example"
          >
            Run Example
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HelloWorldService;