
import Image from "next/image";
import Link from "next/link"
export default function Futured() {
    return (
      
      <div>
           <div className="bg-gray-100 py-2 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Featured New Cars
          </h2>
          <a href="#" className="text-blue-500 hover:underline">
            View All New Cars
          </a>
        </div>

        <div className="mt-6">
          {/* Tabs */}
          <div className="flex space-x-6 font-bold border-b-2 border-gray-300">
            <button className="hover:underline">
              Popular
            </button>
            <button className="hover:underline">
              Upcoming
            </button>
            <button className="hover:underline">
              Newly Launched
            </button>
          </div>
     <div className="flex justify-between items-center w-full mt-7">
  <Link href="/products1" className="w-3/5 h-72 mx-10 flex flex-col items-center bg-white">
    <img src="/th (3).jpeg" alt="Product 1" className="w-full h-40 object-cover rounded-md" />
    <h3 className="mt-2 text-lg font-semibold">2024 Kia EV5 Electric SUV</h3>
    <p className="text-green-600 mt-2">PKR  23,500,000</p>
    <div className="flex items-center mt-1">
      <span className="text-yellow-400">★★★★★</span>
      <Link href="products1" className="ml-2 text-sm text-blue-500">Write Review</Link>
    </div>
  </Link>

  <Link href="/products2" className="w-3/5 h-72 mx-10 flex flex-col items-center bg-white">
    <img src="/download (1).jpeg" alt="Product 2" className="w-full h-40 object-cover rounded-md" />
    <h3 className="mt-2 text-lg font-semibold">2025 Kia Sorento SUV</h3>
    <p className="text-green-600">PKR  9,499,000</p>
    <div className="flex items-center mt-1">
      <span className="text-yellow-400">★★★★★</span>
      <Link href="products2" className="ml-2 text-sm text-blue-500">Write Review</Link>
    </div>
  </Link>

  <Link href="/products3" className="w-3/5 h-72 mx-10 flex flex-col items-center bg-white">
    <img src="/download.jpeg" alt="Product 3" className="w-full h-40 object-cover rounded-md" />
    <h3 className="mt-2 text-lg font-semibold text-center mb-4">Kia Sportage 2.0 CRDi KX3 AWD</h3>
    <p className="text-green-600">PKR  6,500,000 </p>
    <div className="flex items-center mt-1">
      <span className="text-yellow-400">★★★★★</span>
      <Link href="products3" className="ml-2 text-sm text-blue-500">Write Review</Link>
    </div>
  </Link>

  <Link href="/products4" className="w-3/5 h-72 mx-10 flex flex-col items-center bg-white">
    <img src="/1228152.avif" alt="Product 4" className="w-full h-40 object-cover rounded-md" />
    <h3 className="mt-2 text-lg font-semibold">2025 Kia K5</h3>
    <p className="text-green-600"> PKR 22,937,200 </p>
    <div className="flex items-center mt-1">
      <span className="text-yellow-400">★★★★★</span>
      <Link href="products4" className="ml-2 text-sm text-blue-500">Write Review</Link>
    </div>
  </Link>
</div>
   </div>
     </div>
        </div>
      </div>
    );
  }