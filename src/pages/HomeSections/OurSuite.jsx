import React from 'react'
import { Heading2 } from '../../components/Headings'
import './OurSuite.css';
export default function OurSuite() {
    return (
        <div className='mt-20 suitGradient'>
            <div className=' flex flex-col max-w-6xl ml-auto mr-auto text-center justify-center'>
                <Heading2 text="Our Suite of Tools" className='text-[40px] mb-5' />

            </div>
            <marquee direction="2" loop="100" scrollamount="20">
                <ul id="listofcompany" className='listItem flex flex-row gap-2 pb-10 overflow-hidden'>
                    <li ><img className="companyImage" src="https://www.adourmedia.com.au/wp-content/uploads/2022/03/Ubersuggests.svg" alt="" /></li>
                    <li ><img className="companyImage" src="https://www.adourmedia.com.au/wp-content/uploads/2022/03/Spyfu.svg" alt="" /></li>
                    <li ><img className="companyImage" src="https://www.adourmedia.com.au/wp-content/uploads/2022/03/sEMRUSH.svg" alt="" /></li>
                    <li ><img className="companyImage" src="https://www.adourmedia.com.au/wp-content/uploads/2022/03/Optimonk.png" alt="" /></li>
                    <li ><img className="companyImage" src="https://www.adourmedia.com.au/wp-content/uploads/2022/03/office-365.svg" alt="" /></li>
                    <li ><img className="companyImage" src="https://www.adourmedia.com.au/wp-content/uploads/2022/03/Headline-Studio-Logo.svg" alt="" /></li>
                    <li ><img className="companyImage" src="https://www.adourmedia.com.au/wp-content/uploads/2022/03/grammarly.svg" alt="" /></li>
                    <li ><img className="companyImage" src="https://www.adourmedia.com.au/wp-content/uploads/2022/03/Google-Trend.svg" alt="" /></li>
                    <li ><img className="companyImage" src="https://www.adourmedia.com.au/wp-content/uploads/2022/03/Google-search-console.svg" alt="" /></li>
                    <li ><img className="companyImage" src="https://www.adourmedia.com.au/wp-content/uploads/2022/03/Google-analytics.svg" alt="" /></li>
                    <li ><img className="companyImage" src="https://www.adourmedia.com.au/wp-content/uploads/2022/03/Google-ads.svg" alt="" /></li>
                    <li ><img className="companyImage" src="https://www.adourmedia.com.au/wp-content/uploads/2022/03/canva.svg" alt="" /></li>
                    <li ><img className="companyImage" src="https://www.adourmedia.com.au/wp-content/uploads/2022/03/BuzzSumo.svg" alt="" /></li>
                    <li ><img className="companyImage" src="https://www.adourmedia.com.au/wp-content/uploads/2022/03/ahrefs.svg" alt="" /></li>
                    <li ><img className="companyImage" src="https://www.adourmedia.com.au/wp-content/uploads/2022/03/Adobe-creative-cloud.svg" alt="" /></li>
                </ul>
            </marquee>
        </div>
    )
}
