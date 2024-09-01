import { useState } from 'react';
import axios from 'axios';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    age: '',
    experience: ''
  });
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, course, age, experience } = formData;
    
    if (name && email && phone && course && age && experience) {
      try {
        await axios.post('http://localhost:5000/submit', formData);
        setSubmitMessage('Data submitted successfully');
        setFormData({ name: '', email: '', phone: '', course: '', age: '', experience: '' });
      } catch (error) {
        console.error('Error submitting form', error);
        setSubmitMessage('Failed to submit data');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 uppercase">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full shadow-sm sm:text-sm border-zinc-900 p-2 rounded-md bg-zinc-200"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 uppercase">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full shadow-sm sm:text-sm border-zinc-900 p-2  rounded-md bg-zinc-200"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 uppercase">
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full shadow-sm sm:text-sm border-zinc-900 p-2  rounded-md bg-zinc-200"
        />
      </div>
      <div>
        <label htmlFor="course" className="block text-sm font-medium text-gray-700 uppercase">
          Course
        </label>
        <input
          type="text"
          name="course"
          id="course"
          value={formData.course}
          onChange={handleChange}
          className="mt-1 block w-full shadow-sm sm:text-sm border-zinc-900 p-2  rounded-md bg-zinc-200"
        />
      </div>
      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700 uppercase">
          Age
        </label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
          className="mt-1 block w-full shadow-sm sm:text-sm border-zinc-900 p-2  rounded-md bg-zinc-200"
        />
      </div>
      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 uppercase">
          Experience
        </label>
        <textarea
          name="experience"
          id="experience"
          value={formData.experience}
          onChange={handleChange}
          className="mt-1 block w-full shadow-sm sm:text-sm border-zinc-900 p-2 rounded-md bg-zinc-200"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-red-600 text-white font-medium py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-red-500"
      >
        Submit
      </button>
      {submitMessage && <p className="mt-4 text-green-500">{submitMessage}</p>}
    </form>
  );
}
