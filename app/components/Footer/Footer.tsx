"use client";

import Link from "next/link";
import RequestService from "../Navbar/ServiceDialog";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: { text: string, link: string }[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Overview",
        link: [{ text: 'About us', link: '/about' }, { text: 'Services', link: '/services' }],
    },
    // {
    //     id: 2,
    //     section: "Support",
    //     link: ['Help center', 'Terms of service', 'Legal', 'Privacy Policy', 'Status']
    // }
]

const footer = () => {

    return (
        <div className="bg-darkblue" id="first-section">
            <div className="mx-auto max-w-2xl pt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4'>
                        <img src={'/assets/logo/logo.png'} alt="logo" className='pb-4 object-contain w-24 h-24' />
                        <h3 className='text-white text-lg font-medium leading-9 mb-4 lg:mb-20'> Bringing peace to pet owners <br></br> happiness to pets </h3>
                        <div className='flex gap-4 item-center align-center'>
                            <p className="text-white text-md font-medium">Follow us on</p>
                            <Link href="https://instagram.com/jaru.app/"><img src={'/assets/footer/insta.svg'} alt="instagram" className='footer-icons' /></Link>
                            <Link href="https://facebook.com/jaruapp/"><img src={'/assets/footer/facebook.svg'} alt="facebook" className='footer-icons' /></Link>
                            {/* <Link href="/"><img src={'/assets/footer/twitter.svg'} alt="twitter" className='footer-icons' /></Link>
                            <Link href="/"><img src={'/assets/footer/youtube.svg'} alt="youtube" className='footer-icons' /></Link> */}
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-semibold mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: { text: string, link: string }, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href={link.link} className="text-offwhite text-sm font-normal mb-6 space-links">{link.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className='col-span-4'>
                        <RequestService /></div>


                </div>
            </div>

            {/* All Rights Reserved */}

            <div className='pb-24 px-4'>
                <h3 className='text-center text-offwhite'>@2024 - All Rights Reserved by <Link href="https://instagram.com/jaru.app/" target="_blank"> Jaru Ltd.</Link></h3>
            </div>

        </div >
    )
}

export default footer;
