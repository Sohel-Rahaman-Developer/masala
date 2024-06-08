/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

function MediaCenter() {
  return (
    <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-6">
                <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
                    <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
                        <div>
                            <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">Media Center</p>
                        </div>
                        <div className="mt-4 lg:w-4/5 xl:w-3/5">
                            <p className="text-base leading-6 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className="mt-16 w-full">
                             <Link href="/gallery"><button className="px-4 bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200  flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700 focus:ring-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 dark:hover:bg-gray-100">
                            <p className="text-xl font-medium leading-5">See More</p>

                                <svg className="dark:text-gray-900" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66663 16H25.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 21.3333L25.3333 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 10.6667L25.3333 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button></Link>
                        </div>
                    </div>
          
                    <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
                        <div className="">
                            <img className="hidden lg:block max-h-[420px]" src="/products-list-images/sambar2.png" alt="sofa" />
                            <img className="w-80 sm:w-auto lg:hidden" src="/products-list-images/sambar.png" alt="sofa" />
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
                            <div>
                                <img className="hidden lg:block max-h-[220px]" src="/products-list-images/rajma2.png" alt="chairs" />
                                <img className="w-80 sm:w-auto lg:hidden" src="/products-list-images/rajma.png" alt="chairs" />
                            </div>
                            <div>
                                <img className="hidden lg:block max-h-[220px]" src="/products-list-images/pulao.png" alt="chairs" />
                                <img className="w-80 sm:w-auto lg:hidden" src="/products-list-images/pulao2.png" alt="chairs" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default MediaCenter