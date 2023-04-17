"use client";

import { FaFileAlt } from "react-icons/fa";

function TermsOfUse() {
  return (
    <div className="bg-gray-900 min-h-screen mb-10">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md font-mono text-gray-950 px-8 py-6">
          <div className="flex items-center mb-6">
            <FaFileAlt className="text-gray-400 mr-3" size={24} />
            <h1 className="text-2xl font-bold">Terms of Use</h1>
          </div>
          <h2 className="text-lg font-bold mb-4">1. Introduction</h2>
          <p className="text-black mb-8">
            These Terms of Use (Terms) govern your access to and use of our
            website and services (Service). By accessing or using the Service,
            you agree to be bound by these Terms, which constitute a legally
            binding agreement between you and us.
          </p>
          <h2 className="text-lg font-bold mb-4">
            2. License to use the documentation
          </h2>
          <p className="text-black mb-8">
            Subject to your compliance with these Terms, we grant you a limited,
            non-exclusive, non-transferable license to access and use the
            documentation provided with the Service solely for the purpose of
            using the Service in accordance with these Terms.
          </p>
          <h2 className="text-lg font-bold mb-4">3. Restrictions</h2>
          <p className="text-black mb-8">
            You may not: (a) copy, modify, distribute, sell, or lease any part
            of the Service or documentation; (b) reverse engineer or attempt to
            extract the source code of the Service; (c) use the Service for any
            unlawful purpose or in violation of any applicable law; (d)
            interfere with or disrupt the integrity or performance of the
            Service; (e) attempt to gain unauthorized access to the Service or
            its related systems or networks; or (f) sublicense, transfer, or
            assign any of the rights granted to you under these Terms.
          </p>
          <h2 className="text-lg font-bold mb-4">4. Termination</h2>
          <p className="text-black mb-8">
            We may terminate or suspend access to our Service immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach these Terms. All
            provisions of these Terms which by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity,
            and limitations of liability.
          </p>
          <h2 className="text-lg font-bold mb-4">5. Governing Law</h2>
          <p className="text-black mb-8">
            These Terms and any dispute arising out of or related to these Terms
            or the Service shall be governed by and construed in accordance with
            the laws of the jurisdiction in which we are located, without giving
            effect to any choice of law or conflict of law provisions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
