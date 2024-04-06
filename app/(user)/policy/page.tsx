import React from 'react'

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
    </main>

    </>
  )
}
