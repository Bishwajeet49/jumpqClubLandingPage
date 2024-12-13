import { SiFacebook, SiLinkedin, SiX } from '@icons-pack/react-simple-icons';
import {
    ArrowRight,
    CheckCircle,
    CheckCircle2,
    Clock,
    Cpu,
    Database,
    FileText,
    FootprintsIcon,
    Import,
    Link,
    MessageCircle,
    Quote,
    Target,
    Users,
    Zap,
} from 'lucide-react';
import { useState } from 'react';

const productFeatures = [
    {
        id: 'targeting',
        title: 'Intelligent Buyer Targeting',
        description:
            'Track and engage with buyers in real-time. Enjoy next-level customer profiling with deep buyer insights.',
        icon: <Target className='h-12 w-12 text-[var(--accent-color)]' />,
    },
    {
        id: 'opportunities',
        title: 'Eliminate Blindspots',
        description:
            'Gain real-time visibility of your entire pipeline. Integrate leads, track qualifications, and engage at the right moment.',
        icon: <Zap className='h-12 w-12 text-green-600' />,
    },
    {
        id: 'integration',
        title: 'Smooth Integration',
        description:
            "Simply upload your leads to JumpQ, activate, and we'll notify you only when your attention is required.",
        icon: <Cpu className='h-12 w-12 text-purple-600' />,
    },
];

const teamData = [
    {
        name: 'Sandra Walton',
        deg: 'CEO SomeCompany',
        quote: "I'm loving these templates! Very nice features and layouts.",
        image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2694&q=80',
    },
    {
        name: 'Neeraj',
        deg: 'CoFounder & CTO JumpQ',
        quote: 'Extremely helpful in every single project we have released.',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
    },
    {
        name: 'Neeraj',
        deg: 'CoFounder & CTO JumpQ',
        quote: 'Extremely helpful in every single project we have released.',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
    },
    {
        name: 'Neeraj',
        deg: 'CoFounder & CTO JumpQ',
        quote: 'Extremely helpful in every single project we have released.',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
    },
    {
        name: 'Neeraj',
        deg: 'CoFounder & CTO JumpQ',
        quote: 'Extremely helpful in every single project we have released.',
        image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
    },
];

const JumpQLandingPage = () => {
    const [activeTab, setActiveTab] = useState('targeting');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-white'>
            <header className='relative z-50 h-24 w-full'>
                <div className='container mx-auto flex h-full max-w-6xl items-center justify-center px-8 sm:justify-between xl:px-0'>
                    <a
                        href='/'
                        className='relative flex h-full items-center font-black leading-none'>
                        <img src={'/logo.png'} className='border' alt='User-Profile' />
                        <span className='ml-3 text-xl text-gray-800'>
                            JumpQ<span className='text-pink-500'>.</span>
                        </span>
                    </a>
                    <nav
                        id='nav'
                        className={`${isOpen ? 'block' : 'hidden'} absolute left-0 top-0 z-50 mt-24 flex h-64 w-full flex-col items-center justify-between border-t border-gray-200 bg-white pt-5 text-sm text-gray-800 md:relative md:mt-0 md:flex md:h-24 md:w-auto md:flex-row md:border-none md:bg-transparent md:py-0 lg:text-base`}>
                        <a
                            href='#'
                            className='transition-color ml-0 mr-0 font-bold duration-100 hover:text-[var(--accent-color)] md:ml-12 md:mr-3 lg:mr-8'>
                            Home
                        </a>
                        <a
                            href='#features'
                            className='transition-color mr-0 font-bold duration-100 hover:text-[var(--accent-color)] md:mr-3 lg:mr-8'>
                            Features
                        </a>
                        <a
                            href='#pricing'
                            className='transition-color mr-0 font-bold duration-100 hover:text-[var(--accent-color)] md:mr-3 lg:mr-8'>
                            Pricing
                        </a>
                        <a
                            href='#testimonials'
                            className='transition-color font-bold duration-100 hover:text-[var(--accent-color)]'>
                            Testimonials
                        </a>
                        <div className='flex w-full flex-col border-t border-gray-200 font-medium md:hidden'>
                            <a
                                href='#_'
                                className='w-full py-2 text-center font-bold text-pink-500'>
                                Login
                            </a>
                            <a
                                href='#_'
                                className='fold-bold relative inline-block w-full bg-[var(--accent-color)] px-5 py-3 text-center text-sm leading-none text-white'>
                                Get Started
                            </a>
                        </div>
                    </nav>
                    <div className='absolute left-0 mt-48 hidden w-full flex-col items-center justify-center border-b border-gray-200 pb-8 md:relative md:mt-0 md:flex md:w-auto md:flex-row md:items-end md:justify-between md:border-none md:bg-transparent md:p-0'>
                        <a
                            href='#_'
                            className='relative z-40 mr-0 px-3 py-2 text-sm font-bold text-pink-500 sm:mr-3 md:mt-0 md:px-5 lg:text-white'>
                            Login
                        </a>
                        <a
                            href='#_'
                            className='fold-bold relative z-40 inline-block h-full w-auto rounded bg-[var(--accent-color)] px-5 py-3 text-sm font-bold leading-none text-white shadow-md transition-all duration-300 hover:shadow-xl sm:w-full lg:bg-white lg:text-[var(--accent-color)] lg:shadow-none'>
                            Get Started
                        </a>
                        <svg
                            className='absolute left-0 top-0 -ml-12 -mt-64 hidden w-screen max-w-3xl'
                            viewBox='0 0 818 815'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'>
                            <defs>
                                <linearGradient x1='0%' y1='0%' x2='100%' y2='100%' id='c'>
                                    <stop stopColor='#E614F2' offset='0%' />
                                    <stop stopColor='#FC3832' offset='100%' />
                                </linearGradient>
                                <linearGradient x1='0%' y1='0%' x2='100%' y2='100%' id='f'>
                                    <stop stopColor='#657DE9' offset='0%' />
                                    <stop stopColor='#1C0FD7' offset='100%' />
                                </linearGradient>
                                <filter
                                    x='-4.7%'
                                    y='-3.3%'
                                    width='109.3%'
                                    height='109.3%'
                                    filterUnits='objectBoundingBox'
                                    id='a'>
                                    <feOffset dy='8' in='SourceAlpha' result='shadowOffsetOuter1' />
                                    <feGaussianBlur
                                        stdDeviation='8'
                                        in='shadowOffsetOuter1'
                                        result='shadowBlurOuter1'
                                    />
                                    <feColorMatrix
                                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'
                                        in='shadowBlurOuter1'
                                    />
                                </filter>
                                <filter
                                    x='-4.7%'
                                    y='-3.3%'
                                    width='109.3%'
                                    height='109.3%'
                                    filterUnits='objectBoundingBox'
                                    id='d'>
                                    <feOffset dy='8' in='SourceAlpha' result='shadowOffsetOuter1' />
                                    <feGaussianBlur
                                        stdDeviation='8'
                                        in='shadowOffsetOuter1'
                                        result='shadowBlurOuter1'
                                    />
                                    <feColorMatrix
                                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'
                                        in='shadowBlurOuter1'
                                    />
                                </filter>
                                <path
                                    d='M160.52 108.243h497.445c17.83 0 24.296 1.856 30.814 5.342 6.519 3.486 11.635 8.602 15.12 15.12 3.487 6.52 5.344 12.985 5.344 30.815v497.445c0 17.83-1.857 24.296-5.343 30.814-3.486 6.519-8.602 11.635-15.12 15.12-6.52 3.487-12.985 5.344-30.815 5.344H160.52c-17.83 0-24.296-1.857-30.814-5.343-6.519-3.486-11.635-8.602-15.12-15.12-3.487-6.52-5.343-12.985-5.343-30.815V159.52c0-17.83 1.856-24.296 5.342-30.814 3.486-6.519 8.602-11.635 15.12-15.12 6.52-3.487 12.985-5.343 30.815-5.343z'
                                    id='b'
                                />
                                <path
                                    d='M159.107 107.829H656.55c17.83 0 24.296 1.856 30.815 5.342 6.518 3.487 11.634 8.602 15.12 15.12 3.486 6.52 5.343 12.985 5.343 30.816V656.55c0 17.83-1.857 24.296-5.343 30.815-3.486 6.518-8.602 11.634-15.12 15.12-6.519 3.486-12.985 5.343-30.815 5.343H159.107c-17.83 0-24.297-1.857-30.815-5.343-6.519-3.486-11.634-8.602-15.12-15.12-3.487-6.519-5.343-12.985-5.343-30.815V159.107c0-17.83 1.856-24.297 5.342-30.815 3.487-6.519 8.602-11.634 15.12-15.12 6.52-3.487 12.985-5.343 30.816-5.343z'
                                    id='e'
                                />
                            </defs>
                            <g fill='none' fillRule='evenodd' opacity='.9'>
                                <g transform='rotate(65 416.452 409.167)'>
                                    <use fill='#000' filter='url(#a)' xlink:href='#b' />
                                    <use fill='url(#c)' xlink:href='#b' />
                                </g>
                                <g transform='rotate(29 421.929 414.496)'>
                                    <use fill='#000' filter='url(#d)' xlink:href='#e' />
                                    <use fill='url(#f)' xlink:href='#e' />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div
                        id='nav-mobile-btn'
                        className='absolute right-0 top-0 z-50 mr-10 mt-8 block w-6 cursor-pointer select-none sm:mt-10 md:hidden'
                        onClick={() => setIsOpen(!isOpen)}>
                        <span className='mt-2 block h-1 w-full transform rounded-full bg-gray-800 duration-200 sm:mt-1'></span>
                        <span className='mt-1 block h-1 w-full transform rounded-full bg-gray-800 duration-200'></span>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className='relative bg-gradient-to-br from-blue-50 to-white'>
                <div className='mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
                            Helping Sales Teams Excel{' '}
                            <span className='text-[var(--accent-color)]'>at Scale</span>
                        </h1>
                        <p className='mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl'>
                            JumpQ is a Generative AI company that elevates human potential by
                            transforming sales engagement
                        </p>
                        <div className='mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8'>
                            <div className='rounded-md shadow'>
                                <a
                                    href='mailto:khushal@jumpq.club'
                                    className='fold-bold relative z-40 flex h-full w-auto w-full items-center justify-center rounded rounded-md border border-transparent bg-[var(--accent-color)] px-5 py-3 text-base font-bold font-medium leading-none shadow-md transition-all duration-300 hover:shadow-xl sm:w-full md:px-10 md:py-4 md:text-lg lg:bg-white lg:text-[var(--accent-color)] lg:shadow-none'>
                                    Get Started <ArrowRight className='-mr-1 ml-3 h-5 w-5' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Features */}
            <div id='product-features' className='bg-gray-50 pt-16'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='lg:text-center'>
                        <h2 className='text-base font-semibold uppercase tracking-wide text-[var(--accent-color)]'>
                            Product Features
                        </h2>
                        <p className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
                            Less Complexity, More Results
                        </p>
                    </div>
                    <div className='mt-10'>
                        <dl className='space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0'>
                            {productFeatures.map((feature) => (
                                <div key={feature.id} className='relative'>
                                    <dt>
                                        <div className='absolute flex h-20 w-20 items-center justify-center rounded-md bg-white shadow-lg'>
                                            {feature.icon}
                                        </div>
                                        <p className='ml-24 text-lg font-medium leading-6 text-gray-900'>
                                            {feature.title}
                                        </p>
                                    </dt>
                                    <dd className='ml-24 mt-2 text-base text-gray-500'>
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Comparison */}
                    <h2 className='mt-20 text-center text-3xl font-bold text-black'>
                        Experience the JumpQ Impact
                    </h2>
                    <div className='flex items-center justify-center p-10'>
                        <div className='mx-auto grid w-full max-w-6xl justify-between gap-y-10 md:grid-cols-2'>
                            {/* Before JumpQ */}
                            <div className='space-y-8'>
                                <h3 className='mb-6 text-2xl font-semibold text-gray-400'>
                                    Before JumpQ
                                </h3>
                                <div className='space-y-6'>
                                    <Feature
                                        icon={Database}
                                        title='Multiple Databases'
                                        description='Scattered data across CRM, LinkedIn, GST, RTO, and more'
                                    />
                                    <Feature
                                        icon={Users}
                                        title='Pre-Sales Complexity'
                                        description='Managing 10-12 different touch-points manually'
                                    />
                                    <Feature
                                        icon={FileText}
                                        title='Product Information'
                                        description='Juggling brochures, location maps, and floor diagrams'
                                    />
                                    <Feature
                                        icon={MessageCircle}
                                        title='Manual Engagement'
                                        description='Time-consuming CRM remarks and follow-ups'
                                    />
                                    <Feature
                                        icon={Link}
                                        title='Fragmented Integrations'
                                        description='Multiple tools for WhatsApp, Email, and other channels'
                                    />
                                </div>
                            </div>

                            {/* After JumpQ */}
                            <div className='space-y-8'>
                                <h3 className='mb-6 text-2xl font-semibold text-[var(--accent-color)]'>
                                    After JumpQ
                                </h3>
                                <div className='space-y-6'>
                                    <Feature
                                        icon={Import}
                                        title='One-Click Import'
                                        description='Seamlessly import all your leads into one platform'
                                        modern
                                    />
                                    <Feature
                                        icon={CheckCircle2}
                                        title='JumpQ On'
                                        description='Activate intelligent sales management with a single click'
                                        modern
                                    />
                                    <Feature
                                        icon={FootprintsIcon}
                                        title='Smart Walk-in Management'
                                        description='Effortlessly track and manage walk-in customers'
                                        modern
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Company */}
            <div className='w-full bg-gray-50'>
                <div className='m-auto max-w-[72rem] py-20 text-gray-500'>
                    <div className='container mx-auto px-4'>
                        <h2 className='mb-8 text-center text-4xl font-bold md:text-5xl'>
                            <span className='text-[var(--accent-color)]'>
                                Elevating Human Potential
                            </span>
                        </h2>

                        <p className='mx-auto mb-12 max-w-3xl text-center text-xl text-gray-700'>
                            JumpQ is a Generative AI company committed to revolutionizing sales
                            strategies, workflows, and technologies to match modern buyer
                            preferences.
                        </p>

                        <div className='mb-16 grid gap-12 md:grid-cols-2'>
                            <div>
                                <h3 className='mb-4 text-2xl font-semibold text-[var(--accent-color)]'>
                                    The Challenge
                                </h3>
                                <p className='mb-6 text-gray-700'>
                                    Our buyers have changed the way they buy, but we haven't evolved
                                    our sales strategies, workflows, and technologies to match their
                                    preferences. The old way of sales engagement — relying on
                                    templates and manual efforts to scale — won't cut it anymore.
                                </p>
                            </div>
                            <div>
                                <h3 className='mb-4 text-2xl font-semibold text-[var(--accent-color)]'>
                                    Our Solution
                                </h3>
                                <p className='mb-6 text-gray-700'>
                                    We need a new way - one powered by generative AI - to find and
                                    qualify prospects, engage with high impact, and execute dynamic
                                    touch patterns in a buyer-centric way. JumpQ is committed to
                                    owning the entire journey for your success, providing you with
                                    an unparalleled advantage. You. Amplified.
                                </p>
                            </div>
                        </div>

                        <div className='mb-16 rounded-xl p-8'>
                            <h3 className='mb-6 text-center text-2xl font-semibold text-[var(--accent-color)]'>
                                Imagine a World Where:
                            </h3>
                            <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
                                <VisionItem
                                    icon={Zap}
                                    text='Buyers are delighted by personalized, relevant & timely experiences'
                                />
                                <VisionItem
                                    icon={Target}
                                    text='Only one platform needed to execute & nurture prospecting'
                                />
                                <VisionItem
                                    icon={Clock}
                                    text='Sales teams spend more time building relationships with buyers'
                                />
                            </div>
                        </div>

                        <div className='mb-16 text-center'>
                            <h3 className='mb-4 text-2xl font-semibold'>Our Commitment</h3>
                            <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-700'>
                                We don't sell tools. We deliver outcomes. We want to be pioneers in
                                building India's New Era of Sales.
                            </p>
                            <p className='text-3xl font-bold text-[var(--accent-color)]'>
                                It's still day one.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Proven Results */}
            <div className='bg-white py-16'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='lg:text-center'>
                        <h2 className='text-base font-semibold uppercase tracking-wide text-[var(--accent-color)]'>
                            Proven Results
                        </h2>
                        <div className='mt-10 grid grid-cols-1 gap-8 md:grid-cols-3'>
                            <div className='text-center'>
                                <Zap className='mx-auto h-16 w-16 text-green-600' />
                                <h3 className='mt-4 text-xl font-bold text-gray-900'>Efficiency</h3>
                                <p className='mt-2 text-gray-500'>
                                    Optimize performance and maximize ROI
                                </p>
                            </div>
                            <div className='text-center'>
                                <Users className='mx-auto h-16 w-16 text-[var(--accent-color)]' />
                                <h3 className='mt-4 text-xl font-bold text-gray-900'>Superhuman</h3>
                                <p className='mt-2 text-gray-500'>
                                    Maximize reach and response time to delight customers
                                </p>
                            </div>
                            <div className='text-center'>
                                <CheckCircle className='mx-auto h-16 w-16 text-purple-600' />
                                <h3 className='mt-4 text-xl font-bold text-gray-900'>No Limits</h3>
                                <p className='mt-2 text-gray-500'>
                                    Flexible and scalable platform for sales activities
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className='bg-gray-50 py-16'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <div className='lg:text-center'>
                        <h2 className='text-base font-semibold uppercase tracking-wide text-[var(--accent-color)]'>
                            Customer Voices
                        </h2>
                        <p className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
                            What Our Clients Say
                        </p>
                        <JumpQTestimonials />
                    </div>
                </div>
            </div>

            {/* testemonial */}
            <div
                id='testimonials'
                className='flex w-full items-center justify-center border-t border-gray-200 px-8 py-10 md:py-16 lg:py-24 xl:px-0 xl:py-40'>
                <div className='mx-auto max-w-7xl'>
                    <div className='flex-col items-center'>
                        <div className='mx-auto flex h-full w-full max-w-2xl flex-col items-center justify-center pr-8 text-center'>
                            <p className='my-5 text-base font-medium uppercase tracking-tight text-[#f7c966]'>
                                Our Team is Passionate About What We Do
                            </p>
                            <h2 className='text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl'>
                                Meet Our Experts
                            </h2>
                            <p className='my-6 text-xl font-medium text-gray-500'>
                                Don't just take our word for it—get to know the talented individuals
                                behind our success. Read about the diverse backgrounds and expertise
                                of the team members who drive our vision forward.
                            </p>
                        </div>
                        <div className='mx-auto flex w-full max-w-full flex-col items-center justify-center py-8 xl:max-w-full xl:flex-row'>
                            <div className='flex w-full flex-wrap justify-center gap-x-3 gap-y-5'>
                                {teamData.map((data, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className='max-w-72 overflow-hidden rounded-md bg-gray-100 px-3 py-2 text-gray-600'>
                                            <div className='m-auto h-32 w-32'>
                                                <img
                                                    src={data.image}
                                                    alt=''
                                                    className='aspect-square rounded-full object-cover'
                                                />
                                            </div>
                                            <p className='mt-2 text-center font-bold'>
                                                {data.name}
                                            </p>
                                            <p className='mt-2 text-center font-semibold text-[var(--accent-color)]'>
                                                {data.deg}
                                            </p>
                                            <p className='mt-2 text-center'>{data.quote}</p>
                                            <div className='mt-4 flex items-center justify-center gap-3'>
                                                <a href='#'>
                                                    <SiX />
                                                </a>
                                                <a href='#'>
                                                    <SiFacebook />
                                                </a>
                                                <a href='#'>
                                                    <SiLinkedin />
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className='bg-[var(--accent-color)]'>
                <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8'>
                    <h2 className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
                        <span className='block'>Ready to Transform Your Sales?</span>
                        <span className='mt-2 block text-xl'>It's still day one</span>
                    </h2>
                    <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
                        <div className='inline-flex rounded-md shadow'>
                            <a
                                href='mailto:khushal@jumpq.club'
                                className='inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-[var(--accent-color)] hover:bg-blue-50'>
                                Contact Us <ArrowRight className='-mr-1 ml-3 h-5 w-5' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <footer className='border-t border-gray-200 bg-white px-4 pb-8 pt-12 text-white'>
                <div className='container mx-auto flex max-w-6xl flex-col justify-between overflow-hidden px-4 lg:flex-row'>
                    <div className='mr-4 w-full pl-12 text-left sm:pl-0 sm:text-center lg:w-1/4 lg:text-left'>
                        <a
                            href='/'
                            className='flex justify-start text-left sm:justify-center sm:text-center lg:justify-start lg:text-left'>
                            <span className='flex items-start sm:items-center'>
                                <svg
                                    className='h-6 w-auto fill-current text-gray-800'
                                    viewBox='0 0 194 116'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <g fillRule='evenodd'>
                                        <path d='M96.869 0L30 116h104l-9.88-17.134H59.64l47.109-81.736zM0 116h19.831L77 17.135 67.088 0z'></path>
                                        <path d='M87 68.732l9.926 17.143 29.893-51.59L174.15 116H194L126.817 0z'></path>
                                    </g>
                                </svg>
                            </span>
                        </a>
                        <p className='mr-4 mt-6 text-base text-gray-500'>
                            Crafting the next-level of user experience and engagement.
                        </p>
                    </div>
                    <div className='mt-6 block w-full pl-10 text-sm sm:flex lg:mt-0 lg:w-3/4'>
                        <ul className='flex w-full list-none flex-col p-0 text-left font-medium text-gray-700'>
                            <li className='mt-5 inline-block px-3 py-2 font-bold uppercase tracking-wide text-gray-800 md:mt-0'>
                                Product
                            </li>
                            <li>
                                <a
                                    href='#_'
                                    className='inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600'>
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#_'
                                    className='inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600'>
                                    Integrations
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#_'
                                    className='inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600'>
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#_'
                                    className='inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600'>
                                    FAQ
                                </a>
                            </li>
                        </ul>
                        <ul className='flex w-full list-none flex-col p-0 text-left font-medium text-gray-700'>
                            <li className='mt-5 inline-block px-3 py-2 font-bold uppercase tracking-wide text-gray-800 md:mt-0'>
                                Company
                            </li>
                            <li>
                                <a
                                    href='#_'
                                    className='inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600'>
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#_'
                                    className='inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600'>
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                        <ul className='flex w-full list-none flex-col p-0 text-left font-medium text-gray-700'>
                            <li className='mt-5 inline-block px-3 py-2 font-bold uppercase tracking-wide text-gray-800 md:mt-0'>
                                TailwindCSS
                            </li>
                            <li>
                                <a
                                    href='https://devdojo.com/tailwindcss/components'
                                    className='inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600'>
                                    Tailwind Components
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://devdojo.com/tailwindcss/templates'
                                    className='inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600'>
                                    Tailwind Templates
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://devdojo.com/tails'
                                    className='inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600'>
                                    Tails
                                </a>
                            </li>
                        </ul>
                        <div className='flex w-full flex-col text-gray-700'>
                            <div className='mt-5 inline-block px-3 py-2 font-bold uppercase text-gray-800 md:mt-0'>
                                Follow Us
                            </div>
                            <div className='mt-2 flex justify-start pl-4'>
                                <a
                                    className='mr-6 flex items-center text-gray-400 no-underline hover:text-gray-600'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://devdojo.com'>
                                    <svg
                                        viewBox='0 0 24 24'
                                        className='h-5 w-5 fill-current'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z' />
                                    </svg>
                                </a>
                                <a
                                    className='mr-6 flex items-center text-gray-400 no-underline hover:text-gray-600'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://devdojo.com'>
                                    <svg
                                        viewBox='0 0 24 24'
                                        className='h-5 w-5 fill-current'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z' />
                                    </svg>
                                </a>
                                <a
                                    className='flex items-center text-gray-400 no-underline hover:text-gray-600'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://devdojo.com'>
                                    <svg
                                        viewBox='0 0 24 24'
                                        className='h-5 w-5 fill-current'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 border-t border-gray-300 pt-4 pt-6 text-center text-gray-500'>
                    © 2024 JumpQ. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default JumpQLandingPage;

function Feature({ icon: Icon, title, description, modern = false }) {
    return (
        <div className='flex items-start gap-4'>
            <div className={`rounded-lg p-2 ${modern ? 'bg-[var(--accent-color)]/10' : 'bg-white/5'}`}>
                <Icon className={`h-6 w-6 ${modern ? 'text-[var(--accent-color)]' : 'text-gray-400'}`} />
            </div>
            <div>
                <h4
                    className={`mb-1 text-lg font-medium ${modern ? 'text-[var(--accent-color)]' : 'text-black'}`}>
                    {title}
                </h4>
                <p className='text-sm text-gray-400'>{description}</p>
            </div>
        </div>
    );
}

function VisionItem({ icon: Icon, text }) {
    return (
        <div className='flex items-start gap-4'>
            <div className='rounded-lg bg-[#42D9C8]/10 p-2'>
                <Icon className='h-6 w-6 text-[var(--accent-color)]' />
            </div>
            <p className='text-gray-700'>{text}</p>
        </div>
    );
}

function CustomerTestimonial() {
    return (
        <div className='w-full xl:w-1/2 xl:pr-8'>
            <blockquote className='ease col-span-1 flex w-full flex-col-reverse items-center justify-between rounded-lg bg-gray-100 p-6 text-center transition-all duration-200 hover:bg-white hover:shadow md:flex-row md:text-left'>
                <div className='flex flex-col pr-8'>
                    <div className='relative pl-12'>
                        <svg
                            className='absolute left-0 h-10 w-10 fill-current text-[var(--accent-color)]'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 100 125'>
                            <path d='M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z' />
                        </svg>
                        <p className='mt-2 text-base text-gray-600'>
                            I'm loving these templates! Very nice features and layouts.
                        </p>
                    </div>
                    <h3 className='mt-3 truncate pl-12 text-base font-medium leading-5 text-gray-800'>
                        Sandra Walton{' '}
                        <span className='mt-1 truncate text-sm leading-5 text-gray-500'>
                            - CEO SomeCompany
                        </span>
                    </h3>
                    <p className='mt-1 truncate text-sm leading-5 text-gray-500'></p>
                </div>
                <img
                    className='mb-5 h-24 w-24 flex-shrink-0 rounded-full bg-gray-300 object-cover md:mb-0'
                    src='https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2694&q=80'
                    alt=''
                />
            </blockquote>
            <blockquote className='ease col-span-1 mb-16 mt-16 flex w-full flex-col-reverse items-center justify-between rounded-lg bg-gray-100 p-6 text-center transition-all duration-200 hover:bg-white hover:shadow md:flex-row md:text-left xl:mb-0'>
                <div className='flex flex-col pr-10'>
                    <div className='relative pl-12'>
                        <svg
                            className='absolute left-0 h-10 w-10 fill-current text-[var(--accent-color)]'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 100 125'>
                            <path d='M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z' />
                        </svg>
                        <p className='mt-2 text-base text-gray-600'>
                            Really digging this service. Now I can quickly bootstrap any project.
                        </p>
                    </div>
                    <h3 className='mt-3 truncate pl-12 text-base font-medium leading-5 text-gray-800'>
                        Khushal
                        <span className='mt-1 truncate text-sm leading-5 text-gray-500'>
                            - CoFounder & CEO JumpQ
                        </span>
                    </h3>
                    <p className='mt-1 truncate text-sm leading-5 text-gray-500'></p>
                </div>
                <img
                    className='mb-5 h-24 w-24 flex-shrink-0 rounded-full bg-gray-300 object-cover md:mb-0'
                    src='https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
                    alt=''
                />
            </blockquote>
            <blockquote className='ease col-span-1 mb-16 mt-16 flex w-full flex-col-reverse items-center justify-between rounded-lg bg-gray-100 p-6 text-center transition-all duration-200 hover:bg-white hover:shadow md:flex-row md:text-left xl:mb-0'>
                <div className='flex flex-col pr-10'>
                    <div className='relative pl-12'>
                        <svg
                            className='absolute left-0 h-10 w-10 fill-current text-[var(--accent-color)]'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 100 125'>
                            <path d='M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z' />
                        </svg>
                        <p className='mt-2 text-base text-gray-600'>
                            Really digging this service. Now I can quickly bootstrap any project.
                        </p>
                    </div>
                    <h3 className='mt-3 truncate pl-12 text-base font-medium leading-5 text-gray-800'>
                        Aniket
                        <span className='mt-1 truncate text-sm leading-5 text-gray-500'>
                            - Product & Growth JumpQ
                        </span>
                    </h3>
                    <p className='mt-1 truncate text-sm leading-5 text-gray-500'></p>
                </div>
                <img
                    className='mb-5 h-24 w-24 flex-shrink-0 rounded-full bg-gray-300 object-cover md:mb-0'
                    src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80'
                    alt=''
                />
            </blockquote>
        </div>
    );
}

function JumpQTestimonials() {
    const testimonials = [
        {
            quote: 'They are constantly looking at the ways to evolve their platform to make it easier for agents to convert leads into sales',
            author: 'Real Estate Sales Manager',
            company: 'Leading Brokerage Firm',
        },
        {
            quote: 'They are reviving the leads in our database that would have never been touched otherwise',
            author: 'Sales Operations Director',
            company: 'Innovative Realty Company',
        },
    ];

    return (
        <div className='bg-gray-50 py-16'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='grid gap-8 md:grid-cols-2'>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className='relative rounded-lg bg-white p-8 shadow-lg'>
                            <Quote className='absolute left-4 top-4 h-12 w-12 text-blue-100' />
                            <div className='relative z-10'>
                                <p className='mb-6 text-lg italic text-gray-600'>
                                    "{testimonial.quote}"
                                </p>
                                <div className='border-t pt-4'>
                                    <div className='font-semibold text-gray-900'>
                                        {testimonial.author}
                                    </div>
                                    <div className='text-sm text-gray-500'>
                                        {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-16 text-center'>
                    <h3 className='mb-4 text-2xl font-bold text-gray-900'>
                        Powering the Most Innovative Teams and Brokerages
                    </h3>
                    <p className='mx-auto max-w-2xl text-gray-600'>
                        JumpQ is trusted by forward-thinking sales teams who are looking to
                        transform their sales engagement and drive meaningful results through
                        generative AI.
                    </p>
                </div>
            </div>
        </div>
    );
}
