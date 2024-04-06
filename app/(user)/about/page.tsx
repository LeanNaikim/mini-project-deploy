
import React from 'react' 
import CardProfile from './component/profile/CardProfile'  

export default function page() {
  return (
    <main>
      {/* <div>about</div> */}
      {/* <GoogleGeminiEffect
        pathLengths={[]}
        title="Welcome To Our Shop"
        description=" Share your top choices with friends, family, or potential customers to get feedback. This can provide valuable insights into how your name is perceived and whether it resonates with your target audience"
        className="AdditionalClassName"
      /> */}

      <div className='w-screen'>
        <img src="/banner.png" alt="" />
      </div>
      
      <div className='mt-5 flex flex-col items-center'>
        <h1 className="text-2xl mb-3 font-semibold tracking-widest">Our Team</h1>
        <p className='mb-5 text-center max-w-lg tracking-wide'>We pride ourselves on fostering a supportive and inclusive environment where everyone contributions are valued and respected.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <CardProfile />
          <CardProfile />
          <CardProfile />
          <CardProfile />
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl text-center font-semibold mb-5 tracking-widest">Company Reviews</h1>
          <div className="max-w-screen-xl mx-auto bg-white overflow-hidden md:flex md:items-center md:justify-between">
              <div className="w-[700px]">
                  <img className="w-full md:w-auto h-auto object-cover" src="/about1.jpg" alt="profile" />
              </div>  
              <div className="p-4 md:w-1/2">
                  <h1 className="text-xl font-semibold text-gray-800 tracking-widest">Easy Browsing and Navigation</h1>
                  <p className="mt-2 text-gray-600 tracking-wide">Our user-friendly interface allows you to browse through categories effortlessly, making it simple to find what you looking for. Filter your search results by price, brand, size, color, and more.</p>
                  <button className="mt-4 px-4 py-2 bg-fuchsia-800 text-white rounded hover:bg-fuchsia-700 focus:outline-none focus:bg-fuchsia-800">View</button>
              </div>
          </div>
      </div>
      <div>
          <div className="max-w-screen-xl mx-auto bg-white overflow-hidden md:flex md:items-center md:justify-between">
          <   div className="p-4 md:w-1/2">
                  <h1 className="text-xl font-semibold text-gray-800 tracking-widest">Secure and Convenient Payments</h1>
                  <p className="mt-2 text-gray-600 tracking-wide">Shop with confidence knowing that your transactions are safe and secure. We offer a variety of payment options, including credit/debit cards, mobile wallets, and cash on delivery, to suit your preferences. </p>
                  <button className="mt-4 px-4 py-2 bg-fuchsia-800 text-white rounded hover:bg-fuchsia-700 focus:outline-none focus:bg-fuchsia-800">View</button>
              </div>
              <div className="w-[600px]">
                  <img className="w-full md:w-auto h-auto object-cover" src="/about1.jpg" alt="profile" />
              </div>  
          </div>
      </div>
      <div>
        <div className="max-w-screen-xl mx-auto bg-white overflow-hidden md:flex md:items-center md:justify-between">
          <div className="w-[700px]">
            <img className="w-full md:w-auto h-auto object-cover" src="/about1.jpg" alt="profile" />
          </div>  
          <div className="p-4 md:w-1/2">
            <h1 className="text-xl font-semibold text-gray-800 tracking-widest">Fast and Reliable Delivery</h1>
            <p className="mt-2 text-gray-600 tracking-wide">Experience fast and reliable delivery straight to your doorstep. Whether you shopping for yourself or sending a gift to a loved one, our efficient logistics network ensures timely delivery, so you can enjoy your purchases without delay.</p>
            <button className="mt-4 px-4 py-2 bg-fuchsia-800 text-white rounded hover:bg-fuchsia-700 focus:outline-none focus:bg-fuchsia-800">View</button>
          </div>
        </div>
      </div>

    </main>
  )
}
