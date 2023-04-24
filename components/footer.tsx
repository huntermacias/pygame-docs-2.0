'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`bg-gray-800 bottom-0 fixed w-full transition-opacity duration-500 ${showFooter ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <p className="text-gray-400">© 2023 Pygame Docs</p>
        <div>
          <Link href="/privacy-policy">
            <span className="text-gray-400 hover:text-gray-200">
              Privacy Policy
            </span>
          </Link>

          <span className="mx-4 text-gray-400">•</span>

          <Link href="/terms-of-use">
            <span className="text-gray-400 hover:text-gray-200">Terms of Use</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
