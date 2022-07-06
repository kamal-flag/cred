import React, { useContext } from 'react';
import Link from 'next/link';
import UserDropdown from '../Dropdowns/UserDropdown';
import {
  BriefcaseIcon,
  CollectionIcon,
  DesktopComputerIcon,
  FireIcon,
  GlobeIcon,
  LibraryIcon,
  MenuIcon,
  OfficeBuildingIcon,
  SparklesIcon,
  UserGroupIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/solid';
import IconSideBar from './IconSideBar';
import AuthContext from '../../../context/AuthContext';

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState('hidden');
  const { user } = useContext(AuthContext);

  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between font-bold text-gray-900 bg-gray-100 shadow-xl md:min-h-full md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64">
        <Link href="/dashboard">
          <a
            href="#"
            className="inline-block px-6 pt-4 pb-4 mr-0 text-lg font-bold text-left uppercase bg-blue-300 md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
          >
            <img src="/img/logo.png" />
          </a>
        </Link>

        <div className="flex flex-wrap items-center justify-between w-full px-6 mx-auto md:flex-col md:items-stretch md:flex-nowrap">
          {/* Toggler */}
          <button
            className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
            type="button"
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          >
            <MenuIcon className="icon" />
          </button>
          {/* Brand */}

          {/* User */}
          <ul className="flex flex-wrap items-center list-none md:hidden">
            <li className="relative inline-block">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
                    >
                      CRED APP
                    </a>
                  </Link>
                </div>
                <div className="flex justify-end w-6/12">
                  <button
                    type="button"
                    className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                    onClick={() => setCollapseShow('hidden')}
                  >
                    <XIcon className="icon" />
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="mb-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500">
              Général
            </h6>
            {/* Navigation */}

            <ul className="flex flex-col list-none md:flex-col md:min-w-full">
              {/*<IconSideBar
                Icon={DesktopComputerIcon}
                title={'Tableau de bord'}
                url={'dashboard'}
          />*/}

              <IconSideBar
                Icon={OfficeBuildingIcon}
                title={'Entreprise'}
                url={'entreprise'}
              />
            </ul>

            {/* Divider */}
            <hr className="mb-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500">
              Configuration
            </h6>
            {/* Navigation */}
            <ul className="flex flex-col list-none md:flex-col md:min-w-full">
              <IconSideBar
                Icon={BriefcaseIcon}
                title={'Assurance'}
                url={'config/assurance'}
              />

              <IconSideBar
                Icon={LibraryIcon}
                title={'Bureau douanier'}
                url={'config/bureau'}
              />

              <IconSideBar
                Icon={GlobeIcon}
                title={'Pays'}
                url={'config/pays'}
              />

              <IconSideBar
                Icon={UserGroupIcon}
                title={'Associé / Gérant'}
                url={'config/associe'}
              />

              <IconSideBar
                Icon={SparklesIcon}
                title={"Donneur d'ordre"}
                url={'config/donneur'}
              />

              <IconSideBar
                Icon={CollectionIcon}
                title={'Document caution'}
                url={'config/document'}
              />
            </ul>
            {user?.role == 2 && (
              <>
                {/* Divider */}
                <hr className="mb-4 md:min-w-full" />
                {/* Heading */}
                <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500">
                  Administration
                </h6>

                <ul className="flex flex-col list-none md:flex-col md:min-w-full">
                  <IconSideBar
                    Icon={UsersIcon}
                    title={'Utilisateurs'}
                    url={'admin/user'}
                  />
                </ul>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
