import type { Metadata } from "next";
import { LangSwitch } from "@/app/lang-switch";

export const metadata: Metadata = {
  title: "Privacy Policy | Rungle",
  description: "Rungle Privacy Policy",
  alternates: { languages: { ko: "/privacy", en: "/en/privacy" } },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold border-b border-gray-200 pb-2">{title}</h2>
      <div className="mt-4 space-y-3 leading-7 text-gray-800">{children}</div>
    </section>
  );
}

// 한국어판(app/(ko)/privacy/page.tsx)을 조항 번호까지 그대로 옮긴 영어판. 손질한 곳은 도입부 법 근거 문구,
// 제8조 아동 나이의 거주국 기준, 제12조 거주국 감독기관 안내 세 곳뿐이다. 한국어판을 고치면 여기도 같이 고친다.
export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-[15px]">
      <LangSwitch path="/privacy" current="en" />
      <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-600">
        This is an English translation of the Korean Privacy Policy. If the two versions differ, the
        Korean version prevails.
      </p>
      <p className="mt-4 leading-7 text-gray-800">
        The Rungle team (the &ldquo;Team&rdquo;) publishes this Privacy Policy to explain how we
        protect your personal information and handle related requests promptly and smoothly, in
        accordance with applicable privacy laws, including Korea&rsquo;s Personal Information
        Protection Act.
      </p>
      <p className="mt-3 leading-7 text-gray-800">
        Rungle is an iOS app that imports your running records, picks the best shots from your
        photos and videos, and helps you create and share record overlays and reels. This policy
        applies to the version currently available. You can sign up with a social login, or use the
        app without signing in (as a guest). Running records are stored on the Team&rsquo;s server
        (in Korea) for backup and restore, and <strong>your photos and videos never leave your
        device. GPS routes are not stored on the server.</strong>{" "}
        There is one exception: when you choose to use a reel template in which artificial
        intelligence (AI) reads a video frame or creates a freeze-frame image (an &ldquo;AI
        template&rdquo;), the single video frame you select is sent through the Team&rsquo;s server
        to overseas AI providers (Google and OpenAI), and the server deletes that frame as soon as it
        returns the result (Article 5). Gender and age group are optional and you do not have to
        answer (Article 1). App usage records for service improvement are sent to an external
        analytics tool, and install and launch records for ad performance measurement are sent to an
        external measurement tool (Article 5). The advertising identifier (IDFA) is used only if you
        allow app tracking (Article 10).
      </p>

      {/* 중요 사항 요약 표시 (개인정보 처리방침 주요 내용) */}
      <div className="mt-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
        <h2 className="font-bold">Key Points (Summary)</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li><strong>Account information:</strong> When you sign up with a social login, we collect the login provider, the user identifier issued by that provider, and your email (Article 1). Your nickname is generated and assigned by the service, not collected. Gender and age group are optional; you can skip them and still use every feature (Article 1)</li>
          <li><strong>What we process:</strong> Running records (HealthKit, screenshots of record screens): processed on your device, with measurements backed up to the server (GPS routes excluded); one starting coordinate of the route is sent to Apple to display the running location name (Articles 5 and 11) / Photos and videos: processed and stored only on your device. Only when you use an AI template, the single video frame you select is sent through the Team&rsquo;s server to overseas AI providers (Google and OpenAI) (Article 5) / Device information and app usage records: registered on the server and sent to analytics tools (Article 5) / Ad attribution information (the advertising identifier only if tracking is allowed): sent to an ad performance measurement tool (Article 5)</li>
          <li><strong>Purposes:</strong> Best-shot recommendations, creating record overlays and reels, pose reading and freeze-frame creation in AI templates, account login and record backup and restore, running statistics and personalized recommendations by gender and age group, service quality improvement, ad performance measurement (finding out which ad led to an install)</li>
          <li><strong>Retention:</strong> Account information (including gender and age group) and server backups are deleted after a 30-day grace period once you request account deletion (Article 3); the video frame sent to AI providers is deleted from the server as soon as the result is received (Article 3); on-device information is deleted when you delete the app (the only exception is the anonymous device identifier, which stays on the device, Article 3); app usage records are kept by our service providers and deleted once their purpose is fulfilled</li>
          <li><strong>Sharing with third parties:</strong> Not done in principle. While we run ads, install and share-completed events may be provided to Meta (Article 4; not currently provided). App usage analysis, ad performance measurement, converting coordinates to place names, and frame reading and freeze-frame creation for AI templates are outsourced to overseas providers (Article 5)</li>
          <li><strong>Privacy officer:</strong> Dongho Kim (admin@rungle.app)</li>
          <li><strong>Contact:</strong> The Team (admin@rungle.app)</li>
        </ul>
      </div>

      <Section title="Article 1 (Personal Information We Process and How We Collect It)">
        <p>
          You sign up for the service with a social login; the Team does not create or receive its
          own IDs or passwords. We process the following information to provide the service. Photos
          and videos are processed only on your device (the only exception is the single frame sent
          when you use an AI template), and running record measurements are stored on the server for
          backup.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="p-2 font-bold">Item</th>
                <th className="p-2 font-bold">Details</th>
                <th className="p-2 font-bold">How it is collected</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">Account information</td>
                <td className="p-2">Login provider (Google, Apple, Kakao, or Naver), the user identifier issued by the provider, and email. If you use Apple&rsquo;s &lsquo;Hide My Email&rsquo;, the relay address Apple creates is collected. We do not receive your name or profile photo</td>
                <td className="p-2">Received from the provider when you sign in with a social login</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">Profile information (optional)</td>
                <td className="p-2">Gender (female or male) and age group. <strong>Both are optional, and every feature works the same if you do not answer.</strong> You enter a birth year, but the server stores only a 10-year age group (for example, 20s) and does not keep the birth year itself. We do not collect your name, birthday (month and day), or phone number</td>
                <td className="p-2">Entered by you in a form shown once after signing in (you can skip it) and on the My Info screen. For Naver login, received from Naver only if you opt in on Naver&rsquo;s consent screen</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">Nickname</td>
                <td className="p-2">A display name the service creates by combining an adjective and an animal name. You can change it in the app</td>
                <td className="p-2">Generated by the service, not collected</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">Device information</td>
                <td className="p-2">Anonymous device identifier, device model, OS version, app version, last access time</td>
                <td className="p-2">Generated automatically when the app registers the device with the Team&rsquo;s server</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">Running records</td>
                <td className="p-2">Running workout data such as distance, duration, pace, calories, heart rate, cadence, and GPS route (including the running location name). Of these, the measurements (distance, duration, pace, calories, heart rate, cadence, and splits) are stored on the Team&rsquo;s server for backup and restore. <strong>GPS routes are not sent to the Team&rsquo;s server, and the server rejects them even if it receives one.</strong> However, to display the running location name, one starting coordinate of the route is sent to Apple&rsquo;s reverse geocoding server (a service that converts coordinates into place names) (Articles 5 and 11).</td>
                <td className="p-2">Read from Apple HealthKit if you allow it. The place name is generated by converting the route&rsquo;s first coordinate with Apple reverse geocoding</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">Photos and videos</td>
                <td className="p-2">Photos and videos taken during your run (candidates for best-shot recommendation and editing). Processed only on your device; <strong>only when you use an AI template</strong>, the single frame you select from a video (a still image reduced to 512 pixels wide, which may show a face) is sent through the Team&rsquo;s server to the AI providers in Article 5. The server also receives which template you chose, but only the frame goes to the AI providers. The whole video and other frames are never sent</td>
                <td className="p-2">Read from your photo library if you allow it. The frame is created only when you choose a video and a freeze point yourself in an AI template</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">Record screen captures</td>
                <td className="p-2">Screenshots of other running apps&rsquo; record screens, and the distance, duration, and pace extracted from them by text recognition (OCR)</td>
                <td className="p-2">Screenshots you select yourself, analyzed on your device</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">Usage records (collected automatically)</td>
                <td className="p-2">The anonymous device identifier issued by the app (a random value created when the app first launches, not a hardware number read from the device), feature usage events, error logs, user experience survey responses (5-point scale), values derived from running records (distance bucket, whether a route exists, and so on; raw figures such as distance and heart rate are excluded)</td>
                <td className="p-2">Generated automatically while you use the service and sent to analytics tools (Article 5)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">Ad attribution information (collected automatically)</td>
                <td className="p-2">
                  Advertising identifier (IDFA, <strong>only if you allow app tracking</strong>, Article 10), identifier for vendors (IDFV), OS version, device type, language, time zone, IP address, screen size, app install and launch events, share-completed events (name of the channel shared to), the anonymous device identifier above (an alias that links the measurement tool&rsquo;s records with the analytics tool&rsquo;s), and attribution details (names of the ad channel, campaign, ad group, and creative)
                </td>
                <td className="p-2">Generated automatically when you install and launch the app and sent to the ad performance measurement tool (Article 5). Attribution details are also recorded in the analytics tool when the measurement tool reports them</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>
            All permissions, including HealthKit, Photos, and Notifications, are optional. Declining
            them does not block you from using the service; you can keep using the features that
            remain available.
          </strong>{" "}
          For example, you can create content from record screen captures without connecting
          HealthKit. Each permission is requested with an explanation when the feature first needs
          it.
        </p>
        <p>
          <strong>Signing in is also optional.</strong> You can use the service without signing in
          (as a guest). In that case we do not collect account information, and your records are
          linked only to the anonymous device identifier. Records backed up to the server while you
          are a guest are merged into your account when you sign in later.
          <strong>Gender and age group are also optional.</strong> If you skip the form, we do not
          ask again, and you can change your answers at any time on the My Info screen.
        </p>
      </Section>

      <Section title="Article 2 (Purposes of Processing)">
        <ul className="list-disc space-y-1 pl-5">
          <li>Importing running records and automatically collecting photos and videos taken during your run</li>
          <li>Best-shot recommendation (evaluating photo and video quality, faces, and composition on your device). <strong>Faces are only detected and evaluated, and are never generated, altered, or retouched except in the freeze-frame creation of AI templates below.</strong></li>
          <li>Creating and editing record overlays, reels, and frame content</li>
          <li>Pose reading and freeze-frame creation in AI templates. From the single video frame you select, the AI reads the hand position and where the record text can be placed, and, depending on the template, creates a new freeze-frame image with an effect added based on that frame. <strong>When a freeze frame is created, the face and body of the person in the frame may be redrawn by the AI.</strong> The created freeze frame passes through Google once more so the AI can read where the record text can be placed and check the composition, and is then stored only on your device; we never process it to identify who someone is (no matching of the same person, no extraction of facial features)</li>
          <li>Creating an account and keeping you signed in; backing up and restoring records when you switch devices or reinstall the app</li>
          <li>Running statistics and personalized recommendations by gender and age group (only for users who answered the optional questions)</li>
          <li>Delivering announcements and notifications (in-app inbox)</li>
          <li>Analyzing usage records to improve service quality and recommendation features</li>
          <li>Ad performance measurement (finding out which ad led to an install). <strong>The advertising identifier is used only if you allow app tracking, and photos, location, and health records are never used for ad performance measurement.</strong></li>
        </ul>
      </Section>

      <Section title="Article 3 (Processing and Retention Period)">
        <p>
          <strong>Photos and videos are stored only on your device</strong>; the Team does not keep
          them on the server. Account information, device information, and running record backups
          are stored on the Team&rsquo;s server (in Korea). When you delete the app, the information
          the app stored on your device is deleted with it, with one exception: the anonymous device
          identifier described below. Information on the server remains after you delete the app,
          so request account deletion to remove it (Article 7).
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Account information, server backups, and notifications are permanently deleted
            after a 30-day grace period once you request account deletion.</strong> The grace period
            lets you recover an account deleted by mistake; signing in again during that time cancels
            the deletion.
          </li>
          <li>Gender and age group are kept with your account information and deleted together when the account is deleted. You can change them on the My Info screen; to erase your answers entirely, contact the Team (admin@rungle.app).</li>
          <li>Records backed up to the server as a guest are linked only to the anonymous device identifier, not to an account. To delete these records without an account, contact the Team (admin@rungle.app).</li>
          <li>Best-shot candidates use only references to your photo library; only the photos and clips you finally select are stored in the app.</li>
          <li>
            <strong>The video frame sent to the server when you use an AI template is deleted from
            the server as soon as the AI provider&rsquo;s result is returned to the app,</strong> and
            is not kept in any cache, log, or storage. Server records keep only the job number, the
            requesting account, the request time, file size, and processing status; the frame and
            the result are not kept. The freeze frame created by the AI is stored only on your device
            and is deleted together with the draft that uses it.
          </li>
          <li>Usage records (event logs), error logs, and ad attribution information are stored on the servers of the providers listed in Article 5 and deleted once the purposes of service quality improvement and ad performance measurement are fulfilled. After you delete the app, no new records are collected.</li>
          <li>
            <strong>The anonymous device identifier stays on your device even after you delete the
            app.</strong> It is kept in the iOS Keychain (the storage for an app&rsquo;s secret
            values), so reinstalling the app on the same device reuses the same value. It is stored
            so that it is not copied off the device, so it does not carry over in device backups or
            when you move to a new device. The current version has no in-app way to erase this
            value; contact the Team (admin@rungle.app) and we will delete the records tied to it at
            our service providers.
          </li>
        </ul>
      </Section>

      <Section title="Article 4 (Provision to Third Parties)">
        <p>
          The Team <strong>does not provide your personal information to third parties in
          principle.</strong>{" "}
          Exceptions are when you have given prior consent or when required by law, and the
          following provision may occur for ad performance measurement.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="p-2 font-bold">Recipient</th>
                <th className="p-2 font-bold">Information provided</th>
                <th className="p-2 font-bold">Recipient&rsquo;s purpose</th>
                <th className="p-2 font-bold">Retention</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">
                  Meta Platforms, Inc.
                  <br />
                  <a className="underline" href="https://www.facebook.com/privacy/policy/">facebook.com/privacy/policy</a>
                </td>
                <td className="p-2">App install events, share-completed events (name of the channel shared to), advertising identifier (IDFA, only if you allow app tracking)</td>
                <td className="p-2">Counting installs driven by Meta ads and optimizing ad delivery</td>
                <td className="p-2">Per Meta&rsquo;s privacy policy</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          This provision happens while the Team runs ads on Meta, with the ad performance
          measurement tool in Article 5 (Airbridge) forwarding events from its server to Meta. The
          app sends nothing to Meta directly. <strong>This forwarding is currently turned off,</strong>{" "}
          and we will update the effective date of this policy when it is turned on. You can block
          the provision of the advertising identifier at any time by turning off app tracking in
          iOS Settings &gt; Privacy &amp; Security &gt; Tracking (Article 7).
        </p>
      </Section>

      <Section title="Article 5 (Outsourcing and International Transfers)">
        <p>
          The Team outsources server operations to the provider below. The server is located in
          Korea, so this information is not transferred abroad.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="p-2 font-bold">Provider</th>
                <th className="p-2 font-bold">Outsourced work</th>
                <th className="p-2 font-bold">Location and retention</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">
                  Amazon Web Services, Inc.
                  <br />
                  <a className="underline" href="https://aws.amazon.com/privacy">aws.amazon.com/privacy</a>
                </td>
                <td className="p-2">Server operations: storing account information, device information, running record backups, and notifications</td>
                <td className="p-2">Republic of Korea (Seoul region) / until account deletion or the end of the contract</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Social login providers (Google, Apple, Kakao, and Naver) are not our service providers;
          they are the parties you sign in with directly. Each provider&rsquo;s own privacy policy
          applies to its processing of your personal information.
        </p>
        <p>
          Separately, the Team outsources the processing of app usage records for service quality
          improvement and error response, ad performance measurement, the conversion of coordinates
          into place names for displaying the running location, and frame reading and freeze-frame
          creation for AI templates to the providers below. Their servers are located outside Korea,
          so the following information is transferred abroad.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="p-2 font-bold">Recipient</th>
                <th className="p-2 font-bold">Country, timing, and method</th>
                <th className="p-2 font-bold">Information transferred</th>
                <th className="p-2 font-bold">Purpose and retention</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">
                  Amplitude, Inc.
                  <br />
                  <a className="underline" href="https://amplitude.com/privacy">amplitude.com/privacy</a>
                </td>
                <td className="p-2">United States / continuously while you use the app / network (HTTPS encrypted)</td>
                <td className="p-2">Anonymous device identifier, feature usage events, user experience survey responses, values derived from running records (distance bucket, whether a route exists, whether a place name exists), attribution details (names of the ad channel, campaign, ad group, and creative)</td>
                <td className="p-2">Usage analysis and service quality improvement, comparing attribution performance by ad / until the end of the contract or fulfillment of the purpose</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">
                  AB180 Inc.
                  <br />
                  (Airbridge)
                  <br />
                  <a className="underline" href="https://www.airbridge.io/en/privacy-policy">airbridge.io/en/privacy-policy</a>
                </td>
                <td className="p-2">Japan (AWS Tokyo region) / when you install and launch the app and when a share is completed / network (HTTPS encrypted)</td>
                <td className="p-2">Advertising identifier (IDFA, only if you allow app tracking), identifier for vendors (IDFV), OS version, device type, language, time zone, IP address, screen size, app install and launch events, share-completed events (name of the channel shared to), anonymous device identifier (alias)</td>
                <td className="p-2">Ad performance measurement to find out which ad led to an install / until the end of the contract or fulfillment of the purpose</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">
                  Google LLC
                  <br />
                  (Firebase Crashlytics)
                  <br />
                  <a className="underline" href="https://policies.google.com/privacy">policies.google.com/privacy</a>
                </td>
                <td className="p-2">United States / when the app crashes / network (HTTPS encrypted)</td>
                <td className="p-2">Anonymous device identifier, error logs (crash logs), device and OS information</td>
                <td className="p-2">Diagnosing errors and improving stability / until the end of the contract or fulfillment of the purpose</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">
                  Apple Inc.
                  <br />
                  <a className="underline" href="https://www.apple.com/legal/privacy/en-ww/">apple.com/legal/privacy/en-ww</a>
                </td>
                <td className="p-2">United States / when you open the overlay editor and a running location name is generated / network (HTTPS encrypted)</td>
                <td className="p-2">One starting coordinate of the running route (latitude and longitude)</td>
                <td className="p-2">Converting the coordinate into a place name (reverse geocoding) / until the conversion is complete. The returned place name is stored only on your device</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">
                  Google LLC
                  <br />
                  (Gemini API)
                  <br />
                  <a className="underline" href="https://policies.google.com/privacy">policies.google.com/privacy</a>
                </td>
                <td className="p-2">United States / when you choose a video and a freeze point in an AI template and run it / sent over the network (HTTPS encrypted) through the Team&rsquo;s server</td>
                <td className="p-2">The single video frame you select (a still image 512 pixels wide, which may show a face), and the freeze frame the AI created from it (for reading where the record text can be placed and checking the composition)</td>
                <td className="p-2">Reading the hand position in the frame; reading where the record text can be placed and checking the composition in the AI-created freeze frame; creating the freeze frame instead when OpenAI&rsquo;s freeze-frame creation is blocked by its safety policy / until the result is returned. Under its paid API terms, Google does not use the frame for training or product improvement and keeps it only for a limited period to monitor for prohibited use</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">
                  OpenAI, L.L.C.
                  <br />
                  <a className="underline" href="https://openai.com/policies/privacy-policy/">openai.com/policies/privacy-policy</a>
                </td>
                <td className="p-2">United States / when you run an AI template that creates a freeze frame / sent over the network (HTTPS encrypted) through the Team&rsquo;s server</td>
                <td className="p-2">The single video frame you select (a still image 512 pixels wide, which may show a face)</td>
                <td className="p-2">Creating a freeze-frame image with an effect added based on the frame / until the result is returned. OpenAI does not use data received through its API for training and deletes it after keeping it for up to 30 days for abuse monitoring</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The transferred information <strong>does not include account information that identifies
          you, original photos or videos, or raw running record figures.</strong> There are two
          exceptions: the single starting coordinate sent to Apple for place-name conversion, and the
          single video frame sent to Google and OpenAI when you use an AI template (along with the
          freeze frame the AI created from it). The frame is the
          original picture before any record overlay is applied, so it contains no running record
          figures, and no account information, device identifier, or running record is sent with it.
          If you do not want your information transferred abroad, delete the app; no new records are
          sent after deletion. To block only the advertising identifier, turn off app tracking in
          iOS Settings &gt; Privacy &amp; Security &gt; Tracking (Article 7).
        </p>
        <p>
          <strong>If you only want to avoid the transfer to AI providers, simply do not use AI
          templates.</strong> No frame is sent until you choose a video and a freeze point in such a
          template and run it yourself, and nothing other than that template is restricted if you do
          not use it. Google and OpenAI act as processors on the Team&rsquo;s behalf and, under their
          paid API terms, may not use the frame for their own purposes or for training. We do not
          send photos or videos to any AI service other than these two, and we will disclose any
          change in scope through this policy.
        </p>
      </Section>

      <Section title="Article 6 (Procedures and Methods of Destruction)">
        <ul className="list-disc space-y-1 pl-5">
          <li>Information stored in the app is deleted immediately by iOS when you delete the app. The anonymous device identifier stays on the device even after you delete the app (Article 3).</li>
          <li>Drafts being edited, selected photos, and similar items can be deleted individually in the app.</li>
          <li>Account information, running record backups, and notifications stored on the server are deleted by an automated process 30 days after you request account deletion, in a way that cannot be recovered.</li>
        </ul>
      </Section>

      <Section title="Article 7 (Rights of Users and Legal Representatives and How to Exercise Them)">
        <p>
          You and your legal representative may at any time request access to, correction of,
          deletion of, or suspension of processing of your personal information. Running records,
          photos, and videos are on your device, so you can exercise these rights directly as
          described below. For other requests, including app usage records, contact the Team
          (admin@rungle.app) and we will act without delay.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>Revoke access to running records:</strong> iOS Health app &gt; Profile &gt; Apps &gt; Rungle, turn off read access</li>
          <li><strong>Revoke photo access:</strong> iOS Settings &gt; Rungle &gt; Photos, change or remove the access level</li>
          <li><strong>Refuse sending a frame to AI providers:</strong> Simply do not choose an AI template. All other templates and features remain available (Article 5)</li>
          <li><strong>Change gender or age group:</strong> You can change them on the My Info screen in the app. To erase your answers, contact the Team (Article 3)</li>
          <li><strong>Revoke app tracking (advertising identifier):</strong> Turn off Rungle in iOS Settings &gt; Privacy &amp; Security &gt; Tracking, or turn off Allow Tracking in iOS Settings &gt; Rungle. Once off, the advertising identifier is no longer used, and the service is not restricted in any way</li>
          <li><strong>Delete your account:</strong> Request it at any time from the My Info screen in the app. 30 days after the request, the account information and running record backups on the server are permanently deleted; signing in again before then cancels the deletion</li>
          <li><strong>Delete everything:</strong> Deleting the app destroys the information the app stored. Information on the server remains after you delete the app, so also request account deletion as above. Only the anonymous device identifier stays on the device; contact the Team to have it erased (Article 3)</li>
        </ul>
      </Section>

      <Section title="Article 8 (Children Under 14)">
        <p>
          The service is not directed at children under 14, and the Team does not collect personal
          information from children under 14.{" "}
          <strong>
            A child under 14 who wants to use the service must obtain the consent of a legal
            representative (such as a parent),
          </strong>{" "}
          and if we learn that a child&rsquo;s personal information was processed without such
          consent, we destroy it without delay. This age applies even where local law sets a lower
          one (for example, 13 in the United States); if the law where you live sets a higher age,
          that higher age applies.
        </p>
      </Section>

      <Section title="Article 9 (Security Measures)">
        <p>The Team takes the following security measures in accordance with Article 29 of Korea&rsquo;s Personal Information Protection Act.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>On-device processing:</strong> Personal information processing, including photo analysis, face evaluation, and text recognition, is performed on your device, and the iOS app sandbox blocks access from other apps. The only exception is the single video frame for AI templates, which passes through the server to the AI providers; the server deletes the frame as soon as it returns the result and does not store it.</li>
          <li><strong>Minimal storage:</strong> Birth year is stored only as a 10-year age group, and the original value is not kept.</li>
          <li><strong>Administrative measures:</strong> Minimizing the staff who handle personal information and setting internal handling rules</li>
          <li><strong>Technical measures:</strong> TLS encryption on all external connections; the server is placed in a segment not directly reachable from outside, with access limited to the minimum staff; server credentials are kept in a separate secrets management service</li>
          <li><strong>Access limited to your own data:</strong> Running records stored on the server can be viewed and edited only by the signed-in owner; ownership is checked on every request.</li>
        </ul>
      </Section>

      <Section title="Article 10 (Automatic Data Collection Tools and How to Refuse Them)">
        <p>
          The Team does not use cookies. Usage records for service quality improvement are generated
          automatically, keyed to the anonymous device identifier issued by the app, and sent to the
          providers in Article 5.
        </p>
        <p>
          <strong>The advertising identifier (IDFA) is collected only if you allow it in App
          Tracking Transparency (ATT, the iOS prompt that asks whether to allow app tracking).</strong>{" "}
          On first launch the app explains what it is used for, then asks with the system prompt;
          every feature works the same whether or not you allow it. You can turn it off at any time
          in iOS Settings even after allowing it (Article 7). If you do not allow it, the ad
          performance measurement tool receives only install and launch events, without the
          advertising identifier.
        </p>
      </Section>

      <Section title="Article 11 (Handling of Health Data)">
        <p>
          Running records read from Apple HealthKit are used only to create content and to back up
          and restore your own records. Measurements (distance, duration, pace, heart rate, cadence,
          and so on) are stored on the Team&rsquo;s server (in Korea) for backup, and <strong>GPS
          routes are not sent to the Team&rsquo;s server, and the server is built not to accept
          them.</strong> In line with Apple&rsquo;s policies, <strong>health data is never used for
          advertising or marketing, and is never sold or provided to third parties.</strong>{" "}
          Neither health data nor values derived from it are sent to the ad performance measurement
          tool in Article 5 or to Meta in Article 4. The video frame sent to the AI providers in
          Article 5 is the original picture before any record overlay is applied, so it contains no
          health data.
        </p>
        <p>
          <strong>The running location name</strong> is generated when you open the overlay editor,
          by sending one starting coordinate of the running route to Apple&rsquo;s reverse geocoding
          server (a service that converts coordinates into place names) (Article 5). This is the
          only time a coordinate leaves your device, and <strong>the returned place name is stored
          only on your device and never uploaded to the Team&rsquo;s server.</strong> Analytics
          events record only whether a place name exists (yes or no), not the name itself.
        </p>
        <p>
          However, for service improvement analysis, <strong>values derived from running
          records</strong> are sent to the providers in Article 5. The derived values are the
          following three, and the raw figures cannot be recovered from them.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>Distance bucket:</strong> one of under 5 km / 5 km to under 10 km / 10 km or more</li>
          <li><strong>Whether a route exists:</strong> whether the run has a GPS route (yes or no)</li>
          <li><strong>Whether a place name exists:</strong> whether a place name was generated for the run (yes or no)</li>
        </ul>
        <p>
          These derived values are <strong>used only for analysis to understand which distance
          ranges produce content well,</strong> and are never used for advertising or marketing, or
          sold or shared elsewhere.
        </p>
      </Section>

      <Section title="Article 12 (Remedies for Privacy Violations)">
        <p>You may apply to the following organizations in Korea for dispute resolution or counseling regarding privacy violations. If you live outside Korea, you may also contact the privacy or data protection authority in your country.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Personal Information Infringement Report Center (Korea Internet &amp; Security Agency): 118 (no area code) / privacy.kisa.or.kr</li>
          <li>Personal Information Dispute Mediation Committee: 1833-6972 (no area code) / kopico.go.kr</li>
          <li>Supreme Prosecutors&rsquo; Office, Cyber Investigation Division: 1301 (no area code) / spo.go.kr</li>
          <li>Korean National Police Agency, Cyber Bureau: 182 (no area code) / ecrm.police.go.kr</li>
        </ul>
      </Section>

      <Section title="Article 13 (Changes to This Privacy Policy)">
        <p>
          When this Privacy Policy is added to, deleted from, or amended, we give notice on this page
          at least 7 days before the change takes effect. However, when a newly processed item arises
          only from a feature you choose to use and existing usage does not change, the change may
          take effect at the same time as the notice. In particular, this policy will be revised when
          any of the following is introduced: storing location data (GPS routes) on the server,
          server push notifications (notifications sent from the Team&rsquo;s server; the run
          detection notification currently offered is a local notification created only on your
          device), sending a whole video or multiple frames to external AI, or storing photos or
          videos on the server.
        </p>
        <p className="text-gray-600">
          This revision reflects the optional gender and age group questions and the use of overseas
          AI in AI templates. Compared with the previous policy (effective September 8, 2026), the
          changes are: the profile information item (gender and age group) and the video frame sent
          for AI templates (Article 1), the purposes of pose reading and freeze-frame creation and of
          statistics and personalized recommendations by gender and age group (Article 2), the
          retention of gender and age group and the immediate deletion of the frame (Article 3), the
          transfers to Google (Gemini API) and OpenAI and how to refuse them (Article 5), how to
          refuse sending a frame and how to change gender and age group (Article 7), the exception to
          on-device processing and minimal storage of the age group (Article 9), and the note that
          the frame sent to AI contains no health data (Article 11).
        </p>
        <p className="text-gray-600">
          This revision takes effect at the same time as its notice. The newly added processing
          (collecting gender and age group, and sending a frame for AI templates) happens only in
          features you choose yourself, begins only once you install the app version released after
          this policy is published (1.2.0), and does not occur in earlier versions.
        </p>
        <p><strong>Date of notice and effective date: September 9, 2026</strong></p>
      </Section>
    </main>
  );
}
