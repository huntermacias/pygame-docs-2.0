'use client'
import { ChevronLeft } from "lucide-react";
import Link from 'next/link';
import { FC } from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PyGame Documentation 2.0 | Page Not Complete',
    description: 'A Better UI for PyGame Documentation',
};

const PageNotFound: FC = () => {
    return (
        <section className="bg-gray-900 min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
            <div className="absolute -top-8 -left-8 w-64 h-64 rounded-full bg-gradient-to-r from-stone-950 to-red-800 z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full bg-gradient-to-r from-red-800 to-stone-950 z-0"></div>
            <div className="z-10">
                <h1 className="text-5xl font-bold text-white mb-4">Page in Progress</h1>
                <p className="text-lg text-gray-300 mb-8">The page you are looking for is not developed yet</p>
                <div className="bg-gray-800 p-6 rounded-lg text-gray-300 w-full max-w-xl">
                    <h2 className="text-2xl font-bold mb-2">Why am I seeing this page?</h2>
                    <p className="mb-4">You may be seeing this page for a few reasons:</p>
                    <ul className="list-disc ml-8">
                        <li className="mb-2">The page you are looking for has not yet been created</li>
                        <li className="mb-2">The page has been removed or renamed</li>
                        <li className="mb-2">There may be a mistake in the URL you entered</li>
                    </ul>
                    <p className="mt-4">If you think there is an error or if you have any questions, please contact us.</p>
                </div>
                <Link href="/" passHref>
                    <span className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center mt-8 w-1/4">
                        <ChevronLeft className="mr-2 h-6 w-6" />
                        Back Home
                    </span>
                </Link>
            </div>
            <style jsx>{`
                @media (max-width: 640px) {
                    .bg-gradient-to-r {
                        display: none;
                    }
                    h1 {
                        font-size: 3xl;
                        text-align: center;
                    }
                    p {
                        font-size: 1.5rem;
                        text-align: center;
                    }
                    .bg-gray-800 {
                        margin: 0 1rem;
                    }
                    .list-disc {
                        margin-left: 2rem;
                    }
                    .mt-8 {
                        margin-top: 1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default PageNotFound;
