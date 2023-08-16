import React from 'react';

import Head from 'next/head';

import config from '../../config/index.json';

export default function Policy() {
  const { company } = config;
  const { name: companyName } = company;

  return (
    <div>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to {companyName}! This Privacy Policy outlines how we collect,
          use, and protect your personal information when you use our app.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          Information We Collect
        </h2>
        <p className="mb-4">
          We collect the following types of information when you use our app:
          <ul className="list-disc list-inside">
            <li>Your purchase lists and historical purchases</li>
            <li>Price comparison data</li>
            <li>Products history</li>
            <li>
              Profile configuration data (measurement units, languages, etc.)
            </li>
          </ul>
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          We use the collected information to provide and improve our app&apos;s
          features and services. This includes:
          <ul className="list-disc list-inside">
            <li>Managing and displaying your purchase lists</li>
            <li>Providing price comparison functionality</li>
            <li>Personalizing your experience based on profile settings</li>
            <li>Improving app performance and user satisfaction</li>
          </ul>
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">
          Sharing Your Information
        </h2>
        <p className="mb-4">
          We may share your information with third parties only in the following
          circumstances:
          <ul className="list-disc list-inside">
            <li>With your explicit consent</li>
            <li>For legal purposes, to comply with applicable laws</li>
          </ul>
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Your Choices</h2>
        <p className="mb-4">
          You can control certain aspects of your data usage:
          <ul className="list-disc list-inside">
            <li>Edit your profile settings</li>
            <li>Delete your account and associated data</li>
          </ul>
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at [contact@email.com].
        </p>
      </div>
    </div>
  );
}
