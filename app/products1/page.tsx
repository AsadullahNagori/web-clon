import Link from 'next/link';

import Navbar from"@/app/components/Navbar/page"

import Footer from"@/app/components/Footer/page"


function ProductPage() {
  return (  
    <div className="flex flex-col min-h-screen">
      <Navbar />
    
     
      <div className="flex flex-col items-center p-6 flex-grow">
        <h1 className="text-3xl font-bold mb-4">2024 KIA EV5 Electric SUV
        </h1>
        <img src="/th (3).jpeg" alt="Products1" className="w-64 h-auto mb-4" />
        <div className="flex space-x-4 mb-4">
          <button className="border border-blue-500 text-black bg-white px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Request A Test Drive</button>
          <button className="border border-blue-500 text-black bg-white px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Request A Bank Finance</button>
          <button className="border border-blue-500 text-black bg-white px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Visit Place</button>
          <button className="border border-blue-500 text-black bg-white px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Car Inspection</button>
        </div>
        <h1 className="text-3xl py-4 mb-4">Vehicle Description </h1>
        <p className="text-center mb-4">
        Kia EV5 Revealed as the EV9's Smaller Sibling Range, Charging, and Battery Life The cheapest 
        EV5 will come with a smaller 64-kWh battery but all others will get a longer-range 88-kWh pack.
        </p>
        <p className="text-xl text-green-600 font-bold mb-4">PKR 23,500,000 </p>
        <Link href="/Payment" className="bg-blue-600 text-white px-6 py-2 rounded">
          Make a Payment
        </Link>
      </div>
      <Footer />
    </div>
  );
};
export default ProductPage;
