import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';

/**
 * PythonInterpreter - ပိုင်သွန် Interpreter ကို simulation လုပ်ပေးသော component
 * ရိုးရှင်းသော Python commands များကို စမ်းသပ်နိုင်ရန် interactive terminal တစ်ခုကို simulate လုပ်ပေးသည်
 */
export const PythonInterpreter: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{type: 'input' | 'output', content: string}[]>([
    { type: 'output', content: 'Python 3.13.0 (main, Oct 2023, 00:00:00)\n[GCC 11.2.0] on linux\nType "help", "copyright", "credits" or "license" for more information.' },
    { type: 'output', content: '>>>' },
  ]);

  // ပိုင်သွန် command များကို simulate လုပ်ပေးသော function
  const executeCommand = (cmd: string) => {
    // Command များကို simulate လုပ်ခြင်း
    let output = '';
    
    if (cmd.trim() === 'help') {
      output = 'Welcome to the Python Interpreter Simulator!\nThis is a simplified version of the Python REPL.\nTry some basic commands like:\n- print("Hello World")\n- 2 + 2\n- import this';
    } else if (cmd.trim() === 'copyright') {
      output = 'Copyright (c) 2001-2023 Python Software Foundation.\nAll Rights Reserved.';
    } else if (cmd.trim() === 'credits') {
      output = 'Thanks to Guido van Rossum and the Python development team.\nSee www.python.org for more information.';
    } else if (cmd.trim() === 'license') {
      output = 'Python is distributed under the PSF License. See www.python.org for details.';
    } else if (cmd.trim() === 'import this') {
      output = 'The Zen of Python, by Tim Peters\n\nBeautiful is better than ugly.\nExplicit is better than implicit.\nSimple is better than complex.\nComplex is better than complicated.\nFlat is better than nested.\nSparse is better than dense.\nReadability counts.\nSpecial cases aren\'t special enough to break the rules.\nAlthough practicality beats purity.\nErrors should never pass silently.\nUnless explicitly silenced.\nIn the face of ambiguity, refuse the temptation to guess.\nThere should be one-- and preferably only one --obvious way to do it.\nAlthough that way may not be obvious at first unless you\'re Dutch.\nNow is better than never.\nAlthough never is often better than *right* now.\nIf the implementation is hard to explain, it\'s a bad idea.\nIf the implementation is easy to explain, it may be a good idea.\nNamespaces are one honking great idea -- let\'s do more of those!';
    } else if (cmd.startsWith('print(')) {
      try {
        // Extract the content inside print()
        const content = cmd.substring(6, cmd.length - 1).trim();
        // Handle string literals
        if ((content.startsWith('"') && content.endsWith('"')) || 
            (content.startsWith('\'') && content.endsWith('\'')))
        {
          output = content.substring(1, content.length - 1);
        } else {
          // Simple evaluation for numbers
          if (/^[\d\+\-\*\/\s\.\(\)]+$/.test(content)) {
            try {
              output = eval(content).toString();
            } catch {
              output = 'Error: Invalid expression';
            }
          } else {
            output = content;
          }
        }
      } catch {
        output = 'Error: Invalid print statement';
      }
    } else if (/^[\d\+\-\*\/\s\.\(\)]+$/.test(cmd)) {
      try {
        output = eval(cmd).toString();
      } catch {
        output = 'Error: Invalid expression';
      }
    } else {
      output = 'Error: Command not recognized or not implemented in this simulator';
    }

    return output;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user input to history
    setHistory(prev => [...prev, { type: 'input', content: input }]);
    
    // Execute command and get output
    const output = executeCommand(input);
    
    // Add output to history
    setHistory(prev => [...prev, 
      { type: 'output', content: output },
      { type: 'output', content: '>>>' }
    ]);
    
    // Clear input
    setInput('');
  };

  return (
    <Card className="border-2 border-slate-700">
      <CardContent className="p-4">
        <Typography.H3 className="mb-4">Python Interactive Interpreter</Typography.H3>
        
        <div className="bg-black text-green-400 p-4 font-mono text-sm h-80 overflow-y-auto mb-4 rounded">
          {history.map((item, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {item.type === 'input' ? `>>> ${item.content}` : item.content}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setInput(e.target.value)}
            placeholder="Enter Python command..."
            className="font-mono"
          />
          <Button type="submit">Run</Button>
        </form>
      </CardContent>
    </Card>
  );
};