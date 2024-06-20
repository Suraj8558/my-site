import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formDataToSend = new FormData(form);

    // Debug: Log the formDataToSend entries
    // for (let [key, value] of formDataToSend?.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    console.log("formDataToSend", formDataToSend);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString()
      });

      if (response.ok) {
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
      data-netlify-recaptcha="true"
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
      <div data-netlify-recaptcha="true"></div>
      <p>
        <button type="submit">Send</button>
      </p>
      {submitted && <p>Form submitted successfully!</p>}
      {error && <p>There was an error submitting the form.</p>}
    </form>
  );
}
