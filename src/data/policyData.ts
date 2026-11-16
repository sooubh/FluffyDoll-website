/**
 * FluffyDoll Official Privacy Policy Data Structure
 * Contains verified production details, structured policy sections,
 * and compliance disclosures as effective 16 November 2026.
 */

export interface PolicyTable {
  headers: string[];
  rows: string[][];
}

export interface PolicySubsection {
  id?: string;
  number?: string;
  title: string;
  content: string[];
  table?: PolicyTable;
}

export interface PolicySectionItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  summary?: string;
  content: string[];
  subsections?: PolicySubsection[];
  table?: PolicyTable;
}

export const POLICY_METADATA = {
  gameName: 'FluffyDoll',
  gameGenre: 'Casual Puzzle Game',
  gameEngine: 'Flutter & Flame Engine',
  platform: 'Android',
  effectiveDate: '16 November 2026',
  lastUpdated: '16 November 2026',
  policyVersion: '1.0.0',
  developerName: 'Sourabh Singh (Sooubh)',
  developerLocation: 'Nashik, Maharashtra, India',
  developerEmail: 'fluffydoll-support@sooubh.in',
  websiteUrl: 'https://fluffydoll.sooubh.in/',
  canonicalUrl: 'https://fluffydoll.sooubh.in/privacy-policy',
  targetAudience: 'General audience aged 13 and older (not directed at children under 13)',
  adProvider: 'Google AdMob',
  analyticsProvider: 'Firebase Analytics',
  crashlyticsProvider: 'Firebase Crashlytics',
  cloudSaveProvider: 'Google Play Games Services',
};

export const POLICY_SECTIONS: PolicySectionItem[] = [
  {
    id: 'section-1',
    number: '1',
    title: 'Summary',
    shortTitle: '1. Summary',
    summary: 'High-level overview of FluffyDoll data practices and player privacy controls.',
    content: [
      '• FluffyDoll does not ask you to create an account with us and does not collect your name, email, phone number, contacts, photos, precise location or payment information.',
      '• If you choose to sign in to **Google Play Games**, the app uses your Play Games profile to show leaderboards and to back up your game progress to your own Google account.',
      '• The game uses **Google AdMob** (ads), **Firebase Analytics** (usage statistics) and **Firebase Crashlytics** (crash reports). These Google services collect some device and usage data, described in section 2.',
      '• We do not sell your personal information.',
      '• You can control ads, sign-in and your data as explained in sections 8 and 9.'
    ]
  },
  {
    id: 'section-2',
    number: '2',
    title: 'Information we collect',
    shortTitle: '2. Information We Collect',
    summary: 'Detailed categories of data collected via Play Games, local storage, AdMob, and Firebase.',
    content: [],
    subsections: [
      {
        id: 'section-2-1',
        title: '2.1 Google Play Games Services data (only if you sign in)',
        content: [
          'FluffyDoll uses Google Play Games Services for sign-in, leaderboards and cloud save. If you sign in, the app receives from Google:',
          '• Your Play Games player ID (an identifier for your Play Games profile)',
          '• Your Play Games display name and profile image',
          '• Your scores submitted to the FluffyDoll leaderboard',
          '• Your saved game data (see 2.2)',
          'We do **not** receive your email address, phone number, contacts, files, location or other personal information from your Google account through Play Games Services.'
        ]
      },
      {
        id: 'section-2-2',
        title: '2.2 Cloud save (saved game) data',
        content: [
          'If you sign in, FluffyDoll saves your game progress (for example, high score, in-game currency, unlocked items and settings) using Google Play Games Services saved games. This data is stored by Google in a hidden app-data area of your Google account (the `drive.appdata` scope). It is used only to restore your progress on a new or reinstalled device. It is not visible to us outside the app and we do not copy it to our own servers.'
        ]
      },
      {
        id: 'section-2-3',
        title: '2.3 Data stored on your device',
        content: [
          'The game stores your progress, settings and preferences locally on your device so it works offline. This data stays on your device unless you use cloud save.'
        ]
      },
      {
        id: 'section-2-4',
        title: '2.4 Advertising data (Google AdMob)',
        content: [
          'FluffyDoll shows ads using Google AdMob. AdMob may collect and use your advertising ID, IP address (and approximate location derived from it), device model, operating system and version, app version, and information about how you interact with ads, in order to serve, measure and personalize ads and to prevent fraud and abuse. Where required by law (for example in the European Economic Area, the United Kingdom and Switzerland), we ask for your consent before showing personalized ads.',
          'How Google uses data from apps that use its services: https://policies.google.com/technologies/partner-sites'
        ]
      },
      {
        id: 'section-2-5',
        title: '2.5 Analytics data (Firebase Analytics)',
        content: [
          'We use Firebase Analytics to understand how the game is used so we can improve it. It may collect an app-instance identifier, device information (model, operating system, language, screen size), approximate region (from IP address), and events such as app opens, sessions, levels played and screens viewed.'
        ]
      },
      {
        id: 'section-2-6',
        title: '2.6 Crash and diagnostic data (Firebase Crashlytics)',
        content: [
          'We use Firebase Crashlytics to find and fix crashes. It may collect crash logs, the state of the device at the time of the crash (model, operating system version, memory and storage status), the app version and an installation identifier.',
          'More about Firebase and privacy: https://firebase.google.com/support/privacy'
        ]
      },
      {
        id: 'section-2-7',
        title: '2.7 Information we do not collect',
        content: [
          'We do not ask for or collect your name, email address, postal address, phone number, precise location, contacts, photos, microphone or camera data, or payment information. We do not run our own user accounts or servers for player data. We do not knowingly collect sensitive personal information.'
        ]
      },
      {
        id: 'section-2-8',
        title: '2.8 Summary table',
        content: [],
        table: {
          headers: ['Category', 'Examples', 'Source', 'Purpose'],
          rows: [
            ['Play Games profile', 'Player ID, display name, profile image, leaderboard score', 'Google Play Games Services', 'Sign-in, leaderboards'],
            ['Saved game data', 'Progress, currency, unlocks, settings', 'You, stored by Google', 'Restore progress'],
            ['Identifiers', 'Advertising ID, app-instance ID, installation ID', 'Your device, via Google SDKs', 'Ads, analytics, crash reporting'],
            ['Device and network data', 'Model, OS version, language, IP address', 'Your device', 'Ads, analytics, diagnostics, security'],
            ['Usage data', 'Sessions, levels played, ad interactions', 'The app', 'Analytics, ad measurement, improving the game'],
            ['Crash data', 'Crash logs, device state', 'The app', 'Fixing bugs']
          ]
        }
      }
    ]
  },
  {
    id: 'section-3',
    number: '3',
    title: 'Why we use information and our legal bases',
    shortTitle: '3. Legal Bases & Purposes',
    summary: 'Purposes of data processing and legal grounds under GDPR and applicable laws.',
    content: [
      'We use the information above to:',
      '• Sign you in to Google Play Games and provide leaderboards and cloud save (to provide the service you request)',
      '• Show and measure ads, which supports keeping the game free (with your consent where required, otherwise our legitimate interest in funding the game)',
      '• Understand how the game is used and improve it (your consent where required, otherwise our legitimate interest in improving the game)',
      '• Find and fix crashes and technical problems, and keep the game secure (our legitimate interest)',
      '• Comply with legal obligations and respond to lawful requests',
      'If you are in the EEA, UK or Switzerland, the legal bases we rely on are: performance of the service you ask for, your consent (which you can withdraw at any time), our legitimate interests, and compliance with legal obligations. We do not use your information for automated decisions that have legal or similarly significant effects on you.',
      'We do not sell your personal information. Data received from Google Play Games Services (see section 4) is never used for advertising.'
    ]
  },
  {
    id: 'section-4',
    number: '4',
    title: 'Google user data and Limited Use',
    shortTitle: '4. Google User Data & Limited Use',
    summary: 'Adherence to Google API Services User Data Policy and Limited Use standards.',
    content: [
      "FluffyDoll's use and transfer of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements. Data received through Google Play Games Services and the `games`, `games_lite` and `drive.appdata` scopes is used only to provide the sign-in, leaderboard and cloud save features described in this policy. It is not transferred to others except as needed to provide those features, to comply with applicable law, or as part of a merger or sale with notice to you. It is not used for advertising, is not sold, and is not used to build user profiles for any other purpose. No humans read this data except where needed for security, to comply with law, or with your consent."
    ]
  },
  {
    id: 'section-5',
    number: '5',
    title: 'How we share information',
    shortTitle: '5. How We Share Information',
    summary: 'Circumstances under which information is shared with Google, ad partners, or legally required parties.',
    content: [
      'We do not sell, rent or trade your personal information. We share information only:',
      '• **With Google as a service provider.** Sign-in, leaderboards and cloud save (Google Play Games Services), advertising (AdMob), analytics (Firebase Analytics) and crash reporting (Firebase Crashlytics) are provided by Google. Google\'s handling of data is covered by the [Google Privacy Policy](https://policies.google.com/privacy).',
      '• **With advertising partners** that participate in AdMob, who may receive device identifiers and ad interaction data as described in section 2.4.',
      '• **With other players, in a limited way.** Your Play Games display name and leaderboard score may be visible on the FluffyDoll leaderboard according to your Play Games profile and privacy settings.',
      '• **For legal reasons.** If required by law, a court order or a valid legal request, or to protect the rights, property or safety of users, us or others.',
      '• **In a business change.** If the app is sold or transferred, information may transfer to the new owner, who must honor this policy.'
    ]
  },
  {
    id: 'section-6',
    number: '6',
    title: 'International data transfers',
    shortTitle: '6. International Transfers',
    summary: 'Safeguards for processing data on servers globally and in India.',
    content: [
      'Google and its partners process data on servers in many countries, including countries other than your own (such as the United States and India). Where your information is transferred outside your country, Google relies on safeguards such as standard contractual clauses and its own security programs. We are based in India, and any information we hold may be handled there.'
    ]
  },
  {
    id: 'section-7',
    number: '7',
    title: 'Data retention',
    shortTitle: '7. Data Retention',
    summary: 'Retention periods for Play Games, device storage, analytics, crash logs, and emails.',
    content: [],
    table: {
      headers: ['Data', 'How long it is kept'],
      rows: [
        ['Play Games profile, leaderboard scores and saved game', 'Until you delete your Play Games data or profile, or Google removes it under its own policies'],
        ['Local game data on your device', 'Until you uninstall the app or clear its data'],
        ['Firebase Analytics data', 'Held by Google for a limited period under the retention settings we configure (not more than 14 months for event-level data)'],
        ['Firebase Crashlytics data', 'Typically up to 90 days, as set by Firebase'],
        ['Ad-related data', 'Held by Google and its partners under their own policies'],
        ['Emails you send us', 'Only as long as needed to answer you and meet legal obligations']
      ]
    }
  },
  {
    id: 'section-8',
    number: '8',
    title: 'Your choices and controls',
    shortTitle: '8. Choices & Controls',
    summary: 'Options to control sign-in, cloud save, ad personalization, and local storage.',
    content: [
      '• **Signing in is optional.** You can play without signing in to Google Play Games. Leaderboards and cloud save will then be unavailable.',
      '• **Sign out or delete Play Games data.** Open the Google Play Games app, go to Settings, and sign out or delete your Play Games profile or game data.',
      '• **Revoke access.** Remove FluffyDoll in your Google Account under Security, Third-party apps and services.',
      '• **Ads.** Reset your advertising ID or opt out of ad personalization in your Android settings (Settings, Google, Ads). Where available, change your ad consent choices from within the app. Opting out does not remove ads, but makes them less relevant.',
      '• **Uninstall.** Uninstalling the app stops all collection by the app.'
    ]
  },
  {
    id: 'section-9',
    number: '9',
    title: 'Your privacy rights',
    shortTitle: '9. Your Privacy Rights',
    summary: 'Statutory privacy rights across GDPR, CCPA/CPRA, and India DPDP Act 2023.',
    content: [
      'Depending on where you live, you may have some or all of the following rights. We will respond to verified requests within the time required by law (generally 30 to 45 days).',
      '• **All users.** You can ask what information we hold about you, ask us to correct or delete it, or ask us to stop using it, by emailing [fluffydoll-support@sooubh.in](mailto:fluffydoll-support@sooubh.in). Because we do not collect your name or email, we may be unable to identify data that belongs to you unless you give us an identifier (for example your advertising ID or Play Games player ID), and most data is controlled directly by Google, so the in-app and Google account controls in section 8 are often the fastest way.',
      '• **EEA, UK and Switzerland (GDPR).** You have the right to access, correct, delete, restrict or object to processing of your personal data, to data portability, and to withdraw consent at any time without affecting earlier processing. You also have the right to complain to your local data protection authority.',
      '• **California (CCPA/CPRA) and other US states.** You have the right to know the categories of personal information we collect, use and disclose (see section 2.8), to request access or deletion, to correct inaccurate information, to opt out of the sale or sharing of personal information, and not to be discriminated against for using these rights. We do not sell personal information. Personalized advertising through AdMob may be considered "sharing" for cross-context behavioral advertising under California law. You can opt out by turning off ad personalization in your Android settings or in the app\'s ad consent options. We do not knowingly sell or share the personal information of anyone under 16. You may use an authorized agent to make a request on your behalf.',
      '• **India (Digital Personal Data Protection Act, 2023).** You have the right to access information about your personal data, to request correction and erasure, to withdraw consent, and to nominate another person to exercise your rights if you die or become unable to. To exercise these rights or raise a grievance, write to [fluffydoll-support@sooubh.in](mailto:fluffydoll-support@sooubh.in) with the subject "Privacy request". We will acknowledge your request and aim to resolve it within the time required by law. Grievance contact: Sourabh Singh, fluffydoll-support@sooubh.in.'
    ]
  },
  {
    id: 'section-10',
    number: '10',
    title: 'Children and minors',
    shortTitle: '10. Children & Minors',
    summary: 'Age restrictions, protection of minors, and non-collection from children under 13.',
    content: [
      'FluffyDoll is intended for users aged 13 and older and is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided information through the game, contact us at [fluffydoll-support@sooubh.in](mailto:fluffydoll-support@sooubh.in) and we will take steps to delete it.',
      'If you are under 18 (or under the age of majority where you live), please use the game with the knowledge and permission of a parent or guardian. Parents and guardians can contact us at the email above to ask about, correct or delete a minor\'s information.'
    ]
  },
  {
    id: 'section-11',
    number: '11',
    title: 'Security',
    shortTitle: '11. Security',
    summary: 'Encryption in transit, Google infrastructure security, and incident notification.',
    content: [
      "We rely on Google's security systems to protect sign-in, saved data, ads and analytics, and data sent between the app and Google's services is encrypted in transit. We do not run our own servers for player data. No method of transmission or storage is completely secure, so we cannot guarantee absolute security. If we become aware of a data breach affecting you, we will notify you and the relevant authorities as required by law."
    ]
  },
  {
    id: 'section-12',
    number: '12',
    title: 'Third-party services and links',
    shortTitle: '12. Third-Party Services',
    summary: 'Direct links to official third-party privacy policies for Google services.',
    content: [
      'The app and our website may contain links to third-party sites or services, including Google. We are not responsible for the privacy practices of others. Please read their policies:',
      '• Google Privacy Policy: https://policies.google.com/privacy',
      '• Google Play Games Services: https://policies.google.com/privacy',
      '• Firebase: https://firebase.google.com/support/privacy',
      '• Google AdMob and partner data use: https://policies.google.com/technologies/partner-sites'
    ]
  },
  {
    id: 'section-13',
    number: '13',
    title: 'Do Not Track',
    shortTitle: '13. Do Not Track',
    summary: 'Statement regarding web browser Do Not Track signals in mobile games.',
    content: [
      'The app does not respond to browser "Do Not Track" signals because it is a mobile game and not a website. Use the controls in section 8 to manage tracking and ads on your device.'
    ]
  },
  {
    id: 'section-14',
    number: '14',
    title: 'Changes to this policy',
    shortTitle: '14. Policy Updates',
    summary: 'Procedures for updating the policy and notifying players of material revisions.',
    content: [
      'We may update this policy from time to time, for example when we add features or when the law changes. The updated version will be posted on this page with a new "Last updated" date. If a change is significant, we will give extra notice, for example within the app. Continuing to use the game after a change means you accept the updated policy.'
    ]
  },
  {
    id: 'section-15',
    number: '15',
    title: 'Contact us',
    shortTitle: '15. Contact Us',
    summary: 'Official developer and grievance email, location, and website details.',
    content: [
      'If you have questions about this Privacy Policy, want to exercise your rights, or want to raise a concern:',
      '• **Email:** [fluffydoll-support@sooubh.in](mailto:fluffydoll-support@sooubh.in)',
      '• **Developer:** Sourabh Singh (Sooubh), Nashik, Maharashtra, India',
      '• **Website:** https://fluffydoll.sooubh.in/'
    ]
  }
];
