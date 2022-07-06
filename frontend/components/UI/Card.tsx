import React from 'react';

interface Props {
  title: string;
  children: any;
}

function Card({ title, children }: Props) {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <div className="px-5 py-3 text-lg font-bold text-gray-900 uppercase border bg-gray-50">
        {title}
      </div>
      <div className="flex-col p-5 space-y-2 bg-slate-100">{children}</div>
    </div>
  );
}

export default Card;
