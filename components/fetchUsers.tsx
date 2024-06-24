// components/FetchUsers.tsx

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from './ui/input';
const FetchUsers: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
const [response, setResponse] = useState<any>(null);
const [username, setUsername] = useState('');
  const [object, setObject] = useState('');
  const [action, setAction] = useState('');
  const [type, setType] = useState('');
  const fetchData = async () => {
    try {
      const res = await fetch('/api/route', {
        method: 'GET',
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      setData(result);
      setError(null); // Clear any previous errors
    } catch (error: any) {
      console.error('Error:', error.message);
      setData(null); // Clear any previous data
      setError(error.message);
    }
  };

  const postData = async () => {
    try {
      const res = await fetch('/api/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: {
            user: username,
            action: action,
            object: object,
            type: type,
          },
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      setResponse(result);
      setError(null); // Clear any previous errors
    } catch (error: any) {
      console.error('Error:', error.message);
      setResponse(null); // Clear any previous responses
      setError(error.message);
    }
  };

  return (
    <div className = "flex flex-row gap-5">
    <div className="p-2">
      <Button onClick={fetchData}>Fetch Users</Button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <p>Error: {error}</p>}
    </div>
    <div className = "justify-center items-center flex flex-col gap-5">
            <Input type = "text" placeholder = "Username" onChange = {(e)=>setUsername(e.target.value)}/>
            <Input type = "password" placeholder = "Object" onChange={(e)=>setObject(e.target.value)}/>
            <Input type= "text" placeholder='Action' onChange = {(e) =>setAction(e.target.value)}/>
            <Input type= "text" placeholder='Type' onChange={(e)=>{setType(e.target.value)}}/>
            <Button onClick = {postData}>Sign In</Button>
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>
            }
            {error && <p>Error: {error}</p>}
        </div>
    </div>
  );
};

export default FetchUsers;
