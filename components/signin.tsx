import {useState} from 'react';
import {Button} from '@/components/ui/button';
import { Input } from './ui/input';
const SignIn: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    
    const fetchData = async () => {
        try {
            const res = await fetch('/api/route', {
                method: 'GET'
            });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const result = await res.json();
            setData(result);
            setError(null);
        } catch (error: any) {
            console.error('Error:', error.message);
            setData(null);
            setError(error.message);
        }
    };
    return(
        <div className = "justify-center items-center">
            <Input type = "text" placeholder = "Username" />
            <Input type = "password" placeholder = "Password" />
            <Button onClick = {fetchData}>Sign In</Button>
        </div>
    )
};
export default SignIn;