"use client";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import DarkModeToggle from './DarkMode';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  isDarkModeToggle?: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Switch Mode', href: '#', current: false, isDarkModeToggle: true },
];

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Disclosure as="nav" className="bg-gray-800 w-full">
        <div className="w-full px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                {/* Your logo or brand here */}
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    item.isDarkModeToggle ? (
                      <div
                        key={item.name}
                        className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300"
                      >
                        <DarkModeToggle />
                      </div>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    )
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              item.isDarkModeToggle ? (
                <div
                  key={item.name}
                  className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-300"
                >
                  <span className="mr-2">{item.name}</span>
                  <DarkModeToggle />
                </div>
              ) : (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              )
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
      
      {/* Main content container */}
      <div className="flex-1 w-full bg-gray-100 dark:bg-gray-900">
        <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
          {/* Your portal content goes here */}
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Welcome to Our Platform</h1>
            
            <div className="w-full max-w-7xl flex flex-wrap justify-center gap-6">
              {/* Admin Portal Card */}
              <div className="w-full sm:w-5/12 bg-black rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-blue-500 mb-6">Admin Portal</h2>
                <div className="space-y-4">
                  <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded">
                    Admin Login
                  </button>
                  <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded">
                    Admin Register
                  </button>
                  <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded">
                    Admin Dashboard
                  </button>
                </div>
              </div>
              
              {/* User Portal Card */}
              <div className="w-full sm:w-5/12 bg-black rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-green-500 mb-6">User Portal</h2>
                <div className="space-y-4">
                  <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded">
                    User Login
                  </button>
                  <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded">
                    User Register
                  </button>
                  <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded">
                    User Dashboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="w-full bg-gray-800 text-gray-300 py-4 text-center">
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  )
}