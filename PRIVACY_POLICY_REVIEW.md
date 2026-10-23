# FluffyDoll Privacy Policy — Publication Review & Compliance Checklist

**Document Version:** 1.0.0-draft  
**Generated Date:** October 23, 2026  
**Target Application:** FluffyDoll (Android Casual Puzzle Game)  
**Game Engine & Framework:** Flutter with Flame Engine  
**Distribution Channel:** Google Play Store  
**Status:** ⚠️ PRE-RELEASE DRAFT — REQUIRES DEVELOPER APPROVAL BEFORE PUBLICATION

---

## 1. Executive Summary

This review document audits the privacy and data compliance status for **FluffyDoll**. Under Google Play Developer Distribution Agreement and App Content (Data Safety) regulations, the Privacy Policy published by the developer must be factually accurate, must not make hypothetical or speculative claims, and must explicitly disclose all third-party SDKs and data practices.

Because several commercial and developer-specific credentials cannot be inferred without access to your Google Play Console and production Flutter repository, **8 action items are marked as unresolved placeholders** in the generated policy.

> **CRITICAL RULE:** Never submit the Privacy Policy URL to Google Play Console with unresolved `[ACTION REQUIRED: ...]` placeholders. Replace each token with your verified legal details.

---

## 2. Confirmed Technical Facts

The following facts are verified regarding the game design and technology stack:

| Fact / Component | Verified Implementation | Privacy Consequence |
|---|---|---|
| **Game Title** | FluffyDoll | Defined in app branding and metadata. |
| **Engine & Framework** | Flutter + Flame (2D Game Engine) | Natively compiled client-side 2D loop. Engine itself does not send telemetry to third parties. |
| **Target Platform** | Android (Google Play Store) | Governed by Google Play Developer Program Policies and Android permission model. |
| **Game Architecture** | Local Casual Puzzle Loop | Core gameplay is client-authoritative and executes locally on the user's device. |
| **Offline Playability** | Fully playable offline | Puzzles, level progression, and settings work without active internet access. |
| **Local Game Saves** | Android Application Sandbox | Puzzle progress, unlocked dolls, and audio settings are saved to local private storage (SharedPreferences / local document files). |
| **Storage Clear Impact** | Local reset upon clearing app data or uninstalling | Clearing app storage or uninstalling purges local progress unless external cloud backup is enabled. |

---

## 3. Unresolved Placeholders & Publication Blockers

Before publishing or linking this policy in Google Play Console under **App Content > Privacy Policy**, the developer must verify and replace the following 8 items:

### Blocker 1: Developer Legal Entity
- **Current Placeholder:** `[ACTION REQUIRED: Developer Legal Name or Studio Entity]`
- **Required In:** Sections 1, 15, and document footer.
- **Action Required:** Provide the exact registered name of the individual developer or studio entity that owns the Google Play Developer Account.

### Blocker 2: Dedicated Privacy Contact Email
- **Current Placeholder:** `[ACTION REQUIRED: privacy@yourdomain.com]`
- **Required In:** Sections 7, 8, 11, and 15.
- **Action Required:** Provide an active, monitored email address where players and Google Play review teams can submit privacy inquiries and data deletion requests.

### Blocker 3: Physical Business / Mailing Address
- **Current Placeholder:** `[ACTION REQUIRED: Developer Physical Mailing Address, City, Country]`
- **Required In:** Section 15.
- **Action Required:** Provide the business address required under GDPR/CCPA and commercial merchant disclosure laws.

### Blocker 4: Advertising SDK Status
- **Current Placeholder:** `[ACTION REQUIRED: Specify Ad Networks e.g., Google AdMob, Unity Ads, or Confirm Ad-Free]`
- **Required In:** Sections 2(E), 5, 12.
- **Action Required:** 
  - If **Ad-Free**: State explicitly that "FluffyDoll displays no advertisements and does not integrate advertising SDKs." Remove `com.google.android.gms.permission.AD_ID` from `AndroidManifest.xml`.
  - If **Ads are Served**: Specify whether Google AdMob, Unity Ads, AppLovin, or ironSource are used, and link their privacy policies.

### Blocker 5: Analytics & Crash Telemetry
- **Current Placeholder:** `[ACTION REQUIRED: Specify Analytics e.g., Firebase Analytics, or Confirm No Remote Analytics]`
- **Required In:** Sections 2(D), 5.
- **Action Required:** Confirm whether Firebase Crashlytics, Firebase Analytics, GameAnalytics, or Sentry are compiled. If none, state that no remote analytics are collected.

### Blocker 6: Target Audience & Google Play Families Policy
- **Current Placeholder:** `[ACTION REQUIRED: Declare Google Play Target Age Group e.g., Everyone / 13+ / Families Program]`
- **Required In:** Section 8.
- **Action Required:** Complete the **Target Audience and Content** questionnaire in Google Play Console. Because doll puzzle art appeals to young audiences, determine whether the app is enrolled in the **Families Policy**. If yes, strict ad network filtering is legally mandatory under COPPA.

### Blocker 7: In-App Purchases (IAP) Billing Status
- **Current Placeholder:** `[ACTION REQUIRED: In-App Purchases Status]`
- **Required In:** Section 2(F).
- **Action Required:** State whether FluffyDoll includes Google Play In-App Billing for hint packs or cosmetic doll outfits, or is 100% free with no microtransactions.

### Blocker 8: Production Domain & Canonical URL
- **Current Placeholder:** `https://YOUR_PRODUCTION_DOMAIN.com/privacy-policy`
- **Required In:** `index.html`, `public/robots.txt`, `public/sitemap.xml`.
- **Action Required:** Replace with the live HTTPS domain where this website is hosted (e.g., your Vercel or custom domain).

---

## 4. Android Permissions Verification Checklist

Inspect `android/app/src/main/AndroidManifest.xml` in your Flutter workspace and ensure only required permissions are declared:

| Permission | Purpose | Recommendation |
|---|---|---|
| `android.permission.INTERNET` | Remote network calls | Keep only if ads, remote analytics, or remote updates are enabled. |
| `android.permission.ACCESS_NETWORK_STATE` | Check connectivity before network requests | Keep only if internet features exist. |
| `android.permission.VIBRATE` | Tactile puzzle feedback | Keep if Flame engine haptics are used; allow users to toggle off in settings. |
| `com.google.android.gms.permission.AD_ID` | Access Google Advertising ID | **Must be removed** if app is ad-free or targeted primarily at children under 13. |

---

## 5. Google Play Data Safety Form Mapping

When completing the Google Play Console **Data Safety** questionnaire, use the following mapping based on the resolved policy:

1. **Does your app collect or share any user data?**
   - If ad-free and no analytics: Select **No**.
   - If AdMob/Firebase is integrated: Select **Yes**, and declare Device or other IDs (Advertising ID) and Crash Logs.
2. **Is all user data encrypted in transit?** Select **Yes** (all web communications use HTTPS/TLS).
3. **Do you provide a way for users to request data deletion?** Select **Yes** (direct email to the privacy contact and local storage clear).

---

## 6. Developer Sign-Off

Before submitting to the Google Play Store:

- [ ] All 8 placeholders in `src/data/policyData.ts` and `index.html` have been replaced.
- [ ] Dependencies in `pubspec.yaml` match the declared third-party SDK inventory.
- [ ] Permissions in `AndroidManifest.xml` have been audited.
- [ ] Google Play Console Target Audience questionnaire completed.
- [ ] Website deployed to an HTTPS production URL and verified.
- [ ] Canonical URL updated in `index.html`, `robots.txt`, and `sitemap.xml`.
