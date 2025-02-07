

import React, { ReactNode , Fragment , useState, SetStateAction} from "react"
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    Bars3BottomLeftIcon,
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
    XMarkIcon,
  } from '@heroicons/react/24/outline'
import { useParams } from "next/navigation"
import Link from "next/link"
import { useRouter } from "next/router"


interface Props{
    isOpen: boolean,
    setOpen: React.Dispatch<SetStateAction<boolean>>
}



export default function LayoutSidebar({isOpen, setOpen} : Props) {
    const router = useRouter()
    const path = router.pathname

    const navigation = [
        { name: 'داشبورد', href: '/admin', icon: HomeIcon, current: (path === '/admin') ? true : false },
        { name: 'محصولات', href: '/admin/products', icon: FolderIcon, current: (path === '/admin/products') ? true : false },
        { name: 'کاربران', href: '/admin/users', icon: UsersIcon, current: (path === '/admin/users') ? true : false },
        // { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
        // { name: 'Documents', href: '#', icon: InboxIcon, current: false },
        // { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
    ]

    return (
        <>
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 md:hidden" onClose={setOpen}>
                    <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button
                                type="button"
                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={() => setOpen(false)}
                            >
                                <span className="sr-only">Close sidebar</span>
                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                            </div>
                        </Transition.Child>
                        <div className="flex flex-shrink-0 items-center px-4">
                            <h2 className="text-xl text-gray-100 font-[600]">پنل ادمین آزمایشی</h2>
                        </div>
                        <div className="mt-5 h-0 flex-1 overflow-y-auto">
                            <nav className="space-y-1 px-2">
                            {navigation.map((item) => (
                                <Link
                                key={item.name}
                                href={item.href}
                                className ={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                                >
                                <item.icon
                                    className={`ml-4 flex-shrink-0 h-6 w-6 ${item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300'}`}
                                    aria-hidden="true"
                                />
                                {item.name}
                                </Link>
                            ))}
                            </nav>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    <div className="w-14 flex-shrink-0" aria-hidden="true">
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                    </div>
                    </div>
                </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
                    <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
                        <h2 className="text-xl text-gray-100 font-[600]">پنل ادمین آزمایشی</h2>
                    </div>
                    <div className="flex flex-1 flex-col overflow-y-auto">
                    <nav className="flex-1 space-y-1 px-2 py-4">
                        {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                        >
                            <item.icon
                            className={`ml-3 flex-shrink-0 h-6 w-6 ${item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300'}`}
                            aria-hidden="true"
                            />
                            {item.name}
                        </Link>
                        ))}
                    </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
