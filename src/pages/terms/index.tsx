import React from 'react';

import Head from 'next/head';

import config from '../../config/index.json';

const TermsAndConditions = () => {
  const { company } = config;
  const { name: companyName } = company;
  return (
    <div>
      <Head>
        <title>Terms and Conditions</title>
      </Head>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome to {companyName}! These Terms and Conditions govern your use
          of our app and its services. By using our app, you agree to comply
          with and be bound by these terms.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          User Responsibilities
        </h2>
        <p className="mb-4">
          When using our app, you agree to:
          <ul className="list-disc list-inside">
            <li>Use the app for lawful purposes only</li>
            <li>Provide accurate and up-to-date information</li>
            <li>Respect other users and their data</li>
            <li>Not engage in any harmful or malicious activities</li>
          </ul>
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          Intellectual Property
        </h2>
        <p className="mb-4">
          Our app and its content are protected by intellectual property laws.
          You agree not to:
          <ul className="list-disc list-inside">
            <li>Copy, modify, or distribute our app without permission</li>
            <li>Use our trademarks or logos without permission</li>
            <li>Create derivative works based on our app</li>
          </ul>
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Privacy</h2>
        <p className="mb-4">
          Your use of our app is also governed by our Privacy Policy. By using
          our app, you consent to the practices described in the Privacy Policy.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Disclaimer</h2>
        <p className="mb-4">
          Our app is provided on an &quot;as is&quot; basis without warranties
          of any kind. We are not responsible for any errors, inaccuracies, or
          damages resulting from your use of the app.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about our Terms and Conditions,
          please contact us at contact@albert.do.
        </p>

        <p className="mt-8">Last updated: 2023-08-10</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
