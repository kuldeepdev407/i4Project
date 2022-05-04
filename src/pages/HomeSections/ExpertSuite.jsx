import React from 'react'
import { Heading2 } from '../../components/Headings';


function SuiteCard({ heading, desc, icon }) {
    return (
        <div data-aos='fade-up' className='flex flex-row text-left max-w-100 pl-3 lg:max-w-[500px] aos-item'>
            <div className='min-w-[10%]'><img src={icon} alt="suite" /></div>
            <div className='ml-4'>
                <h1 className="text-2xl font-bold mb-5">{heading} </h1>
                <p className="text-sm mb-10">{desc}</p>
                <a href="#/" className='text-md text-[#D9664C]'>Explore</a>
            </div>
        </div>
    );
}

export default function ExpertSuite() {
    return (
        <div className='fullwidth flex flex-col justify-center text-center pt-20'>
            <div data-aos="fade-down" className='max-w-4xl flex-col mr-auto ml-auto aos-item'>
                <Heading2
                    text="Our Expert Suite of IT Services"
                    className='pt-10 mb-5'
                />
                <p align="center">Want to start your own online business with an enticing website or app or want to boost your business sales with robust digital marketing strategies or have a desire to invest in Crypto, NFT, or Blockchain? Adour Media is here to help you with amazing services.</p>
            </div>
            <div className='max-w-6xl mr-auto ml-auto mt-10' >
                <div className="flex flex-row flex-wrap gap-6 mr-auto ml-auto">
                    <SuiteCard
                        heading="Digital Marketing"
                        icon={"https://www.adourmedia.com.au/wp-content/themes/adour/assets/images/Digital-Marketing.svg"}
                        desc={<>We are specialized in bringing out boosted conversion rates and high website traffic through advanced <b>SEO, SMO, PPC, content marketing</b> services. With the help of our specialist internet marketers, we are known for assisting offline and online enterprises to unite with consumers and build an incredible web presence</>}
                    />
                    <SuiteCard
                        heading="Web & App Development Services"
                        icon={"https://www.adourmedia.com.au/wp-content/themes/adour/assets/images/carbon_development.svg"}
                        desc={<>If you want to expand your business boundaries by having your own mobile app or website, you arrive at the right place. We help you in building enticing user-centric designs that urge your users to connect with your company. Get full-stack mobile application and web development services for agencies, SMEs, corporations, and startups </>}
                    />
                    <SuiteCard
                        heading="Creative Services"
                        icon={"https://www.adourmedia.com.au/wp-content/themes/adour/assets/images/fluent_design-ideas-20-filled.svg"}
                        desc={<>At Adour Media, we design intuitive graphics and logos that become the talk of the town. Our specialized creative teams take your simple ideas and convert them into the most aesthetic ones. Make your business identity unique and appealing with us in a budget-friendly way. </>}
                    />
                    <SuiteCard
                        heading="Web 3.0 Services"
                        icon={"https://www.adourmedia.com.au/wp-content/themes/adour/assets/images/accept-cryptocurrency.svg"}
                        desc={<>To allow businesses to experience the high-tech world, we are well versed in providing marketing services in <b>Metaverse</b> and branding, marketing, & launching <b>Blockchain</b> products and services like <b>NFT, Crypto Currencies</b>, etc. Contact us now to know more about this. </>}
                    />
                    <SuiteCard
                        heading="Social Media Management"
                        icon={"https://www.adourmedia.com.au/wp-content/themes/adour/assets/images/SMM-icon.svg"}
                        desc={<>At Adour Media, we design intuitive graphics and logos that become the talk of the town. Our specialized creative teams take your simple ideas and convert them into the most aesthetic ones. Make your business identity unique and appealing with us in a budget-friendly way</>}
                    />
                </div>
            </div>
        </div>
    )
}
