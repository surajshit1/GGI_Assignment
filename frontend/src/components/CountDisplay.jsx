import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CountDisplay() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/count');
        setCount(response.data.count);
      } catch (error) {
        console.error('Error fetching count', error);
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Number of Submissions: {count}</h2>
    </div>
  );
}
