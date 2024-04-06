import React from 'react'
import { Card } from "flowbite-react";

export default function policy() {
  return (
    <>
      <main>
        <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-200 shadow-md">
          <div className="md:mr-4 mb-4 md:mb-0 max-w-[500px] w-[100%]">
            <img src="/policy-about.png" alt="Company Profile" className="w-full h-auto rounded-full max-w-[100%]"  />
          </div>
          <div className='max-w-[500px] w-[100%]'>
            <h1 className="text-3xl md:text-2xl font-semibold text-gray-800 mb-2">Policy in Company</h1>
            <p className="text-sm md:text-base text-gray-600">This policy outlines the accepted payment methods, billing procedures, and refund/return policies. It includes information about accepted currencies, transaction fees, payment security measures, and the process for requesting refunds or exchanges.</p>
          </div>
        </div>

        <div className='mt-8 flex flex-col items-center'>
        <h1 className="text-2xl mb-3 font-semibold tracking-widest">Policy</h1>
        <p className='mb-5 text-center max-w-lg tracking-wide'>We pride ourselves on fostering a supportive and inclusive environment where everyone contributions are valued and respected.</p>
        <div className='flex flex-wrap justify-center gap-5'>
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </Card>
        </div>
        </div>

        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center mt-8 pb-6">
        <h2 className="text-2xl font-semibold m-5 text-center text-gray-800 tracking-widest">Contact Us</h2>
        <div className="w-full md:w-screen flex items-center justify-center">
          <div className="max-w-4xl w-full p-8 bg-white flex flex-col md:flex-row items-center justify-center md:justify-start">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-16">
              <img src="/contact.png" alt="Contact" className="h-[200px] md:h-auto w-[300px] md:w-[400px] object-cover" />
            </div>
            <div className="flex-grow">
              <form className="w-full md:w-auto">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" name="name" className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea id="message" name="message" className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>
                <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      </main>

    </>
  )
}
