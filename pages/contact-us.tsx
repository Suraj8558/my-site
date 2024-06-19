import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Form(): any{
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);
    console.log("formDataToSend", formDataToSend);
    

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString()
      });

      if (response.ok) {
        alert('submitted')
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>Don’t fill this out if you’re human: <input name="bot-field" onChange={handleChange} /></label>
      </p>
      <p>
        <label>Name: <input type="text" name="name" onChange={handleChange} required /></label>
      </p>
      <p>
        <label>Email: <input type="email" name="email" onChange={handleChange} required /></label>
      </p>
      <p>
        <label>Message: <textarea name="message" onChange={handleChange} required></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}
