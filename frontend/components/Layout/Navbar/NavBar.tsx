import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../context/AuthContext';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';

import UserDropdown from '../Dropdowns/UserDropdown';

export default function Navbar() {
  const { user } = useContext(AuthContext);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-8 h-8"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    }

    return (
      <MoonIcon
        className="w-8 h-8"
        role="button"
        onClick={() => setTheme('dark')}
      />
    );
  };
  return (
    <>
      {/* Navbar */}
      <nav className="sticky z-10 flex items-center w-full p-4 mb-5 bg-transparent bg-blue-300 dark:border-gray-700 md:flex-row md:flex-nowrap md:justify-start">
        <div className="flex flex-wrap items-center justify-between w-full px-4 mx-auto md:flex-nowrap md:px-10">
          {/* Brand */}
          <h2 className="hidden text-xl lg:inline-block font-pacifico">
            {user && `Bonjour, ${user?.nom} ${user?.prenom} !`}
          </h2>

          {/* User */}
          <ul className="flex-col items-center hidden list-none md:flex-row md:flex space-x-11">
            <UserDropdown />
            {renderThemeChanger()}
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
