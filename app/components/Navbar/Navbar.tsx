import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./ServiceDialog";
import Contactus from "./Contactus";


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: false },
    { name: 'About us', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false },
    // { name: 'Mentors', href: '#mentors-section', current: false },
    // { name: 'Testimonial', href: '#testimonial-section', current: false },
    // { name: 'Join', href: '#join-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="bg-blue navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <img src={'/assets/logo/logo-dark.png'} alt="logo" className='block lg:hidden pb-4 object-contain w-12 h-12' />
                                <img src={'/assets/logo/logo-dark.png'} alt="logo" className='hidden lg:block pb-4 object-contain w-16 h-16' />
                                {/* <img
                                    className="hidden h-48 w-48 lg:flex object-contain"
                                    src={'/assets/logo/logo.png'}
                                    alt="Jaru logo"
                                /> */}
                            </div>

                            {/* LINKS */}

                            <div className="hidden sm:ml-14 md:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? ' text-darkblue' : 'hover:text-darkblue',
                                                'px-3 py-4 text-15px font-medium space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    {/* <Contactus /> */}
                                </div>
                            </div>
                        </div>

                        {/* SIGNIN DIALOG */}

                        {/* <Signdialog /> */}


                        {/* REGISTER DIALOG */}

                        <Registerdialog />


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block md:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
