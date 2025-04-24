import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';

export const PyodideInterpreter: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ type: 'input' | 'output', content: string }[]>([
    { type: 'output', content: 'Pyodide Python 3 (WebAssembly)\nType "help", "copyright", "credits" or "license" for more information.' },
    { type: 'output', content: '>>>' },
  ]);
  const [pyodide, setPyodide] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadPyodideScript = async () => {
      if (!(window as any).loadPyodide) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
        script.onload = async () => {
          const pyodideInstance = await (window as any).loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/' });
          setPyodide(pyodideInstance);
          setLoading(false);
        };
        document.body.appendChild(script);
      } else {
        const pyodideInstance = await (window as any).loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/' });
        setPyodide(pyodideInstance);
        setLoading(false);
      }
    };
    loadPyodideScript();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !pyodide) return;
    setHistory(prev => [...prev, { type: 'input', content: input }]);
    try {
      // Redirect stdout and stderr
      let output = '';
      let error = '';
      pyodide.setStdout({
        batched: (data: string) => { output += data; }
      });
      pyodide.setStderr({
        batched: (data: string) => { error += data; }
      });
      let result = await pyodide.runPythonAsync(input);
      // If result is not undefined and not empty, append it
      if (result !== undefined && result !== '') {
        output += result.toString();
      }
      // Show output and error
      if (output) {
        setHistory(prev => [
          ...prev,
          { type: 'output', content: output },
          { type: 'output', content: '>>>' },
        ]);
      }
      if (error) {
        setHistory(prev => [
          ...prev,
          { type: 'output', content: error },
          { type: 'output', content: '>>>' },
        ]);
      }
      if (!output && !error) {
        setHistory(prev => [
          ...prev,
          { type: 'output', content: '' },
          { type: 'output', content: '>>>' },
        ]);
      }
    } catch (err: any) {
      setHistory(prev => [
        ...prev,
        { type: 'output', content: err.toString() },
        { type: 'output', content: '>>>' },
      ]);
    }
    setInput('');
  };

  return (
    <Card className="border-2 border-slate-700">
      <CardContent className="p-4">
        <Typography.H3 className="mb-4">Pyodide Python Interpreter</Typography.H3>
        {loading ? (
          <div className="text-blue-600">Loading Pyodide (Python in browser)...</div>
        ) : (
          <>
            <div ref={terminalRef} className="bg-black text-green-400 p-4 font-mono text-sm h-80 overflow-y-auto mb-4 rounded">
              {history.map((item, index) => (
                <div key={index} className="whitespace-pre-wrap">
                  {item.type === 'input' ? `>>> ${item.content}` : item.content}
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Enter Python command..."
                className="font-mono"
                disabled={loading}
              />
              <Button type="submit" disabled={loading}>Run</Button>
            </form>
          </>
        )}
      </CardContent>
    </Card>
  );
};
