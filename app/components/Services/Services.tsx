"use client"
import * as React from "react";
import { useState } from "react";
import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline';
import Register, { JaruService } from "../Navbar/ServiceDialog";
import RequestService from "../Navbar/ServiceDialog";


interface Service {
    name: string;
    description: string;
    imageSrc?: string;
    type: JaruService;
    // profession: string
    // price: string
    // category: 'mobiledevelopment' | 'webdevelopment' | 'datascience' | 'cloudcomputing';
}

const services: Service[] = [
    {
        name: 'Pet grooming',
        description: "Our grooming services are all about keeping your pet clean, comfortable, and looking their best. From bathing and brushing to nail trimming and ear cleaning, we make grooming a gentle and stress-free experience.",
        imageSrc: '/assets/services/grooming.jpg',
        type: JaruService.grooming,
    },

    {
        name: 'Pet daycare',
        description: "Jaru’s daycare is a safe and playful environment where pets can socialize, exercise, and enjoy attention from our team. Perfect for keeping your pet entertained and active while you’re busy.",
        imageSrc: '/assets/services/daycare.jpeg',
        type: JaruService.daycare,
    },
    {
        name: 'Dog walking',
        description: "Our dog-walking service gives your pup the exercise, stimulation, and fresh air it needs. Whether it’s a quick walk or a longer adventure, we tailor each walk to fit your dog’s energy level and personality.",
        imageSrc: '/assets/services/walking.jpeg',
        type: JaruService.walking,
    },
    {
        name: 'Pet boarding',
        description: "When you need to be away, our boarding service provides a cozy, home-like setting for your pet. With round-the-clock care, you can relax knowing your pet is in good hands, receiving plenty of affection and care.",
        imageSrc: '/assets/services/boarding.jpeg',
        type: JaruService.boarding,
    },
    {
        name: 'Dog training',
        description: "Jaru’s training sessions focus on positive reinforcement and patience to help your dog learn basic obedience, build confidence, and strengthen their bond with you. We offer tailored programs to address each dog’s specific needs.",
        imageSrc: '/assets/services/training.jpeg',
        type: JaruService.training,
    },
];

const ServicesList = () => {

    // const [selectedButton, setSelectedButton] = useState<'mobiledevelopment' | 'webdevelopment' | 'datascience' | 'cloudcomputing' | 'all' | null>('webdevelopment');

    // const mobileDevelopment = names.filter((name) => name.category === 'mobiledevelopment');
    // const webDevelopment = names.filter((name) => name.category === 'webdevelopment');
    // const dataScience = names.filter((name) => name.category === 'datascience');
    // const cloudComputing = names.filter((name) => name.category === 'cloudcomputing');

    // let selectedNames: Name[] = [];

    // if (selectedButton === 'mobiledevelopment') {
    //     selectedNames = mobileDevelopment;
    // } else if (selectedButton === 'webdevelopment') {
    //     selectedNames = webDevelopment;
    // } else if (selectedButton === 'datascience') {
    //     selectedNames = dataScience;
    // } else if (selectedButton === 'cloudcomputing') {
    //     selectedNames = cloudComputing
    // }


    const serviceElements = services.map((service, index) => (

        <div key={index}>
            <div className=" text-lg sm:text-sm py-5 lg:py-0 mt-12">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    {service.imageSrc && <img
                        src={service.imageSrc}
                        alt={service.imageSrc}
                        className="h-full w-full object-cover object-center"
                    />}
                </div>
                <div className='flex justify-between'>
                    <div className="mt-6 block font-semibold text-2xl text-gray-900">
                        {service.name}
                    </div>

                </div>
                <p aria-hidden="true" className="mt-2 mb-5 font-normal text-justify">
                    {service.description}
                </p>

                <RequestService label={`Request ${service.name}`} service={service.type} />

                {/* <div className='flex justify-between border-solid border-2 border-grey500 rounded-md p-2'>
                    <p>12 Classes</p>
                    <div className='flex flex-row space-x-4'>
                        <div className='flex'>
                            <img src={'/assets/courses/account.svg'} alt="circle" />
                            <p className='text-lightgrey ml-1'>120</p>
                        </div>
                        <div className='flex'>
                            <img src={'/assets/courses/Star.svg'} alt="star" />
                            <p className='ml-1'>4.5</p>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    ));


    return (
        <div className="bg-blue">
            <div id='courses-section' className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="flex w-full flex-row justify-between">
                    <h2 className="text-3xl font-bold">Jaru services</h2>
                </div>
                {/* <div className='flex nowhitespace space-x-5 rounded-xl bg-white p-1 overflow-x-auto'>

                    {/* FOR DESKTOP VIEW */}
                {/* <button onClick={() => setSelectedButton('webdevelopment')} className={"bg-white " + (selectedButton === 'webdevelopment' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Dog walking</button>
                <button onClick={() => setSelectedButton('mobiledevelopment')} className={"bg-white " + (selectedButton === 'mobiledevelopment' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Petsitting</button>
                <button onClick={() => setSelectedButton('datascience')} className={"bg-white " + (selectedButton === 'datascience' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Grooming</button>
                <button onClick={() => setSelectedButton('cloudcomputing')} className={"bg-white " + (selectedButton === 'cloudcomputing' ? 'text-black border-b-2 border-orange' : 'text-lightgrey') + " pb-2 text-lg hidden sm:block"}>Dog Training</button> */}

                {/* FOR MOBILE VIEW */}
                {/* <GlobeAltIcon onClick={() => setSelectedButton('webdevelopment')} width={70} height={70} className={"bg-white " + (selectedButton === 'webdevelopment' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                <DevicePhoneMobileIcon onClick={() => setSelectedButton('mobiledevelopment')} width={70} height={70} className={"bg-white " + (selectedButton === 'mobiledevelopment' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                <CircleStackIcon onClick={() => setSelectedButton('datascience')} width={70} height={70} className={"bg-white " + (selectedButton === 'datascience' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />
                <CloudIcon onClick={() => setSelectedButton('cloudcomputing')} width={70} height={70} className={"bg-white " + (selectedButton === 'cloudcomputing' ? 'border-b-2 border-orange fill-orange' : '') + " pb-2 block sm:hidden"} />

            </div> */}

                <div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
                            <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
                                {serviceElements.length > 0 ? (
                                    serviceElements
                                ) : (
                                    <p>No data to show</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div >
    );
}

export default ServicesList;




