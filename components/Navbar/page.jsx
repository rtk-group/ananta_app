"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "About Us", href: "#about" },
  {
    name: "Brands", href: "#brands", submenu: [
      { name: 'OptA', href: '/hello1' },
      { name: 'OptB', href: '/hello2' },
      { name: 'OptC', href: '/hello3' }
    ],
  },
  {
    name: "Business", href: "#business",
  },
  { name: 'OurPeople', href: '#peoples' },
  { name: 'OurImpact', href: '#impact' },

  {
    name: "Investers", href: "", submenu: [
      { name: 'OptA', href: '/hello1' },
      { name: 'OptB', href: '/hello2' },
      { name: 'OptC', href: '/hello3' }
    ],
  },
];


export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);


  return (
    <header className=" bg-white shadow-sm sticky top-0 z-50 relative">
      <div className=" bg-[#05422C] h-[37px] flex items-center justify-center gap-5">
        <span className="text-[12px] md:text-[14px] text-[#FFFFFFB2] font-normal tracking-wider"> LIMITED OFFER: 30% OFF. Use ANANTA30 at Checkout. </span>
        <span className="text-[12px] md:text-[14px]">23 : 15 : 00</span>
      </div>

      <div className=" h-auto sm:h-[90px] flex gap-3 flex-col md:flex-row items-center justify-between mx-auto px-4 ">

        <div className="relative w-full sm:w-auto flex">
          <button className="sm:hidden text-[28px] text-black ml-8 mr-4 sm:ml-0 mr-0" onClick={() => setOpen(!open)} > ☰ </button>
          <Image src={'/images/ananta_logo2.png'}
            alt="ananta_logo"
            width={167}
            height={62}
            className="object-fill"
          />
        </div>
        <div className=" flex items-center gap-10 ">

          {/* un order list part */}
          <nav className="relative w-full h-[40px] hidden md:flex items-center gap-5 text-[16px] text-[#46494F]">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative "
                onMouseEnter={() => item.submenu && setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Nav link */}
                <Link
                  href={item.href}
                  className="px-2 py-3 relative after:content-[''] after:absolute after:bg-green-700 after:-bottom-2 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all duration-500" >
                  {item.name}
                </Link>

                {/* Dropdown (auto-rendered if submenu exists) */}
                {
                  item.submenu && (
                    <div
                      className={`${activeIndex === index ? 'h-auto pt-5 ' : 'h-0 overflow-hidden'} transition-all duration-300  h-0 overflow-hidden absolute top-8 left-0 min-w-[160px] shadow-lg`}>
                      <div className=" shadow-lg flex flex-col gap-2 text-white">
                        {item.submenu.map((sub, i) => (
                          <Link href={sub.href} key={i}
                            className="py-1 px-2 hover:pl-3 rounded-sm bg-[#05422C4D] hover:bg-[#05422C] cursor-pointer"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

              </div>
            ))}
          </nav>

          <div className="min-w-[456px] my-4 sm:my-0 h-[48px] flex gap-3 ">
            <input type="text" placeholder="Search" className=" border border-gray-300 text-gray-500 h-full w-full rounded-full pl-5" />
            <span className=" w-[55px] text-xl rounded-full flex items-center justify-center bg-[#17AF26]"> <CiSearch /> </span>
          </div>
        </div>
      </div>


      {/* {open && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-3">
          <a className="block">Shop</a>
          <a className="block">Strains</a>
          <a className="block">Education</a>
          <a className="block">Contact</a>
        </div>
      )} */}
    </header>
  );
}



{/* <div className="w-[270px] h-[24px] text-[#46494F] flex gap-4 items-center justify-end">
            <p className="font-normal text-[14px] tracking-wider ">Your Account</p>
            <div className="h-[15px] border border-gray-300"></div>
            <div className="text-2xl relative"><HiOutlineShoppingBag /> 
            <div className="bg-red-500 w-4 h-4 text-[10px] flex items-center justify-center text-white rounded-full absolute top-3 -right-2">0</div>
             </div>
        </div> */}

