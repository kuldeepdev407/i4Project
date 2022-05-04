import { React, useState } from 'react'
import { Button1 } from './Buttons'
import $ from 'jquery';

let navStatus = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 200 && !navStatus) {
        navStatus = true;
        $('#navbar').hide()
        let navbar = document.getElementById("navbar");
        navbar.style.position = 'sticky';
        navbar.style.top = '0px';
        navbar.style.background = '#25282D';
        navbar.style.zIndex = '2';
        navbar.style.boxShadow = '0px 0px 5px #999';
        $('#navbar').slideDown(300);
    } else if (window.scrollY <= 200 && navStatus) {
        let navbar = document.getElementById("navbar");
        document.getElementById("navbar").style.position = 'static';
        navbar.style.boxShadow = 'none'
        navStatus = false;
    }
})

function NavLink({ value = "hellow" }) {
    return (
        <>
            <li className='mt-auto mb-auto'>
                <a href={"#/"} className='text-white  whitespace-nowrap p-2 justify-center hover:text-[#D9664C] h-min'>
                    {value}
                </a>
            </li>
        </>
    )
}

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggelMenue() {
        if (isOpen) {
            setIsOpen(false);
            $('#navbar1').slideToggle(200).hide();
        } else {
            setIsOpen(true);
            $('#navbar1').slideToggle(400);
        }
    }
    return (
        <>
            <div id="navbar" className='fullwidth pr-10 pl-10 pt-2 flex flex-row flex-3'>
                <a href="#/">
                    <img

                        src="https://www.adourmedia.com.au/wp-content/themes/adour/assets/images/logo.svg"
                        alt="logo"
                        className='background mb-2' />
                </a>
                <div className='ml-auto  flex-row hidden lg:flex'>
                    <ul className='flex flex-row gap-5 text-lg flex-4 justify-center'>
                        <NavLink value="Home" />
                        <NavLink value="Services" />
                        <NavLink value="Web 2.0" />
                        <NavLink value="About us" />
                        <NavLink value="Contact" />
                    </ul>
                    <Button1 value={'Request A Quote'} className="ml-5" />
                    <div></div>
                </div>

                <div className='ml-auto flex lg:hidden'>
                    <a href='#/' onClick={() => toggelMenue()} className='flex flex-row gap-2 items-center hover:text-[#D9664C] transition-all ease-in-out'>
                        <div className='invert '><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"></rect><rect y="3" width="20" height="2"></rect><rect y="15" width="20" height="2"></rect></svg></div>
                        Menu</a>
                </div>
            </div>
            <div id="navbar1" className='top-0 bg-[#25282D]  p-10 fixed z-[100] min-h-[100vh] lg:hidden'>
                <ul className='flex flex-col gap-1 text-lg flex-4 mb-10 justify-center'>
                    <NavLink value="Home" />
                    <NavLink value="Services" />
                    <NavLink value="Web 2.0" />
                    <NavLink value="About us" />
                    <NavLink value="Contact" />
                </ul>
                <Button1 value={'Request A Quote'} className="mt-10" />
                <div></div>
            </div>
        </>
    )
}
