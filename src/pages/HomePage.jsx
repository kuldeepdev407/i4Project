import React from 'react'
import { Button1, Button2 } from '../components/Buttons'
import { Heading1 } from '../components/Headings'
import ExpertSuite from './HomeSections/ExpertSuite'
import OurSuite from './HomeSections/OurSuite'
import WhyUs from './HomeSections/WhyUs'


export default function HomePage() {

    return (
        <>
            <div
                className='fullwidth pb-20 flex flex-column justify-center pt-20 '>
                <div
                    data-aos="fade-right"
                    data-aos-offset="10"
                    className='max-w-6xl flex flex-col aos-item lg:flex-row pl-10 pr-10'>
                    <div className='ml-2 lg:flex-1'>
                        <Heading1
                            className='mb-6 font-medium whitespace-wrap'
                            text={"Accelerate Your Business Growth With Leading Industry Experts "} />
                        <p className='mb-4 leading-[30px]'>Adour Media is a renowned IT services provider that delivers cutting-edge digital solutions across the world. With our primacy for innovation, we are proficient at originating high-quality, trendy, and robust software and data-centric digital marketing strategies for rapid business evolution. Start your online journey with us to build your empire in a unique, bold, futuristic manner. </p>
                        <div className='flex flex-col gap-2 md:flex-row'>
                            <Button1 value={"Register Web 3.0 Services"} />
                            <Button2 className='md:ml-6' value={"Contact Sales"} />
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-offset="10"
                        className='flex-1 pl-10 aos-item flex justify-center '><img src={"https://www.adourmedia.com.au/wp-content/themes/adour/assets/images/home-page-banner.svg"} alt="" /></div>
                </div>
            </div>
            <ExpertSuite />
            <WhyUs />
            <OurSuite />
        </>
    )
}
