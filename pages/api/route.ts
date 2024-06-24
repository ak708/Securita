// pages/api/fetchUsers.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      console.log('Fetching data from backend API...');
      const response = await fetch('http://localhost:8181/v1/data/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data fetched:', data);
      res.status(200).json(data);
    } catch (error: any) {
      console.error('Error:', error.message);
      res.status(500).json({ error: error.message });
    }
  }else if(req.method=="POST"){
     try {
      console.log('Request body:', req.body);
      const response = await fetch('http://localhost:8181/v1/data/app/rbac/allow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Data fetched:', data);
      res.status(200).json(data);
    } catch (error: any) {
      console.error('Error:', error.message);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
