import React from 'react'
import phone from '../assets/images/phone.svg';
import message from '../assets/images/message_1.svg';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram (1).svg';
export default function TopBar() {
    return (
        <div className='hidden md:flex justify-end m-auto mt-4'>
            <div className='ml-auto mr-12 mt-0 mb-0'>
                <ul className='flex flex-row'>
                    <li className='text-white whitespace-nowrap font-light text-xs flex flex-row p-2'
                    >
                        <a href="tel:1300287091" className='flex flex-row hover:text-[#D9664C] transition ease-in-out'><img src={phone} alt="phone" className='mr-1' />
                            1300 287 091</a>
                    </li>
                    <li className='text-white whitespace-nowrap font-ligth text-xs p-2'>
                        <a href="mailto:hello@adourmedia.com.au" className='flex flex-row hover:text-[#D9664C] transition ease-in-out'><img src={message} alt="phone" className='mr-1' />
                            hello@adourmedia.com.au</a>
                    </li>
                    <li className='p-2 ml-4 flex flex-row justify-between w-24'>
                        <a className='hover:scale-125 transition ease-in-out' href="https://facebook.com">
                            <img src={facebook} alt="" />
                        </a>
                        <a className='hover:scale-125 transition ease-in-out' href="https://facebook.com">
                            <img src={"https://www.adourmedia.com.au/wp-content/themes/adour/assets/images/twitter.svg"} alt="" />
                        </a>
                        <a className='hover:scale-125 transition ease-in-out' href="https://facebook.com">
                            <img src={instagram} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
