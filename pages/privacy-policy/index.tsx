'use client'


const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 min-h-screen font-mono">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Privacy Policy
            </h2>
            <div className="mt-2 w-full text-sm text-gray-500 space-y-3">
              <p>
                Your privacy is important to us. It is our policy to respect
                your privacy regarding any information we may collect from you
                across our website, pydocs.huntermacias.io, and other sites we own and
                operate.
              </p>
			  
              <p>
                We only ask for personal information when we truly need it to
                provide a service to you. We collect it by fair and lawful
                means, with your knowledge and consent. We also let you know
                why we’re collecting it and how it will be used.
              </p>
              <p>
                We only retain collected information for as long as necessary
                to provide you with your requested service. What data we store,
                we’ll protect within commercially acceptable means to prevent
                loss and theft, as well as unauthorized access, disclosure,
                copying, use or modification.
              </p>
              <p>
                We don’t share any personally identifying information publicly
                or with third-parties, except when required to by law.
              </p>
              <p>
                You are free to refuse our request for your personal
                information, with the understanding that we may be unable to
                provide you with some of your desired services.
              </p>
              <p>
                Your continued use of our website will be regarded as acceptance
                of our practices around privacy and personal information. If you
                have any questions about how we handle user data and personal
                information, feel free to contact us.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-start">
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;