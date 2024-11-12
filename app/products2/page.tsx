
import Link from 'next/link';

import Navbar from"@/app/components/Navbar/page"

import Footer from"@/app/components/Footer/page"


function ProductPage() {
  return (  
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center p-6 flex-grow">
        <h1 className="text-3xl font-bold mb-4"> 2024 Kia Sportage HEV
        </h1>
        <img src="/download (1).jpeg" alt="Products2" className="w-64 h-auto mb-4" />
        <div className="flex space-x-4 mb-4">
          <button className="border border-blue-500 text-black bg-white px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Request A Test Drive</button>
          <button className="border border-blue-500 text-black bg-white px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Request A Bank Finance</button>
          <button className="border border-blue-500 text-black bg-white px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Visit Place</button>
          <button className="border border-blue-500 text-black bg-white px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Car Inspection</button>
        </div>
        <h1 className="text-3xl py-4 mb-4">Vehicle Description </h1>
        <p className="text-center mb-4">
        The standard features of the Kia Sorento LX include 2.5L I-4 191hp 
        engine, 8-speed automatic transmission with overdrive, 4-wheel anti-lock brakes
         (ABS), side seat mounted airbags, curtain 1st and 2nd row overhead airbags, rear 
         side-impact airbag, driver knee airbag, airbag occupancy sensor, air conditioning,
          17" aluminum wheels, cruise control, Smart Cruise Control with Stop & Go 
        (SCC w/S&G) adaptive, ABS and driveline traction control, electronic stability.
        </p>
        <p className="text-xl text-green-600 font-bold mb-4">PKR  9,499,000</p>
        <Link href="/Payment" className="bg-blue-600 text-white px-6 py-2 rounded">
          Make a Payment
        </Link>
      </div>
      <Footer />
    </div>
  );
};
export default ProductPage;
