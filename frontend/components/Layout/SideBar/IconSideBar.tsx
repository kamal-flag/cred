import React, { SVGProps, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  url: string;
}

function IconSideBar({ Icon, title, url }: Props) {
  const router = useRouter();

  useEffect(() => {
    const test = router.pathname.indexOf(`/${url}`);
  });
  return (
    <li>
      <Link href={`/${url}`}>
        <a
          className={`flex space-x-2 items-center text-md py-3 block ${
            router.pathname.indexOf(`/${url}`) !== -1
              ? 'text-blue-700 hover:text-blue-900'
              : 'text-blueGray-700 hover:text-blueGray-500'
          }`}
        >
          <Icon className={`icon mr-2 text-sm `} />
          {title}
        </a>
      </Link>
    </li>
  );
}

export default IconSideBar;
