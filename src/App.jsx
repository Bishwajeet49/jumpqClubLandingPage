import React, { useState } from 'react';
import { ArrowRight, Target, Zap, Cpu, Users, CheckCircle } from 'lucide-react';

const JumpQLandingPage = () => {
  const [activeTab, setActiveTab] = useState('targeting');

  const productFeatures = [
    {
      id: 'targeting',
      title: 'Intelligent Buyer Targeting',
      description: 'Track and engage with buyers in real-time. Enjoy next-level customer profiling with deep buyer insights.',
      icon: <Target className="w-12 h-12 text-[#e09900]" />
    },
    {
      id: 'opportunities',
      title: 'Eliminate Blindspots',
      description: 'Gain real-time visibility of your entire pipeline. Integrate leads, track qualifications, and engage at the right moment.',
      icon: <Zap className="w-12 h-12 text-green-600" />
    },
    {
      id: 'integration',
      title: 'Smooth Integration',
      description: 'Simply upload your leads to JumpQ, activate, and we\'ll notify you only when your attention is required.',
      icon: <Cpu className="w-12 h-12 text-purple-600" />
    }
  ];

  const testimonials = [
    "They are constantly looking at the ways to evolve their platform to make it easier for agents to convert leads into sales",
    "They are reviving the leads in our database that would have never been touched otherwise"
  ];

  return (
    <div className="bg-white">

    <header class="relative z-50 w-full h-24">
        <div
            class="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
            <a href="/" class="relative flex items-center inline-block h-5 h-full font-black leading-none">
            <img src={'/logo.png'} className=" border" alt="User-Profile" />
                <span class="ml-3 text-xl text-gray-800">JumpQ<span class="text-pink-500">.</span></span>
            </a>
            <nav id="nav"
                class="absolute top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative">
                <a href="#"
                    class="ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-[#e09900]">Home</a>
                <a href="#features"
                    class="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-[#e09900]">Features</a>
                <a href="#pricing"
                    class="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-[#e09900]">Pricing</a>
                <a href="#testimonials"
                    class="font-bold duration-100 transition-color hover:text-[#e09900]">Testimonials</a>
                <div class="flex flex-col block w-full font-medium border-t border-gray-200 md:hidden">
                    <a href="#_" class="w-full py-2 font-bold text-center text-pink-500">Login</a>
                    <a href="#_"
                        class="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-[#e09900] fold-bold">Get
                        Started</a>
                </div>
            </nav>
            <div
                class="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
                <a href="#_"
                    class="relative z-40 px-3 py-2 mr-0 text-sm font-bold text-pink-500 md:px-5 lg:text-white sm:mr-3 md:mt-0">Login</a>
                <a href="#_"
                    class="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all transition duration-100 duration-300 bg-[#e09900] rounded shadow-md fold-bold lg:bg-white lg:text-[#e09900] sm:w-full lg:shadow-none hover:shadow-xl">Get
                    Started</a>
                <svg class="absolute top-0 left-0 hidden w-screen max-w-3xl -mt-64 -ml-12 lg:block"
                    viewBox="0 0 818 815" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="c">
                            <stop stop-color="#E614F2" offset="0%" />
                            <stop stop-color="#FC3832" offset="100%" />
                        </linearGradient>
                        <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="f">
                            <stop stop-color="#657DE9" offset="0%" />
                            <stop stop-color="#1C0FD7" offset="100%" />
                        </linearGradient>
                        <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox"
                            id="a">
                            <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1" />
                            <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" in="shadowBlurOuter1" />
                        </filter>
                        <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox"
                            id="d">
                            <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1" />
                            <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter1" />
                        </filter>
                        <path
                            d="M160.52 108.243h497.445c17.83 0 24.296 1.856 30.814 5.342 6.519 3.486 11.635 8.602 15.12 15.12 3.487 6.52 5.344 12.985 5.344 30.815v497.445c0 17.83-1.857 24.296-5.343 30.814-3.486 6.519-8.602 11.635-15.12 15.12-6.52 3.487-12.985 5.344-30.815 5.344H160.52c-17.83 0-24.296-1.857-30.814-5.343-6.519-3.486-11.635-8.602-15.12-15.12-3.487-6.52-5.343-12.985-5.343-30.815V159.52c0-17.83 1.856-24.296 5.342-30.814 3.486-6.519 8.602-11.635 15.12-15.12 6.52-3.487 12.985-5.343 30.815-5.343z"
                            id="b" />
                        <path
                            d="M159.107 107.829H656.55c17.83 0 24.296 1.856 30.815 5.342 6.518 3.487 11.634 8.602 15.12 15.12 3.486 6.52 5.343 12.985 5.343 30.816V656.55c0 17.83-1.857 24.296-5.343 30.815-3.486 6.518-8.602 11.634-15.12 15.12-6.519 3.486-12.985 5.343-30.815 5.343H159.107c-17.83 0-24.297-1.857-30.815-5.343-6.519-3.486-11.634-8.602-15.12-15.12-3.487-6.519-5.343-12.985-5.343-30.815V159.107c0-17.83 1.856-24.297 5.342-30.815 3.487-6.519 8.602-11.634 15.12-15.12 6.52-3.487 12.985-5.343 30.816-5.343z"
                            id="e" />
                    </defs>
                    <g fill="none" fill-rule="evenodd" opacity=".9">
                        <g transform="rotate(65 416.452 409.167)">
                            <use fill="#000" filter="url(#a)" xlink:href="#b" />
                            <use fill="url(#c)" xlink:href="#b" />
                        </g>
                        <g transform="rotate(29 421.929 414.496)">
                            <use fill="#000" filter="url(#d)" xlink:href="#e" />
                            <use fill="url(#f)" xlink:href="#e" />
                        </g>
                    </g>
                </svg>
            </div>
            <div id="nav-mobile-btn"
                class="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10">
                <span class="block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1"></span>
                <span class="block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full"></span>
            </div>
        </div>
    </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Helping Sales Teams Excel <span className="text-[#e09900]">at Scale</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              JumpQ is a Generative AI company that elevates human potential by transforming sales engagement
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a 
                  href="mailto:khushal@jumpq.club" 
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#e09900] hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Features */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#e09900] font-semibold tracking-wide uppercase">Product Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Less Complexity, More Results
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {productFeatures.map((feature) => (
                <div key={feature.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-20 w-20 rounded-md bg-white shadow-lg">
                      {feature.icon}
                    </div>
                    <p className="ml-24 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                  </dt>
                  <dd className="mt-2 ml-24 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Proven Results */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#e09900] font-semibold tracking-wide uppercase">Proven Results</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Zap className="w-16 h-16 mx-auto text-green-600" />
                <h3 className="mt-4 text-xl font-bold text-gray-900">Efficiency</h3>
                <p className="mt-2 text-gray-500">Optimize performance and maximize ROI</p>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 mx-auto text-[#e09900]" />
                <h3 className="mt-4 text-xl font-bold text-gray-900">Superhuman</h3>
                <p className="mt-2 text-gray-500">Maximize reach and response time to delight customers</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-16 h-16 mx-auto text-purple-600" />
                <h3 className="mt-4 text-xl font-bold text-gray-900">No Limits</h3>
                <p className="mt-2 text-gray-500">Flexible and scalable platform for sales activities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#e09900] font-semibold tracking-wide uppercase">Customer Voices</h2>
            <div className="mt-10 grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md italic text-gray-600"
                >
                  "{testimonial}"
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* testemonial */}
      <div id="testimonials"
        className="flex items-center justify-center w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex-col items-center ">
            <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center">
              <p className="my-5 text-base font-medium tracking-tight text-[#f7c966] uppercase">Our customers love
                our product
              </p>
              <h2
                className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                Testimonials</h2>
              <p className="my-6 text-xl font-medium text-gray-500">Don't just take our word for it, read from our
                extensive
                list of case studies and customer testimonials.</p>
            </div>
            <div className="flex flex-col items-center justify-center max-w-2xl py-8 mx-auto xl:flex-row xl:max-w-full">
              <div className="w-full xl:w-1/2 xl:pr-8">
                <blockquote
                  className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                  <div className="flex flex-col pr-8">
                    <div className="relative pl-12">
                      <svg className="absolute left-0 w-10 h-10 text-[#e09900] fill-current"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                        <path
                          d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                      </svg>
                      <p className="mt-2 text-base text-gray-600">I'm loving these templates! Very nice
                        features and layouts.
                      </p>
                    </div>
                    <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">Sandra
                      Walton <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO
                        SomeCompany</span></h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                  </div>
                  <img className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                    src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2694&q=80"
                    alt="" />
                </blockquote>
                <blockquote
                  className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-16 mb-16 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease xl:mb-0">
                  <div className="flex flex-col pr-10">
                    <div className="relative pl-12">
                      <svg className="absolute left-0 w-10 h-10 text-[#e09900] fill-current"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                        <path
                          d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                      </svg>
                      <p className="mt-2 text-base text-gray-600">Really digging this service. Now I can
                        quickly bootstrap any
                        project.</p>
                    </div>
                    <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">Khushal 
                      Jones <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CoFounder & CEO
                        JumpQ</span></h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                  </div>
                  <img className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                    src="https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
                    alt="" />
                </blockquote>
              </div>
              <div className="w-full xl:w-1/2 xl:pl-8">
                <blockquote
                  className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                  <div className="flex flex-col pr-10">
                    <div className="relative pl-12">
                      <svg className="absolute left-0 w-10 h-10 text-[#e09900] fill-current"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                        <path
                          d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                      </svg>
                      <p className="mt-2 text-base text-gray-600">Extremely helpful in every single project we
                        have released.
                      </p>
                    </div>
                    <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">Neeraj 
                      <span className="mt-1 text-sm leading-5 text-gray-500 truncate">-  CoFounder & CTO SomeCompany</span>
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                  </div>
                  <img className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80"
                    alt="" />
                </blockquote>
                <blockquote
                  className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-16 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                  <div className="flex flex-col pr-10">
                    <div className="relative pl-12">
                      <svg className="absolute left-0 w-10 h-10 text-[#e09900] fill-current"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                        <path
                          d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                      </svg>
                      <p className="mt-2 text-base text-gray-600">Finally a quick and easy system I can use
                        for any type of
                        project.</p>
                    </div>
                    <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">Molly
                      Sanchez <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO
                        SomeCompany</span></h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                  </div>
                  <img className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
                    alt="" />
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#e09900]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to Transform Your Sales?</span>
            <span className="block text-xl mt-2">It's still day one</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="mailto:khushal@jumpq.club"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#e09900] bg-white hover:bg-blue-50"
              >
                Contact Us <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <footer className="px-4 pt-12 pb-8 text-white bg-white border-t border-gray-200">
        <div className="container flex flex-col justify-between max-w-6xl px-4 mx-auto overflow-hidden lg:flex-row">
            <div className="w-full pl-12 mr-4 text-left lg:w-1/4 sm:text-center sm:pl-0 lg:text-left">
                <a href="/"
                    className="flex justify-start block text-left sm:text-center lg:text-left sm:justify-center lg:justify-start">
                    <span className="flex items-start sm:items-center">
                        <svg className="w-auto h-6 text-gray-800 fill-current" viewBox="0 0 194 116"
                            xmlns="http://www.w3.org/2000/svg">
                            <g fill-rule="evenodd">
                                <path
                                    d="M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z">
                                </path>
                                <path d="M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z"></path>
                            </g>
                        </svg>
                    </span>
                </a>
                <p className="mt-6 mr-4 text-base text-gray-500">Crafting the next-level of user experience and engagement.
                </p>
            </div>
            <div className="block w-full pl-10 mt-6 text-sm lg:w-3/4 sm:flex lg:mt-0">
                <ul className="flex flex-col w-full p-0 font-medium text-left text-gray-700 list-none">
                    <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-gray-800 uppercase md:mt-0">
                        Product</li>
                    <li><a href="#_"
                            className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">Features</a>
                    </li>
                    <li><a href="#_"
                            className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">Integrations</a>
                    </li>
                    <li><a href="#_"
                            className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">Pricing</a>
                    </li>
                    <li><a href="#_"
                            className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">FAQ</a></li>
                </ul>
                <ul className="flex flex-col w-full p-0 font-medium text-left text-gray-700 list-none">
                    <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-gray-800 uppercase md:mt-0">
                        Company</li>
                    <li><a href="#_"
                            className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">Privacy</a>
                    </li>
                    <li><a href="#_" className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">Terms
                            of
                            Service</a></li>
                </ul>
                <ul className="flex flex-col w-full p-0 font-medium text-left text-gray-700 list-none">
                    <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-gray-800 uppercase md:mt-0">
                        TailwindCSS
                    </li>
                    <li><a href="https://devdojo.com/tailwindcss/components"
                            className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">Tailwind
                            Components</a></li>
                    <li><a href="https://devdojo.com/tailwindcss/templates"
                            className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">Tailwind
                            Templates</a></li>
                    <li><a href="https://devdojo.com/tails"
                            className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">Tails</a></li>
                </ul>
                <div className="flex flex-col w-full text-gray-700">
                    <div className="inline-block px-3 py-2 mt-5 font-bold text-gray-800 uppercase md:mt-0">Follow Us</div>
                    <div className="flex justify-start pl-4 mt-2">
                        <a className="flex items-center block mr-6 text-gray-400 no-underline hover:text-gray-600"
                            target="_blank" rel="noopener noreferrer" href="https://devdojo.com">
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                            </svg>
                        </a>
                        <a className="flex items-center block mr-6 text-gray-400 no-underline hover:text-gray-600"
                            target="_blank" rel="noopener noreferrer" href="https://devdojo.com">
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                            </svg>
                        </a>
                        <a className="flex items-center block text-gray-400 no-underline hover:text-gray-600"
                            target="_blank" rel="noopener noreferrer" href="https://devdojo.com">
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-4 pt-6 mt-10 text-center text-gray-500 border-t border-gray-300">© 2024 JumpQ. All rights
            reserved.</div>
    </footer>


    </div>
  );
};

export default JumpQLandingPage;