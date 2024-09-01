import { useEffect, useState } from 'react';
import gsap from 'gsap';
import axios from 'axios';

export default function DataList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    gsap.from(".data-item", {
      duration: 1,
      opacity: 0,
      y: 20,
      stagger: 0.2,
    });
  }, [data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => (
        <div key={item.id} className="data-item p-4 bg-white shadow-md rounded-md">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">{item.email}</p>
        </div>
      ))}
    </div>
  );
}
