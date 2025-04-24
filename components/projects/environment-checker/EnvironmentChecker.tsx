import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Corrected the Button component path

// ပတ်ဝန်းကျင်အချက်အလက်များကိုစစ်ဆေးရန် component
const EnvironmentChecker = () => {
  const [pythonVersion, setPythonVersion] = useState('3.13.0');
  const [venvStatus, setVenvStatus] = useState('active');
  const [packages, setPackages] = useState(['pip 23.3.1', 'setuptools 68.2.2']);
  const [osInfo, setOsInfo] = useState('Windows 10');

  // ပတ်ဝန်းကျင်အချက်အလက်များကိုရယူရန် function
  const checkEnvironment = () => {
    setPythonVersion('3.13.0');
    setVenvStatus('active');
    setPackages(['pip 23.3.1', 'setuptools 68.2.2', 'numpy 1.26.0']);
    setOsInfo('Windows 11 23H2');
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Environment Checker</h2>
      
      <div className="space-y-2">
        <p>Python Version: {pythonVersion}</p>
        <p>Virtual Environment: {venvStatus}</p>
        <p>Operating System: {osInfo}</p>
        
        <h3 className="font-medium mt-2">Installed Packages:</h3>
        <ul className="list-disc pl-6">
          {packages.map((pkg, i) => (
            <li key={i}>{pkg}</li>
          ))}
        </ul>
      </div>

      <Button 
        onClick={checkEnvironment} 
        variant="default" 
        size="sm"
      >
        Check Environment
      </Button>
    </div>
  );
};

export default EnvironmentChecker;