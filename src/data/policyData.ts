/**
 * FluffyDoll Official Privacy Policy Data Structure
 * Contains verified project facts, structured policy sections,
 * and clear unresolved placeholder declarations for developer compliance.
 */

export interface PolicySectionItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  content: string[]; // markdown-like or paragraph text
  subsections?: {
    title: string;
    content: string[];
    actionRequired?: string;
  }[];
  actionRequired?: string;
}

export interface ReviewChecklistItem {
  id: string;
  category: 'Legal' | 'Contact' | 'Third-Party' | 'Google Play' | 'Technical';
  field: string;
  currentStatus: 'unresolved' | 'verified_in_source' | 'conditional';
  description: string;
  placeholderText: string;
  instructions: string;
}

export const POLICY_METADATA = {
  gameName: 'FluffyDoll',
  gameGenre: 'Casual Puzzle Game',
  gameEngine: 'Flutter & Flame Engine',
  platform: 'Android',
  effectiveDate: 'October 23, 2026',
  lastUpdated: 'October 23, 2026',
  policyVersion: '1.0.0-draft',
  canonicalUrlPlaceholder: 'https://YOUR_PRODUCTION_DOMAIN.com/privacy-policy',
  developerNamePlaceholder: '[ACTION REQUIRED: Developer Legal Name or Studio Entity]',
  developerEmailPlaceholder: '[ACTION REQUIRED: privacy@yourdomain.com]',
  developerAddressPlaceholder: '[ACTION REQUIRED: Developer Physical Mailing Address, City, Country]',
  targetAudiencePlaceholder: '[ACTION REQUIRED: Declare Google Play Target Age Group e.g., Everyone / 13+ / Families Program]',
  adProviderPlaceholder: '[ACTION REQUIRED: Specify Ad Networks e.g., Google AdMob, Unity Ads, or Confirm Ad-Free]',
  analyticsProviderPlaceholder: '[ACTION REQUIRED: Specify Analytics e.g., Firebase Analytics, or Confirm No Remote Analytics]'
};

export const REVIEW_CHECKLIST: ReviewChecklistItem[] = [
  {
    id: 'dev-identity',
    category: 'Legal',
    field: 'Developer Legal Identity',
    currentStatus: 'unresolved',
    placeholderText: '[ACTION REQUIRED: Developer Legal Name or Studio Entity]',
    description: 'The legal name of the individual developer or registered entity publishing FluffyDoll on Google Play.',
    instructions: 'Replace with the exact entity name shown in your Google Play Console developer account profile.'
  },
  {
    id: 'privacy-email',
    category: 'Contact',
    field: 'Dedicated Privacy Contact Email',
    currentStatus: 'unresolved',
    placeholderText: '[ACTION REQUIRED: privacy@yourdomain.com]',
    description: 'An active, monitored email address where players can submit privacy inquiries and data deletion requests.',
    instructions: 'Must be reachable by users and Google Play review teams. Do not use personal or unmonitored addresses.'
  },
  {
    id: 'dev-address',
    category: 'Contact',
    field: 'Business / Mailing Address',
    currentStatus: 'unresolved',
    placeholderText: '[ACTION REQUIRED: Developer Physical Mailing Address]',
    description: 'Physical address required for commercial entity compliance under GDPR/CCPA and Google Play merchant guidelines.',
    instructions: 'Provide registered business address or commercial contact PO box.'
  },
  {
    id: 'ad-sdk',
    category: 'Third-Party',
    field: 'Advertising SDK Integration Status',
    currentStatus: 'unresolved',
    placeholderText: '[ACTION REQUIRED: Ad Network Declaration]',
    description: 'Whether FluffyDoll displays banner, interstitial, or rewarded video ads, and which advertising SDKs are compiled.',
    instructions: 'If no ads are served, explicitly state "FluffyDoll is completely ad-free". If AdMob, Unity Ads, or ironSource are used, specify their SDK versions and privacy policies.'
  },
  {
    id: 'analytics-sdk',
    category: 'Third-Party',
    field: 'Analytics & Telemetry Status',
    currentStatus: 'unresolved',
    placeholderText: '[ACTION REQUIRED: Analytics Declaration]',
    description: 'Whether remote analytics (e.g. Firebase Analytics, GameAnalytics, Crashlytics) collect event telemetry.',
    instructions: 'Confirm whether any remote telemetry SDK is included. If purely local offline, state that no remote analytics are deployed.'
  },
  {
    id: 'target-audience',
    category: 'Google Play',
    field: 'Target Audience & Families Policy',
    currentStatus: 'unresolved',
    placeholderText: '[ACTION REQUIRED: Age Group & Families Program Status]',
    description: 'Google Play Target Audience questionnaire classification (e.g., Children under 13, Mixed Audience, or 13+).',
    instructions: 'Casual doll puzzle art may attract children. If participating in Google Play Families Policy, strict ad SDK filtering (COPPA compliant) is required.'
  },
  {
    id: 'iap-billing',
    category: 'Google Play',
    field: 'In-App Purchases (IAP) Billing',
    currentStatus: 'unresolved',
    placeholderText: '[ACTION REQUIRED: In-App Purchases Status]',
    description: 'Whether FluffyDoll contains optional microtransactions (e.g. coin packs, hints, ad-removal).',
    instructions: 'Confirm if Google Play Billing Library is integrated or if the game is 100% free with no in-app purchases.'
  },
  {
    id: 'production-domain',
    category: 'Technical',
    field: 'Production Canonical Domain',
    currentStatus: 'unresolved',
    placeholderText: 'https://YOUR_PRODUCTION_DOMAIN.com/privacy-policy',
    description: 'The live public URL hosted on HTTPS that will be entered into Google Play Console App Content > Privacy Policy.',
    instructions: 'Deploy this site to your custom domain or Vercel URL and paste the exact HTTPS URL into the Google Play Console.'
  }
];

export const POLICY_SECTIONS: PolicySectionItem[] = [
  {
    id: 'section-1-introduction',
    number: '1',
    title: 'Introduction and Scope',
    shortTitle: '1. Introduction & Scope',
    summary: 'Overview of FluffyDoll, developer scope, and commitment to user transparency.',
    actionRequired: 'Replace [ACTION REQUIRED: Developer Legal Name or Studio Entity] with verified legal name.',
    content: [
      `This Privacy Policy ("Policy") describes how ${POLICY_METADATA.developerNamePlaceholder} ("we", "us", or "our") collects, uses, protects, and discloses information in connection with the mobile game **FluffyDoll** (the "Game") and our associated web services, customer support channels, and websites.`,
      `FluffyDoll is a casual puzzle mobile application engineered with Flutter and the Flame 2D game engine, distributed via the Google Play Store for Android devices. We believe that gaming should be delightful, accessible, and transparent. We are committed to safeguarding the privacy of our players and maintaining transparent data practices.`,
      `Please read this Policy carefully. By downloading, accessing, or playing FluffyDoll, you acknowledge the terms described herein. If you do not agree with the practices described in this Policy, please do not download, install, or use FluffyDoll.`
    ]
  },
  {
    id: 'section-2-information-we-collect',
    number: '2',
    title: 'Information We Collect',
    shortTitle: '2. Information We Collect',
    summary: 'Clear itemization of direct user input, technical device metrics, gameplay data, and third-party data.',
    content: [
      `To provide an accurate legal overview, we categorize the types of information that may be collected or processed in connection with FluffyDoll into distinct categories:`
    ],
    subsections: [
      {
        title: 'A. Information You Provide Directly',
        content: [
          `• **Customer Support & Communications:** If you voluntarily contact us via email for troubleshooting, feature requests, or bug reports, we receive your email address, your name or handle (if provided by your email client), and the contents of your message.`,
          `• **No Account Registration:** FluffyDoll does not currently require or offer user account registration, username/password logins, or social profile linkage. Players can experience the puzzle gameplay without supplying personal registration credentials.`
        ]
      },
      {
        title: 'B. Device and Technical Information',
        content: [
          `When FluffyDoll executes on an Android device, standard operating system parameters may be accessed locally by the Flutter and Flame engine runtime to render graphics at appropriate resolutions and frame rates:`,
          `• **Device Model & Operating System Version:** (e.g., Android OS 12, 13, 14, screen DPI, display resolution).`,
          `• **System Performance & Memory:** Graphic rendering limits, framerate target (60fps/120fps), and available system RAM required to allocate 2D sprite textures smoothly.`,
          `• **Language & Regional Settings:** Device locale (e.g., en_US) used solely to present localized puzzle instructions and text.`
        ]
      },
      {
        title: 'C. Gameplay Activity, Progress, and Preferences',
        content: [
          `• **Puzzle Progress:** Completed level numbers, doll unlocks, puzzle stage stars, high scores, and achievement states.`,
          `• **In-Game Settings:** Sound effects volume, background music toggle, haptic feedback vibration settings, and visual accessibility toggles.`,
          `• **Local Storage Architecture:** This gameplay information is processed and retained **locally on your device** (see Section 4).`
        ]
      },
      {
        title: 'D. Diagnostics, Crash Logs, and Performance Data',
        content: [
          `• **Crash Reports:** In the event of an unhandled exception or game crash, the Android operating system or integrated crash-monitoring tool may generate a stack trace, device state, and memory status to assist in diagnosing engine crashes.`,
          `• **Developer Verification:** ${POLICY_METADATA.analyticsProviderPlaceholder}`
        ],
        actionRequired: 'Verify whether Firebase Crashlytics or Google Play Vitals alone is used for crash diagnostics.'
      },
      {
        title: 'E. Advertising-Related Identifiers (Subject to Implementation)',
        content: [
          `• **Google Advertising ID (GAID / AD_ID):** If advertising SDKs are enabled in the production build, third-party ad networks may process your device's resettable Advertising ID to deliver, measure, and limit the frequency of ads.`,
          `• **Developer Verification:** ${POLICY_METADATA.adProviderPlaceholder}`
        ],
        actionRequired: 'Developer must verify if FluffyDoll displays ads or is completely ad-free.'
      },
      {
        title: 'F. Purchases and Financial Information',
        content: [
          `• **Google Play In-App Billing:** If in-app purchases are enabled, transactions are processed exclusively by Google Play (Google LLC). We never receive, collect, or store your credit card numbers, bank account information, or billing address. Google provides the developer only with non-sensitive purchase tokens and receipt verification data to unlock digital game content.`,
          `• **Developer Verification:** ${POLICY_METADATA.targetAudiencePlaceholder}`
        ]
      }
    ]
  },
  {
    id: 'section-3-how-we-use-information',
    number: '3',
    title: 'How We Use Information',
    shortTitle: '3. How We Use Information',
    summary: 'Legitimate business purposes for processing data including gameplay operation, performance optimization, and player support.',
    content: [
      `We process collected or locally processed information strictly for legitimate, defined purposes:`,
      `• **Game Operation & Continuity:** To enable smooth puzzle progression, render Flame engine animations, restore saved stages, and retain your doll wardrobe and puzzle unlocks.`,
      `• **Performance Troubleshooting & Bug Resolution:** To identify frame drops, asset loading bottlenecks, memory leaks, and operating system incompatibilities across different Android device configurations.`,
      `• **Player Support & Inquiry Response:** To investigate and resolve customer support tickets submitted directly by players.`,
      `• **Security & Integrity:** To prevent unauthorized tampering, cheating, or reverse-engineering of game binaries.`,
      `• **Legal Compliance:** To comply with applicable legal obligations, app store guidelines, and lawful law enforcement requests.`
    ]
  },
  {
    id: 'section-4-local-storage-and-game-progress',
    number: '4',
    title: 'Local Storage and Game Progress',
    shortTitle: '4. Local Storage & Progress',
    summary: 'Explains how SharedPreferences/local files store puzzle progress and the consequences of clearing cache or uninstalling.',
    content: [
      `FluffyDoll is designed with a **privacy-first, offline-capable architecture**. The casual puzzle mechanics run locally on your device without mandating persistent cloud synchronization.`,
      `• **Local Storage Technologies:** Game settings, unlocked dolls, puzzle level progress, and audio toggles are written directly to your device's private application sandbox using standard Android local storage mechanisms (such as Flutter SharedPreferences, SQLite, or local application document files).`,
      `• **Device-Specific Retention:** Because progress is stored on the local storage partition of your device, your puzzle progress is tied to that specific hardware.`,
      `• **Impact of Clearing App Storage or Uninstalling:** If you manually choose to "Clear Data" or "Clear Storage" in your Android system settings, or if you uninstall FluffyDoll, your locally stored puzzle progress, high scores, and customizations will be permanently deleted from your device. Unless an optional Google Play Games cloud backup feature is explicitly activated by the player, deleted local data cannot be recovered by the developer.`
    ]
  },
  {
    id: 'section-5-advertising-and-third-party-services',
    number: '5',
    title: 'Advertising and Third-Party Services',
    shortTitle: '5. Advertising & 3rd-Party',
    summary: 'Inventory of third-party SDKs, partners, and links to their official privacy policies.',
    actionRequired: 'Developer must audit pubspec.yaml and Android build.gradle to verify exact integrated third-party SDKs.',
    content: [
      `Modern mobile games frequently integrate third-party software development kits (SDKs) to facilitate distribution, performance monitoring, or monetization. Below is the verified status and requirements for FluffyDoll:`,
      `**1. Core Framework & Engine:**`,
      `• **Flutter & Flame Engine:** Developed by Google and the open-source community. These frameworks run natively on the device and do not transmit gameplay data to external servers on their own.`,
      `**2. Platform Services:**`,
      `• **Google Play Services (Google LLC):** Facilitates distribution, licensing checks, automatic updates, and system-level performance telemetry through the Android operating system. [Google Privacy Policy](https://policies.google.com/privacy).`,
      `**3. Monetization & Analytics Status (Pending Final Developer Publication Review):**`,
      `• ${POLICY_METADATA.adProviderPlaceholder}`,
      `• ${POLICY_METADATA.analyticsProviderPlaceholder}`,
      `*Notice:* If third-party advertising or analytics SDKs are compiled into the production binary before release, each provider processes data according to their respective privacy policies. This section will be updated with the direct links to all active third-party SDK privacy notices.`
    ]
  },
  {
    id: 'section-6-data-sharing-and-disclosure',
    number: '6',
    title: 'Data Sharing and Disclosure',
    shortTitle: '6. Data Sharing & Disclosure',
    summary: 'Circumstances where data may be shared with service providers, legal authorities, or business successors.',
    content: [
      `We do not sell, rent, or trade your personal information to data brokers or unrelated third parties. We only share information in the following limited, legally authorized circumstances:`,
      `• **Authorized Service Providers:** Third-party cloud infrastructure, analytics, or developer tools that assist in hosting this website or diagnosing technical stability, bound by strict confidentiality and data-protection agreements.`,
      `• **Compliance with Law & Protection of Rights:** We may disclose information if required to do so by law, subpoena, court order, or governmental regulation, or if we determine in good faith that disclosure is necessary to protect the safety, rights, or property of players, the developer, or the general public.`,
      `• **Business Transfers:** If FluffyDoll or the developer entity undergoes a merger, acquisition, reorganization, or sale of game assets, player information associated with game continuity may be transferred to the acquiring entity subject to this Policy.`
    ]
  },
  {
    id: 'section-7-data-retention-and-deletion',
    number: '7',
    title: 'Data Retention and Deletion',
    shortTitle: '7. Retention & Deletion',
    summary: 'Data retention schedules and step-by-step instructions for players requesting data deletion.',
    actionRequired: 'Provide dedicated email address to process player deletion requests.',
    content: [
      `We adhere to the principle of data minimization and do not retain personal information longer than necessary to fulfill the purposes outlined in this Policy.`,
      `• **Locally Stored Data:** Retained on your device until you clear application storage or uninstall the Game. You hold complete, autonomous control over this data.`,
      `• **Customer Support Communications:** Emails and troubleshooting correspondence are retained for up to twelve (12) months to maintain support continuity, after which they are securely archived or purged.`,
      `• **Diagnostic Logs:** Where aggregated crash logs are collected by platform vitals, they are retained in accordance with Google Play developer console retention windows (typically 90 to 180 days).`
    ],
    subsections: [
      {
        title: 'Step-by-Step Data Deletion Request Procedure',
        content: [
          `If you wish to request the deletion of any data that may have been transmitted to us (such as customer support messages or associated correspondence):`,
          `1. Send an email to ${POLICY_METADATA.developerEmailPlaceholder} with the subject line: **"FluffyDoll Data Deletion Request"**.`,
          `2. Include your device brand and model, any relevant support ticket reference numbers, and the specific information you wish to have removed.`,
          `3. We will acknowledge receipt of your request within five (5) business days and complete the deletion within thirty (30) calendar days, free of charge, in accordance with applicable privacy laws.`
        ]
      }
    ]
  },
  {
    id: 'section-8-childrens-privacy',
    number: '8',
    title: "Children's Privacy & Google Play Families Policy",
    shortTitle: "8. Children's Privacy",
    summary: "Audience classifications, compliance with COPPA, GDPR-K, and Google Play Families guidelines.",
    actionRequired: 'Complete the Google Play Target Audience and Content questionnaire to verify exact classification.',
    content: [
      `Protecting the privacy of children is of paramount importance to us. Because FluffyDoll features a colorful, cute plush-doll aesthetic, we take child safety standards with the utmost seriousness.`,
      `• **Audience Classification:** ${POLICY_METADATA.targetAudiencePlaceholder}`,
      `• **COPPA & International Standards:** We comply with the United States Children's Online Privacy Protection Act (COPPA), the General Data Protection Regulation child-protection provisions (GDPR-K), and Google Play's Families Policy requirements.`,
      `• **No Personal Data Collection from Children:** We do not knowingly collect, solicit, or maintain personally identifiable information from children under the age of 13 (or under 16 in the European Economic Area).`,
      `• **Ad Filtering for Families:** If FluffyDoll is designated as child-directed or mixed-audience in the Google Play Console, any advertising displayed must strictly originate from Google Play Certified Ad Networks, with behavioral tracking and interest-based profiling disabled.`,
      `• **Parental Inquiries:** If a parent or guardian discovers that their child has provided personal information to us without parental consent, please contact us at ${POLICY_METADATA.developerEmailPlaceholder}. We will promptly delete such information from our records.`
    ]
  },
  {
    id: 'section-9-data-security',
    number: '9',
    title: 'Data Security Measures',
    shortTitle: '9. Data Security',
    summary: 'Technical and organizational safeguards implemented to protect user information.',
    content: [
      `We implement reasonable and appropriate technical, administrative, and organizational safeguards designed to protect player information against unauthorized access, loss, misuse, or alteration:`,
      `• **Secure Transport:** Any web-based communications or customer support portals utilize industry-standard Transport Layer Security (TLS/HTTPS) encryption in transit.`,
      `• **Operating System Sandboxing:** FluffyDoll operates within the Android application sandbox, preventing other unapproved applications on your device from inspecting local puzzle state data.`,
      `• **No Absolute Guarantee:** While we take rigorous measures to protect data integrity, no electronic storage system or transmission over the internet can be guaranteed to be 100% secure. Players are advised to safeguard their personal devices with screen locks and updated operating system patches.`
    ]
  },
  {
    id: 'section-10-international-data-processing',
    number: '10',
    title: 'International Data Processing',
    shortTitle: '10. International Transfers',
    summary: 'Cross-border data processing provisions where remote services or global CDNs are utilized.',
    content: [
      `FluffyDoll is distributed worldwide via the Google Play Store. If you utilize online services, customer support, or if third-party SDKs process telemetry, information may be transferred to, stored, and processed in jurisdictions other than your country of residence, including the United States, where Google and cloud infrastructure providers operate data centers.`,
      `These jurisdictions may maintain data protection laws that differ from those in your country. Where cross-border data transfers occur, we and our service providers rely on lawful mechanisms such as the European Commission Standard Contractual Clauses (SCCs) to ensure an adequate level of data protection.`
    ]
  },
  {
    id: 'section-11-user-privacy-rights',
    number: '11',
    title: 'User Privacy Rights (GDPR, CCPA/CPRA, and Regional Laws)',
    shortTitle: '11. Your Privacy Rights',
    summary: 'Detailed explanation of player rights including access, rectification, erasure, and opt-out.',
    content: [
      `Depending on your jurisdiction and geographical residence, you may have specific legal rights regarding your personal information under regulations such as the General Data Protection Regulation (GDPR), the UK Data Protection Act, the California Consumer Privacy Act as amended by the CPRA (CCPA/CPRA), or the Brazilian LGPD.`,
      `These rights may include:`,
      `• **Right to Access & Portability:** The right to request confirmation of whether we process personal information about you and receive a copy of that data.`,
      `• **Right to Rectification:** The right to request correction of inaccurate or incomplete personal information.`,
      `• **Right to Erasure ("Right to be Forgotten"):** The right to request deletion of your personal data held by us.`,
      `• **Right to Restrict or Object to Processing:** The right to restrict or object to our processing of your personal information under certain legal grounds.`,
      `• **Right to Opt-Out of Personalized Advertising:** On Android devices, you can reset or disable your Advertising ID at any time via **Android Settings → Google → Ads → Delete Advertising ID / Opt out of Ads Personalization**.`,
      `• **Non-Discrimination:** We will never discriminate against you, deny gameplay access, or alter your puzzle experience for exercising your privacy rights.`,
      `To exercise any of these rights, please contact us at ${POLICY_METADATA.developerEmailPlaceholder}. We will respond to verified requests within the statutory timeframe mandated by your local law.`
    ]
  },
  {
    id: 'section-12-android-permissions',
    number: '12',
    title: 'Android Permissions Analysis',
    shortTitle: '12. Android Permissions',
    summary: 'Complete technical review of runtime and install-time permissions requested by the game.',
    actionRequired: 'Verify AndroidManifest.xml in the Flutter project to confirm exact permissions declared.',
    content: [
      `FluffyDoll is built using Flutter and Flame. By default, casual 2D puzzle games require minimal operating system privileges. Below is the permission inventory and operational rationale:`,
      `• **android.permission.INTERNET:** (If present) Allows the application to establish network connections. Used if remote asset downloading, crash logging, or online ads are active. Not required for offline puzzle play.`,
      `• **android.permission.ACCESS_NETWORK_STATE:** (If present) Allows the app to determine if an active Wi-Fi or mobile data connection is available before attempting network operations.`,
      `• **android.permission.VIBRATE:** (Optional) Allows FluffyDoll to trigger subtle haptic vibration effects when puzzle dolls snap into place or when completing a combo. Can be toggled off inside game settings.`,
      `• **com.google.android.gms.permission.AD_ID:** (Conditional) Required on Android 13+ devices if third-party advertising SDKs are integrated to access the Google Advertising ID. If FluffyDoll is released as an ad-free game or participating in Google Play Families for young children, this permission must not be utilized.`,
      `• **No Sensitive Permissions:** FluffyDoll does NOT request access to your Camera, Microphone, GPS Precise Location, Contacts, SMS, Phone State, or External Storage Files.`
    ]
  },
  {
    id: 'section-13-offline-gameplay',
    number: '13',
    title: 'Offline Gameplay & Reconnection Behavior',
    shortTitle: '13. Offline Gameplay',
    summary: 'Details regarding playing without internet connectivity and sync behavior upon reconnecting.',
    content: [
      `FluffyDoll is fully engineered to support **offline casual puzzle gameplay**.`,
      `• **Offline Play:** You do not need an active internet connection or cellular mobile data to launch FluffyDoll, solve puzzles, unlock doll cosmetics, or adjust your settings. All core game loops and assets execute locally.`,
      `• **Reconnection Behavior:** When your device transitions from offline to online, FluffyDoll does not secretly upload your local puzzle saves to unauthorized third parties. If platform crash telemetry or ad networks are enabled, pending crash logs or ad requests may refresh using standard operating system network stacks.`
    ]
  },
  {
    id: 'section-14-changes-to-policy',
    number: '14',
    title: 'Changes to This Privacy Policy',
    shortTitle: '14. Policy Updates',
    summary: 'Process for updating this policy, changing the effective date, and notifying players.',
    content: [
      `We may update this Privacy Policy from time to time to reflect changes in our gameplay features, third-party integrations, legal obligations, or Google Play policy updates.`,
      `• **Publication of Changes:** When updates are made, we will revise the **"Last Updated"** date at the top of this document and publish the revised version at our canonical privacy URL.`,
      `• **Material Changes:** If we implement material changes that significantly affect how personal information is handled, we will provide prominent notice through an in-game alert or release notes in the Google Play Store prior to the changes taking effect.`,
      `• **Review Recommendation:** We encourage players to review this Privacy Policy periodically to stay informed about our data practices.`
    ]
  },
  {
    id: 'section-15-contact-us',
    number: '15',
    title: 'Contact Information and Developer Identification',
    shortTitle: '15. Contact Us',
    summary: 'Verified contact points for privacy inquiries, legal requests, and publisher identification.',
    actionRequired: 'Replace developer identity and email placeholders with verified developer credentials.',
    content: [
      `If you have any questions, comments, concerns, or requests regarding this Privacy Policy or the data practices of FluffyDoll, please contact our privacy compliance team:`,
      `• **Developer / Publisher Entity:** ${POLICY_METADATA.developerNamePlaceholder}`,
      `• **Privacy & Support Email:** ${POLICY_METADATA.developerEmailPlaceholder}`,
      `• **Physical Business Address:** ${POLICY_METADATA.developerAddressPlaceholder}`,
      `• **Official Game Website:** [ACTION REQUIRED: Link to Official Web Landing Page or Play Store Listing]`,
      `We endeavor to respond to all legitimate inquiries and data requests within thirty (30) calendar days.`
    ]
  },
  {
    id: 'section-16-additional-disclosures',
    number: '16',
    title: 'Additional Disclosures & Google Play Data Safety Guidance',
    shortTitle: '16. Google Play Data Safety',
    summary: 'Summary table to assist the developer in filling out the Google Play Data Safety form in Google Play Console.',
    content: [
      `To assist both players and the developer during Google Play Console submission, the table below maps FluffyDoll's data practices to the **Google Play Data Safety Form**:`,
      `• **Data Collection:** FluffyDoll does not collect personally identifiable information directly unless the user contacts support or if third-party SDKs are enabled.`,
      `• **Data Sharing:** Data is not sold or shared with third parties for independent commercial marketing.`,
      `• **Security Practices:** Data in transit is encrypted using standard HTTPS/TLS where network calls exist.`,
      `• **Data Deletion Mechanism:** Users can request deletion of support correspondence by contacting the designated privacy email, and can delete all local data by uninstalling the application or clearing storage in Android system settings.`,
      `*Disclaimer:* This guidance does not constitute formal legal advice. The developer must verify their actual compiled APK/AAB dependencies before certifying their Data Safety declaration in Google Play Console.`
    ]
  }
];
