import { Plus } from 'lucide-react';
import { ChangeEvent, FormEvent, memo, useCallback, useState } from 'react';

function Form() {
  const [{ title, message }, setState] = useState({
    title: '',
    message: '',
  });

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !message) return;
  };

  return (
    <form className="flex flex-col w-full gap-y-8" onSubmit={handleFormSubmit}>
      <input type="text" className="w-full p-2" name="title" value={title} onChange={handleChange} />

      <textarea className="p-2" name="message" rows={3} value={message} onChange={handleChange}></textarea>
      <button
        type="submit"
        className="h-12 w-12 text-slate-700 bg-slate-200 flex items-center justify-center cursor-pointer hover:bg-slate-100"
      >
        <Plus />
      </button>
    </form>
  );
}

const MessageForm = memo(Form);

export default MessageForm;
