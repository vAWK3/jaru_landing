import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, FormEvent } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';

export enum JaruService {
    walking,
    daycare,
    grooming,
    training,
    boarding,
}

const RequestService = ({ label, service }: { label?: string; service?: JaruService }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<string | null>(
        service !== undefined ? JaruService[service] : null
    );

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        // Validate required fields
        const requiredFields = ['fullName', 'phoneNumber', 'petName', 'petType', 'weight'];
        for (const field of requiredFields) {
            if (!formData.get(field)) {
                alert(`Please fill in the required field: ${field}`);
                return;
            }
        }

        // If service is pre-selected, add it to the form data
        if (selectedService) {
            formData.set('services', selectedService);
        } else {
            alert(`Please choose a service`);
            return;
        }

        try {
            // Submit to Google Sheets URL (replace with your actual Google Sheets URL)
            const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbwTYRtRovWWXDdGUyrWQ_zsVlEmILnRFKpaVmnoobDrI-cUbNKpcj8h4eRo4-blthxf/exec';
            await fetch(googleSheetsUrl, {
                method: 'POST',
                body: formData,
            });
            alert('Thank you! We will get back to you soon!');
            closeModal();
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert('There was an error submitting the form. Please try again.');
        }
    };

    return (
        <>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                <div className="hidden md:block">
                    <button
                        className="bg-yellow hover:bg-darkblue hover:text-white text-black text-15px font-medium ml-8 py-4 px-5 rounded"
                        onClick={openModal}
                    >
                        {label ? label : 'Request a service'}
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                                        <div className="w-full space-y-8">
                                            <div>
                                                <img
                                                    className="mx-auto h-36 w-auto"
                                                    src="/assets/logo/logo.png"
                                                    alt="Jaru logo"
                                                />
                                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                                    Request a Service
                                                </h2>
                                            </div>

                                            <form className="space-y-6" onSubmit={handleSubmit}>
                                                <input type="hidden" name="remember" defaultValue="true" />

                                                {/* Owner Information */}
                                                <h3 className="text-lg font-semibold">Owner Information</h3>
                                                <div className="space-y-4">
                                                    <input type="text" name="fullName" placeholder="Full Name" required className="block w-full px-4 py-2 border rounded" />
                                                    <input type="text" name="phoneNumber" placeholder="Phone Number" required className="block w-full px-4 py-2 border rounded" />
                                                    <input type="text" name="homeAddress" placeholder="Home Address" className="block w-full px-4 py-2 border rounded" />
                                                </div>

                                                {/* Pet Information */}
                                                <h3 className="text-lg font-semibold">Pet Information</h3>
                                                <div className="space-y-4">
                                                    <input type="text" name="petName" placeholder="Pet’s Name" required className="block w-full px-4 py-2 border rounded" />
                                                    <input type="text" name="petType" placeholder="Type of Pet" required className="block w-full px-4 py-2 border rounded" />
                                                    <input type="number" name="age" placeholder="Age" className="block w-full px-4 py-2 border rounded" />
                                                    <input type="text" name="weight" placeholder="Weight" required className="block w-full px-4 py-2 border rounded" />
                                                    <textarea name="healthIssues" placeholder="Any Health Issues or Special Needs?" className="block w-full px-4 py-2 border rounded"></textarea>
                                                </div>

                                                {/* Requested Services */}
                                                <h3 className="text-lg font-semibold">Requested Services</h3>
                                                <div className="space-y-4">
                                                    <label className="block">
                                                        <input
                                                            type="radio"
                                                            name="services"
                                                            value="grooming"
                                                            checked={selectedService === 'grooming'}
                                                            onChange={() => setSelectedService('grooming')}
                                                        />{' '}
                                                        Pet Grooming
                                                    </label>
                                                    <label className="block">
                                                        <input
                                                            type="radio"
                                                            name="services"
                                                            value="daycare"
                                                            checked={selectedService === 'daycare'}
                                                            onChange={() => setSelectedService('daycare')}
                                                        />{' '}
                                                        Pet Daycare
                                                    </label>
                                                    <label className="block">
                                                        <input
                                                            type="radio"
                                                            name="services"
                                                            value="boarding"
                                                            checked={selectedService === 'boarding'}
                                                            onChange={() => setSelectedService('boarding')}
                                                        />{' '}
                                                        Pet Boarding
                                                    </label>
                                                    <label className="block">
                                                        <input
                                                            type="radio"
                                                            name="services"
                                                            value="dogWalking"
                                                            checked={selectedService === 'dogWalking'}
                                                            onChange={() => setSelectedService('dogWalking')}
                                                        />{' '}
                                                        Dog Walking
                                                    </label>
                                                    <label className="block">
                                                        <input
                                                            type="radio"
                                                            name="services"
                                                            value="dogTraining"
                                                            checked={selectedService === 'dogTraining'}
                                                            onChange={() => setSelectedService('dogTraining')}
                                                        />{' '}
                                                        Dog Training
                                                    </label>
                                                </div>

                                                {/* Preferred Dates for Service */}
                                                <h3 className="text-lg font-semibold">Preferred Dates for Service</h3>
                                                <input type="text" name="preferredDates" required placeholder="Preferred Dates" className="block w-full px-4 py-2 border rounded" />

                                                {/* Additional Information */}
                                                <h3 className="text-lg font-semibold">Additional Information or Requests</h3>
                                                <textarea name="additionalInfo" placeholder="Any additional information or requests" className="block w-full px-4 py-2 border rounded"></textarea>

                                                {/* Emergency Contact Information */}
                                                <h3 className="text-lg font-semibold">Emergency Contact Information</h3>
                                                <div className="space-y-4">
                                                    <input type="text" name="emergencyContactName" placeholder="Emergency Contact Name" className="block w-full px-4 py-2 border rounded" />
                                                    <input type="text" name="emergencyContactPhone" placeholder="Emergency Contact Phone" className="block w-full px-4 py-2 border rounded" />
                                                </div>

                                                {/* Submit Button */}
                                                <div>
                                                    <button type="submit" className="group relative flex w-full justify-center rounded-md bg-darkblue py-2 px-4 text-sm font-medium text-white hover:bg-yellow hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2">
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <LockClosedIcon className="h-5 w-5 text-yellow group-hover:text-darkblue" aria-hidden="true" />
                                                        </span>
                                                        Submit Request
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default RequestService;