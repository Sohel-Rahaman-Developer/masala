/* eslint-disable @next/next/no-img-element */
"use client"
import Link from 'next/link';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import useFadeInFromTop from '../hooks/useFadeInFromTop';
import useFadeInFromLeft from '../hooks/useFadeInFromLeft';
import useFadeInFromBottom from '../hooks/useFadeInFromBottom';

function Footer() {
    const logoRef = useRef(null);
    const logoRefb = useRef(null);
    const descriptionRef = useRef(null);
    const socialIconsRef = useRef(null);
    const servicesRef = useRef(null);
    const linksRef = useRef(null);
    const contactRef = useRef(null);
    useFadeInFromTop(logoRef);
    useFadeInFromTop(logoRefb);
    useFadeInFromLeft(descriptionRef);
    useFadeInFromBottom(socialIconsRef);
    useFadeInFromTop(servicesRef);
    useFadeInFromLeft(linksRef);
    useFadeInFromBottom(contactRef);


    return (
        <footer className="bg-gray-900">
            <div className="max-w-screen-2xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    
                    <div>
                        <div ref={logoRef} className="flex justify-center text-teal-300 sm:justify-start">
                            <img
                                src="/images/milmapure.png"
                                className="max-h-[80px] lg:h-[80px] p-1 img-shadow"
                                alt="Tailwindcss Navigation"
                            />
                        </div>
                        <p ref={descriptionRef} className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left">
                            Milmapure: Where Tradition Meets Flavor. Pure, Natural, and Chemical-Free Spice Blends for Culinary Excellence.
                        </p>
                        <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
                            <li>
                                <Link href="/" legacyBehavior>
                                    <a className="text-[#ca2020] transition hover:text-[#ca2020]/75">
                                        <span className="sr-only">Facebook</span>
                                        <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" legacyBehavior>
                                    <a className="text-[#ca2020] transition hover:text-[#ca2020]/75">
                                        <span className="sr-only">Instagram</span>
                                        <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" legacyBehavior>
                                    <a className="text-[#ca2020] transition hover:text-[#ca2020]/75">
                                        <span className="sr-only">Twitter</span>
                                        <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                                    </a>
                                </Link>
                            </li>
                           <li>
                                <Link href="/" legacyBehavior>
                                    <a className="text-[#ca2020] transition hover:text-[#ca2020]/75">
                                        <span className="sr-only">GitHub</span>
                                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                                    </a>
                                </Link>
                            </li>
                           {/*   <li>
                                <Link href="/" legacyBehavior>
                                    <a className="text-[#ca2020] transition hover:text-[#ca2020]/75">
                                        <span className="sr-only">Dribbble</span>
                                        <FontAwesomeIcon icon={faDribbble} className="w-6 h-6" />
                                    </a>
                                </Link>
                            </li> */}
                        </ul>
                        <div>
                    <div ref={logoRefb} className="flex justify-center text-teal-300 sm:justify-start">
                            <img
                                src="/images/tslogo.png"
                                className="max-w-[180px]  p-1 img-shadow"
                                alt="Tailwindcss Navigation"
                            />
                        </div>
                    </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-3">
                        <div ref={servicesRef} className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">Our Services</p>
                            <nav className="mt-8">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link href="/products" legacyBehavior>
                                            <a className="text-white transition hover:text-white/75">
                                               All Products
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products/basic-ground-spices" legacyBehavior>
                                            <a className="text-white transition hover:text-white/75">
                                            Basic Ground Spices
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products/blended-spices" legacyBehavior>
                                            <a className="text-white transition hover:text-white/75">
                                            Blended Spices
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products/whole-spices" legacyBehavior>
                                            <a className="text-white transition hover:text-white/75">
                                              whole-spices
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div ref={linksRef} className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">Helpful Links</p>
                            <nav className="mt-8">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link href="/" legacyBehavior>
                                            <a className="text-white transition hover:text-white/75">
                                                Home
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products" legacyBehavior>
                                            <a className="text-white transition hover:text-white/75">
                                               All Products
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products/basic-ground-spices" legacyBehavior>
                                            <a className="text-white transition hover:text-white/75">
                                            Basic Ground Spices
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products/blended-spices" legacyBehavior>
                                            <a className="text-white transition hover:text-white/75">
                                            Blended Spices
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products/whole-spices" legacyBehavior>
                                            <a className="text-white transition hover:text-white/75">
                                              whole-spices
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products/gallery" legacyBehavior>
                                            <a className="text-white transition hover:text-white/75">
                                            Gallery
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products/about" legacyBehavior>
                                            <a className="text-white transition hover:text-white/75">
                                            About Us
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us" legacyBehavior>
                                            <a className="text-white transition hover:text-white/75">
                                            Contact Us
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div ref={contactRef} className="text-center sm:text-left">
                            <p className="text-lg font-medium text-white">Contact Us</p>
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <Link href="mailto:tsfoodproduct@gmail.com" legacyBehavior>
                                        <a className="flex items-center justify-center sm:justify-start gap-1.5 group">
                                            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-white shrink-0" />
                                            <span className="text-white transition group-hover:text-white/75">
                                                tsfoodproduct@gmail.com
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        className="flex items-center justify-center sm:justify-start gap-1.5 group"
                                        href="tel:8017558255" 
                                    >
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-white shrink-0" />
                                        <span className="text-white transition group-hover:text-white/75">
                                            8017558255 / 9088822285
                                        </span>
                                    </a>
                                </li>
                                <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-white shrink-0" />
                                    <address className="-mt-0.5 not-italic text-white">
                                        Block No. MOUZA-11 khagenhat khagenhat Falakata alipurduar 735204
                                    </address>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pt-6 mt-12 border-t border-gray-800">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p  className="text-sm text-gray-400">
                            <span className="block sm:inline">All rights reserved.</span>
                            <span className="block sm:inline"> &middot; </span>
                            <Link href="/" legacyBehavior>
                                <a className="inline-block text-[#ca2020] underline transition hover:text-[#ca2020]/75">
                                    Terms & Conditions
                                </a>
                            </Link>
                            <span> &middot; </span>
                            <Link href="/" legacyBehavior>
                                <a className="inline-block text-[#ca2020] underline transition hover:text-[#ca2020]/75">
                                    Privacy Policy
                                </a>
                            </Link>
                        </p>
                        <p  className="mt-4 text-sm text-gray-400 sm:mt-0">&copy; 2024 tsfoodproduct. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
