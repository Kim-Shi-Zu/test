import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// CLI command-line argument များကိုကိုင်တွယ်ရန် component
const FileProcessorCli = () => {
  const [inputArgs, setInputArgs] = useState('');
  const [parsedArgs, setParsedArgs] = useState<string[]>([]);

  // Command-line arguments များကိုပြင်ဆင်ရန် function
  const parseArguments = () => {
    const args = inputArgs.split(' ').filter(arg => arg.trim() !== '');
    setParsedArgs(args);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">File Processor CLI</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Command-line arguments:</label>
          <input
            type="text"
            value={inputArgs}
            onChange={(e) => setInputArgs(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter arguments (e.g.: --input file.txt --output out/)"
          />
        </div>

        <Button onClick={parseArguments}>
          Process Arguments
        </Button>

        {parsedArgs.length > 0 && (
          <div className="mt-4">
            <h3 className="font-medium mb-2">Parsed Arguments:</h3>
            <ul className="list-disc pl-6">
              {parsedArgs.map((arg, index) => (
                <li key={index}>{arg}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded">
        <h3 className="font-medium mb-2">Example Valid Commands:</h3>
        <code className="block mb-2">$ python processor.py --input data.csv --output results/</code>
        <code className="block mb-2">$ python processor.py -v --overwrite</code>
      </div>
    </div>
  );
};

export default FileProcessorCli;