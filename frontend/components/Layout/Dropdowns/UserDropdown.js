import React, { useContext } from 'react';
import { createPopper } from '@popperjs/core';
import AuthContext from '../../../context/AuthContext';
import { LockClosedIcon, LogoutIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-end',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const { logout } = useContext(AuthContext);
  return (
    <>
      <a
        className="block text-blueGray-500"
        href="#"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center w-8 h-8 text-sm text-white rounded-full bg-blueGray-200">
            <img
              alt="..."
              className="w-full align-middle border-none rounded-full shadow-lg"
              src="/img/profil.png"
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        <Link href="/profile/editPassword">
          <a
            className={
              'text-sm py-2 px-4 font-normal flex w-full whitespace-nowrap bg-transparent text-blueGray-700'
            }
            onClick={(e) => {
              //e.preventDefault();
              closeDropdownPopover();
            }}
          >
            <LockClosedIcon className="mr-2 icon" /> Changer mot de passe
          </a>
        </Link>

        <div className="my-2 border border-gray-100 border-solid" />
        <a
          href="#"
          className={
            'text-sm py-2 px-4 font-bold flex w-full whitespace-nowrap  text-gray-500'
          }
          onClick={async () => {
            await logout();
            closeDropdownPopover();
          }}
        >
          <LogoutIcon className="mr-2 icon" /> Se déconnecter
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
