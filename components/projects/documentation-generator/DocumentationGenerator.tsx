import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Documentation Generator component for Lesson 1.6
const DocumentationGenerator: React.FC = () => {
  const [code, setCode] = useState('');
  const [docs, setDocs] = useState<string[]>([]);
  const [error, setError] = useState('');

  // Simple docstring extraction (for demo purposes)
  const extractDocstrings = (code: string) => {
    const docstringRegex = /def\s+([\w_]+)\s*\([^)]*\):\s*\"\"\"([\s\S]*?)\"\"\"/g;
    const matches = Array.from(code.matchAll(docstringRegex));
    if (matches.length === 0) return [];
    return matches.map(match => `Function: ${match[1]}\n${match[2].trim()}`);
  };

  const handleGenerate = () => {
    if (!code.trim()) {
      setError('Please enter Python code with docstrings.');
      setDocs([]);
      return;
    }
    const extracted = extractDocstrings(code);
    if (extracted.length === 0) {
      setError('No docstrings found. Make sure your functions have triple-quoted docstrings.');
      setDocs([]);
    } else {
      setError('');
      setDocs(extracted);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Documentation Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <label htmlFor="code-input" className="block text-sm font-medium mb-1">
            Enter Python Code:
          </label>
          <textarea
            id="code-input"
            className="w-full h-32 p-2 border rounded font-mono text-sm"
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder={`def greet(name):\n    """Return a greeting message."""\n    return f"Hello, {name}!"`}
          />
          <Button onClick={handleGenerate}>Generate Documentation</Button>
          {error && <div className="p-2 bg-red-100 border border-red-300 rounded text-red-700">{error}</div>}
          {docs.length > 0 && (
            <div className="mt-4">
              <h3 className="font-medium mb-2">Extracted Documentation:</h3>
              <ul className="list-disc pl-6">
                {docs.map((doc, i) => (
                  <li key={i}><pre className="whitespace-pre-wrap">{doc}</pre></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <span className="text-xs text-muted-foreground">Simulates Python's help() and pydoc output for your code.</span>
      </CardFooter>
    </Card>
  );
};

export default DocumentationGenerator;
