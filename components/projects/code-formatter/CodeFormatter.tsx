import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/card';

/**
 * Code Formatter component that helps users format Python code according to PEP 8 standards
 * ကုဒ်ဖော်မတ်တာ ကွန်ပိုနန့် - Python ကုဒ်များကို PEP 8 စံနှုန်းအတိုင်း ပုံစံချပေးသည်
 */
const CodeFormatter: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [formattedCode, setFormattedCode] = useState<string>('');
  const [error, setError] = useState<string>('');

  /**
   * Format the Python code by applying basic formatting rules
   * Python ကုဒ်ကို အခြေခံ ဖော်မတ်တင် စည်းမျဉ်းများဖြင့် ပုံစံချပေးသည်
   */
  const formatCode = () => {
    if (!code.trim()) {
      setError('Please enter some Python code to format');
      setFormattedCode('');
      return;
    }

    try {
      // Apply basic formatting rules
      // This is a simplified version - a real formatter would be more complex
      let result = code;
      
      // Fix spacing around operators
      result = result.replace(/([\+\-\*\/\%\=])/g, ' $1 ');
      result = result.replace(/\s+/g, ' '); // Remove extra spaces
      result = result.replace(/\s*([\(\[\{])\s*/g, '$1');
      result = result.replace(/\s*([\)\]\}])\s*/g, '$1 ');
      result = result.replace(/\s*[:,]\s*/g, ', ');
      result = result.replace(/\s*:(?!,)/g, ': ');
      
      // Fix indentation (simplified)
      const lines = result.split('\n');
      const formattedLines = lines.map(line => {
        // Count leading spaces
        const leadingSpaces = line.match(/^\s*/)![0].length;
        // Round to nearest multiple of 4
        const newSpaces = Math.round(leadingSpaces / 4) * 4;
        return ' '.repeat(newSpaces) + line.trim();
      });
      
      setFormattedCode(formattedLines.join('\n'));
      setError('');
    } catch (err) {
      setError('Error formatting code: ' + (err instanceof Error ? err.message : String(err)));
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Python Code Formatter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label htmlFor="code-input" className="block text-sm font-medium mb-1">
              Enter Python Code:
            </label>
            <textarea
              id="code-input"
              className="w-full h-40 p-2 border rounded font-mono text-sm"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={'# Enter your Python code here\ndef example_function():\n    print("Hello World!")\nexample_function()'}
            />
          </div>
          
          {error && (
            <div className="p-2 bg-red-100 border border-red-300 rounded text-red-700">
              {error}
            </div>
          )}
          
          {formattedCode && (
            <div>
              <label htmlFor="formatted-output" className="block text-sm font-medium mb-1">
                Formatted Code:
              </label>
              <pre
                id="formatted-output"
                className="w-full h-40 p-2 border rounded font-mono text-sm overflow-auto bg-gray-50"
              >
                {formattedCode}
              </pre>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={formatCode}>Format Code</Button>
      </CardFooter>
    </Card>
  );
};

export default CodeFormatter;