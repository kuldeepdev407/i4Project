import React from 'react'
import { Button2 } from '../../components/Buttons'
import { Heading1, Heading2 } from '../../components/Headings'

export default function WhyUs() {
    return (
        <div className='fullwidth mt-20'>
            <div className='flex flex-col max-w-6xl ml-auto mr-auto pl-3 lg:flex-row'>
                <div data-aos='fade-right' className="flex-1 flex flex-col aos-item">
                    <Heading2 text="Why us" className="text-[35px]" />
                    <Heading1 text="For Your Digital Transformation" className="text-[35px] mb-5" />
                    <p className='mb-5'>We are a leading IT services company concentrated on supporting industries to optimize their data through custom software offerings. By leveraging a remarkable, consultative approach, we decode business challenges into technology resolutions. Adour Media also has deep roots in state-of-the-art Web 3.0 services to relish the new world.</p>
                    <ul className='list-disc ml-3 pl-12 mb-5'>
                        <li>Quality Deliverance</li>
                        <li>Client-centric Approach</li>
                        <li>Professional Experienced Team</li>
                        <li>Data Protection</li>
                        <li>Excellent Support</li>
                        <li>Enhancement and Updation</li>
                    </ul>
                    <Button2 value="Learn More About us" />
                </div>
                <div data-aos='fade-left' className='flex-1 aos-item' >
                    <img src="https://www.adourmedia.com.au/wp-content/uploads/2022/03/Property-1Default.svg" alt="ima" />
                </div>
            </div>
        </div>
    )
}
