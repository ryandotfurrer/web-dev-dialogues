import { useState } from 'preact/hooks';

export default function ContactForm() {
  const [responseMessage, setResponseMessage] = useState('');

  async function submit(e: SubmitEvent) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData
    });
    const data = await response.json();

    if (data.message) {
      setResponseMessage(data.message);
    }

    window.location.href = '/thanks';
  }

  return (
    <form class="flex flex-col gap-2" onSubmit={submit}>
      <label htmlFor="name">name</label>
      <input class="input mb-4" type="text" id="name" name="name" required />
      <label htmlFor="email">email</label>
      <input class="input mb-4" type="email" id="email" name="email" required />

      <label htmlFor="message">message</label>
      <textarea class="input" id="message" name="message" required />

      <div class="my-6 flex w-full justify-end">
        <button class="btn w-full justify-center lg:w-auto">
          <span class="rounded-full px-12 py-3 text-center text-sm text-light-text-heading dark:text-white">
            Submit
          </span>
        </button>
      </div>
    </form>
  );
}
