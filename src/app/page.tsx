'use client';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size on mount and resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Mobile breakpoint at 768px
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = () => {};

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start',
                position: 'relative',
                minHeight: '100vh',
                overflow: 'hidden',
                padding: isMobile ? '10px' : '20px', // Reduced padding on mobile
            }}
        >
            {/* Top-Left Quarter Circle */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: isMobile ? 100 : 250, // Smaller on mobile
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

            {/* Logo */}
            <Image
                src="/senseofstone.png"
                alt="senseofstone"
                width={isMobile ? 150 : 213} // Smaller logo on mobile
                height={isMobile ? 124 : 176}
                style={{ objectFit: 'contain' }}
            />

            {/* Coming Soon Section */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row', // Stack vertically on mobile
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: isMobile ? 50 : 132, // Reduced margin on mobile
                    gap: isMobile ? 10 : 20,
                }}
            >
                <h1
                    style={{
                        fontSize: isMobile ? 36 : 60, // Smaller font on mobile
                        fontWeight: 'bold',
                        textAlign: isMobile ? 'center' : 'left',
                    }}
                >
                    Coming Soon...
                </h1>
                <Image
                    src="/rocket.png"
                    alt="rocket"
                    width={isMobile ? 50 : 70} // Smaller rocket on mobile
                    height={isMobile ? 50 : 70}
                    style={{ height: isMobile ? 50 : 70 }}
                />
            </div>

            {/* Description Text */}
            <p
                style={{
                    marginTop: isMobile ? 20 : 40,
                    fontSize: isMobile ? 16 : 24, // Smaller font on mobile
                    textAlign: isMobile ? 'center' : 'center',
                    padding: isMobile ? '0 20px' : 0, // Add side padding on mobile
                    maxWidth: isMobile ? '90%' : '100%',
                }}
            >
                <span style={{ fontWeight: 'bold' }}>Sense Of Stone</span> website will be
                launched any moment. Until then, you can keep in touch with us by the links
                below
            </p>

            <div
                style={{
                    marginTop: isMobile ? 20 : 30,
                    textAlign: 'center',
                    fontSize: isMobile ? 14 : 18,
                    padding: isMobile ? '0 20px' : 0,
                    maxWidth: isMobile ? '90%' : '100%',
                }}
            >
                <p style={{ fontWeight: 'bold', margin: 0 }}>Working Hours:</p>
                <p style={{ margin: 0 }}>Every day except official holidays</p>
                <p style={{ margin: 0 }}>From 10 AM to 8 PM</p>
            </div>

            {/* Social Media Icons */}
            <div
                style={{
                    display: 'flex',
                    gap: isMobile ? 8 : 20, // Smaller gap on mobile
                    marginTop: isMobile ? 20 : 30,
                }}
            >
                <a
                    href="https://wa.me/+989124845654"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex' }}
                >
                    <Image
                        src="/whatsapp.png"
                        alt="whatsapp"
                        width={isMobile ? 32 : 44} // Smaller icons on mobile
                        height={isMobile ? 32 : 44}
                    />
                </a>
                <a
                    href="https://wa.me/+989127116788"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex' }}
                >
                    <Image
                        src="/whatsapp.png"
                        alt="whatsapp"
                        width={isMobile ? 32 : 44}
                        height={isMobile ? 32 : 44}
                    />
                </a>
                <a
                    href="https://www.instagram.com/SenseOfStone"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex' }}
                >
                    <Image
                        src="/instagram.png"
                        alt="instagram"
                        width={isMobile ? 32 : 44}
                        height={isMobile ? 32 : 44}
                    />
                </a>
                <a
                    href="https://neshan.org/maps/places/QbvbTY0xM3fm#c35.663-51.351-18z-0p"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex' }}
                >
                    <Image
                        src="/neshan.png"
                        alt="instagram"
                        width={isMobile ? 34 : 46}
                        height={isMobile ? 34 : 46}
                    />
                </a>
                <a
                    href="https://www.google.com/maps?q=Tehran,+E+Yaft+Abad+St,+M972+35M+%D9%85%D8%B1%DA%A9%D8%B2+%D8%AE%D8%B1%DB%8C%D8%AF+%D9%85%D8%AF%D8%B1%D9%86+%D8%B3%D9%86%D8%AA%D8%B1&ftid=0x3f8e010001a27fb3:0x6a0b5f0c5126dc92&entry=gps&lucs=,94259550,94242592,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI1LjA1LjMuNzIwMTgwNTk0MBgAIMi8Byp1LDk0MjU5NTUwLDk0MjQyNTkyLDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjAzMDE5LDQ3MDg0MzA0LDk0MjA4NDU4LDk0MjA4NDQ3QgJJUg%3D%3D&g_st=com.google.maps.preview.copy%D8%AD"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex' }}
                >
                    <Image
                        src="/google-maps.png"
                        alt="instagram"
                        width={isMobile ? 32 : 44}
                        height={isMobile ? 32 : 44}
                    />
                </a>
            </div>

            {/* Footer */}
            <div
                style={{
                    backgroundColor: '#C1D790',
                    width: '100%',
                    height: isMobile ? 40 : 50, // Slightly shorter footer on mobile
                    position: 'fixed',
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                }}
            >
                <p
                    style={{
                        textAlign: 'center',
                        backgroundColor: '#C1D790',
                        fontSize: isMobile ? 14 : 16, // Smaller font on mobile
                        margin: 0,
                    }}
                >
                    Designed By
                    <a
                        href="https://www.sorez.org"
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                    >
                        <span
                            style={{
                                color: '#457EAB',
                                backgroundColor: '#C1D790',
                                fontWeight: 'bold',
                            }}
                        >
                            So
                        </span>
                        <span
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                backgroundColor: '#C1D790',
                            }}
                        >
                            Rez
                        </span>
                    </a>
                </p>
            </div>
        </div>
    );
}