'use client';
import Image from 'next/image';
import {useEffect, useState} from 'react';

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                minHeight: '100vh',
            }}
        >
            {/* Top-Left Quarter Circle */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: isMobile ? 100 : 250,
                    height: isMobile ? 100 : 250,
                    backgroundColor: '#C1D790',
                    borderBottomRightRadius: '100%',
                    zIndex: 0,
                }}
            />

            {/* Bottom-Right Quarter Circle */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: isMobile ? 100 : 250,
                    height: isMobile ? 100 : 250,
                    backgroundColor: '#C1D790',
                    borderTopLeftRadius: '100%',
                    zIndex: 0,
                }}
            />

            {/* Main Content Wrapper */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                {/* Logo */}
                <>
                    <Image
                        src="/logo.png"
                        alt="senseofstone"
                        width={isMobile ? 120 : 213}
                        height={isMobile ? 90 : 176}
                        style={{
                            objectFit: 'contain',
                            marginTop: isMobile ? 15 : 25
                        }}
                    />
                    <h1 style={{
                        color: '#8C5831',
                        fontSize: isMobile ? 14 : 24,
                        fontWeight: 'bold',
                        marginTop: isMobile ? 5 : 10
                    }}>Sense Of Stone</h1>
                </>

                {/* Coming Soon Section */}
                <div
                    className={`
    flex 
    flex-col md:flex-row 
    justify-center items-center 
    gap-[5px] md:gap-[20px]
    mt-[35px] md:mt-[15px] lg:mt-[20px] xl:mt-[30px] 2xl:mt-[30px]
  `}
                >
                    <h1
                        className={`
      font-bold 
      text-center md:text-left
      text-[26px] smd:text-[26px] lg:text-[32px] xl:text-[52px] 2xl:text-[52px]
    `}
                    >
                        Coming Soon...
                    </h1>

                    <img
                        src="/rocket.png"
                        alt="rocket"
                        className={`
      h-[26px] smd:h-[26px] lg:h-[32px] xl:h-[52px] 2xl:h-[52px] 
      w-auto
      md:mt-0
    `}
                    />
                </div>

                {/* Description */}
                <p
                    className={`
    text-[13px] sm:text-[16px] md:text-[18px] lg:text-[24px]
    text-justify
    px-5 sm:px-8 md:px-10 lg:px-0
    mx-[10px] sm:mx-[40px] md:mx-[100px] lg:mx-[150px] xl:mx-[180px]
    my-[10px] sm:my-[20px] md:my-[30px] lg:my-[50px]
    max-w-[90%] sm:max-w-[95%] lg:max-w-full
  `}
                >
                    <span style={{ fontWeight: 'bold' }}>Sense Of Stone</span> is a Tehran-based showroom offering
                    high-quality, custom-designed stone products that blend natural
                    beauty with modern craftsmanship—bringing a piece of nature into every home.
                    Website will be launched any moment. Until then, you can keep in touch with us by the links below.
                </p>
                {/* Working Hours */}
                <div
                    style={{
                        marginTop: isMobile ? 20 : 30,
                        textAlign: 'center',
                        fontSize: isMobile ? 12 : 18,
                        padding: isMobile ? '0 20px' : 0,
                        maxWidth: isMobile ? '90%' : '100%',
                    }}
                >
                    <p style={{fontWeight: 'bold', margin: 0}}>Working Hours:</p>
                    <p style={{margin: 0}}>Every day except official holidays</p>
                    <p style={{margin: 0}}>From 10 AM to 8 PM</p>
                </div>

                {/* Social Media Icons */}
                <div
                    style={{
                        display: 'flex',
                        gap: isMobile ? 10 : 20,
                        marginTop: isMobile ? 15 : 30,
                    }}
                >
                    <a
                        href="https://wa.me/+989124845654"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{display: 'flex'}}
                    >
                        <Image
                            src="/whatsapp.png"
                            alt="whatsapp"
                            width={isMobile ? 22 : 44}
                            height={isMobile ? 22 : 44}
                            style={{height: isMobile ? 22 : 44}}
                        />
                    </a>
                    <a
                        href="https://wa.me/+989127116788"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{display: 'flex'}}
                    >
                        <Image
                            src="/whatsapp.png"
                            alt="whatsapp"
                            width={isMobile ? 22 : 44}
                            height={isMobile ? 22 : 44}
                            style={{height: isMobile ? 22 : 44}}
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/SenseOfStone"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{display: 'flex'}}
                    >
                        <Image
                            src="/instagram.png"
                            alt="instagram"
                            width={isMobile ? 22 : 44}
                            height={isMobile ? 22 : 44}
                            style={{height: isMobile ? 22 : 44}}
                        />
                    </a>
                    <a
                        href={'https://nshn.ir/87QbvbTeQxM3fl'}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{display: 'flex'}}
                    >
                        <Image
                            src="/neshan.png"
                            alt="neshan"
                            width={isMobile ? 22 : 44}
                            height={isMobile ? 22 : 44}
                            style={{height: isMobile ? 22 : 44}}
                        />
                    </a>
                    <a
                        href="https://maps.app.goo.gl/JVCKkbbeFkX2ZgKXA"
                        onClick={(e) => {
                            if (isMobile) {
                                e.preventDefault();
                                window.location.href = 'https://maps.app.goo.gl/JVCKkbbeFkX2ZgKXA';
                            }
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{display: 'flex'}}
                    >
                        <Image
                            src="/google-maps.png"
                            alt="google maps"
                            width={isMobile ? 22 : 44}
                            height={isMobile ? 22 : 44}
                            style={{height: isMobile ? 22 : 44}}
                        />
                    </a>
                    <a
                        href="https://waze.com/ul/htnkdbs0nw"
                        onClick={(e) => {
                            if (isMobile) {
                                e.preventDefault();
                                // تلاش برای باز کردن اپ Waze
                                window.location.href = 'waze://?ll=35.66275496688838,51.350474901898224&navigate=yes';
                                // اگر نصب نبود، به نسخه وب هدایت کن
                                setTimeout(() => {
                                    window.location.href = 'https://waze.com/ul/htnkdbs0nw';
                                }, 1500);
                            }
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{display: 'flex'}}
                    >
                        <Image
                            src="/waze.png"
                            alt="waze"
                            width={isMobile ? 22 : 44}
                            height={isMobile ? 22 : 44}
                            style={{height: isMobile ? 22 : 44}}
                        />
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div
                style={{
                    backgroundColor: '#C1D790',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                    padding: isMobile ? 5 : 10,
                    marginTop: isMobile ? 20 : 60,
                }}
            >
                <p
                    style={{
                        textAlign: 'center',
                        fontSize: isMobile ? 10 : 14,
                        backgroundColor: '#C1D790',
                        margin: 0,
                    }}
                >
                    Designed By{' '}
                    <a
                        href="https://www.sorez.org"
                        target="_blank"
                        style={{textDecoration: 'none'}}
                    >
                        <span style={{color: '#457EAB', fontWeight: 'bold', backgroundColor: '#C1D790'}}>So</span>
                        <span style={{color: 'black', fontWeight: 'bold', backgroundColor: '#C1D790'}}>Rez</span>
                    </a>
                </p>
            </div>
        </div>
    );
}
