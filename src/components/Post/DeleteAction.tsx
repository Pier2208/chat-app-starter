import { Trash } from 'lucide-react';

interface DeleteActionProps {
  postId: string;
}

export default function DeleteAction({ postId }: DeleteActionProps) {
  return <Trash className="h-5 w-5 ml-2 text-slate-700 hover:text-slate-500 cursor-pointer" />;
}
