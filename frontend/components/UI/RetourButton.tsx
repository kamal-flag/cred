import { ArrowLeftIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';

interface Props {
  url: any;
}
function RetourButton({ url }: Props) {
  return (
    <Link href={url}>
      <button className="buttonRetour">
        <ArrowLeftIcon className="icon mr-2" /> Retour
      </button>
    </Link>
  );
}

export default RetourButton;
