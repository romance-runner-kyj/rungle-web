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
        app without signing in (as a guest). Running records of signed-in users are stored on the
        Team&rsquo;s server (in Korea) for backup and restore, and <strong>running records made as a guest
        are not stored on the server and stay only on your device.</strong> <strong>Photos and videos are processed on your device
        by default.</strong> When a signed-in user edits photos or reels, the Team keeps the
        original photos and videos used in that edit (a &ldquo;project&rdquo;) and its editing
        information on the Team&rsquo;s server (in Korea) so you can keep editing it and restore it
        on another device (&ldquo;project backup&rdquo;, Articles 1 and 3). Capture details
        embedded in photos and videos, such as capture location, capture time, and device
        information, are removed before upload, keeping only the orientation value. You can turn off project backup in
        the app&rsquo;s settings, and nothing is uploaded if you do not sign in (as a guest).{" "}
        <strong>GPS routes are not stored on the server.</strong>{" "}
        In addition, when you choose to use a reel template in which artificial
        intelligence (AI) reads a video frame or creates a freeze-frame image (an &ldquo;AI
        template&rdquo;) or the best-shot judgment of Quick Stamp, frames taken from the videos and
        photos you select (one frame or several, depending on the feature, 512 pixels wide) are sent
        through the Team&rsquo;s server to overseas AI providers (Google and OpenAI), and the server
        deletes them as soon as it returns the result (Articles 1 and 5). The freeze frame the AI creates is kept on the Team&rsquo;s
        server (in Korea) for 90 days after your last edit so you can keep editing it and restore it
        on another device (Article 3). When an AI template job finishes, the Team&rsquo;s server
        notifies you of the result with a push notification (delivered through Google Firebase,
        Article 5), and promotional notifications (offers and news) are sent only to users who have
        separately consented (Articles 1 and 7). Gender and age group are optional and you do not have to
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
          <li><strong>What we process:</strong> Running records (HealthKit, screenshots of record screens): processed on your device, with measurements backed up to the server when you are signed in (GPS routes excluded; guest records are not stored on the server); one starting coordinate of the route is sent to Apple to display the running location name (Articles 5 and 11) / Photos and videos: processed and stored on your device by default. Only when you use an AI template or the Quick Stamp judgment, frames taken from the videos and photos you select (one or several, 512 pixels wide) are sent through the Team&rsquo;s server to overseas AI providers (Google and OpenAI) (Articles 1 and 5), and the freeze frame the AI creates is also kept on the Team&rsquo;s server (Article 3). For signed-in users, the original photos and videos of edited projects (with capture details other than orientation removed) and their editing information are kept on the Team&rsquo;s server (in Korea) for backup (Articles 1 and 3; can be turned off in settings) / Device information (including the push notification token when notifications are on, and whether you consented to promotional notifications) and app usage records (including the account identifier issued by the server when you are signed in): registered on the server and sent to analytics tools (Article 5) / Ad attribution information (the advertising identifier only if tracking is allowed): sent to an ad performance measurement tool (Article 5) / Error records from the Team&rsquo;s server (excluding request contents and personal details): sent to an error tracking tool (Article 5)</li>
          <li><strong>Purposes:</strong> Best-shot recommendations, creating record overlays and reels, pose and scene reading and freeze-frame creation in AI templates, push notifications for AI job results and promotional notifications (offers and news) for users who consented, account login and record backup and restore, continued editing and cross-device restore of AI-created freeze frames, continued editing and cross-device restore of edited projects (project backup), running statistics and personalized recommendations by gender and age group, service quality improvement, ad performance measurement (finding out which ad led to an install)</li>
          <li><strong>Retention:</strong> Account information (including gender and age group) and server backups are deleted after a 30-day grace period once you request account deletion (Article 3); frames and photos sent to AI providers are deleted from the server as soon as the result is received, the push notification token is deleted as soon as you turn notifications off or revoke the permission (Article 3), and the freeze frame the AI creates is kept for 90 days after your last edit and then deleted (deleted together with your account information when you delete your account, Article 3); project backups are deleted after a 30-day grace period once you delete the project or request account deletion, and files no longer used by any project are deleted after 24 hours (Article 3); on-device information is deleted when you delete the app (the only exception is the anonymous device identifier, which stays on the device, Article 3); app usage records are kept by our service providers and deleted once their purpose is fulfilled</li>
          <li><strong>Sharing with third parties:</strong> Not done in principle. While we run ads, install and share-completed events may be provided to Meta (Article 4; not currently provided). App usage analysis, ad performance measurement, converting coordinates to place names, frame reading and freeze-frame creation for AI templates and Quick Stamp, push notification delivery, and server error record analysis are outsourced to overseas providers (Article 5)</li>
          <li><strong>Privacy officer:</strong> Dongho Kim (admin@rungle.app)</li>
          <li><strong>Contact:</strong> The Team (admin@rungle.app)</li>
        </ul>
      </div>

      <Section title="Article 1 (Personal Information We Process and How We Collect It)">
        <p>
          You sign up for the service with a social login; the Team does not create or receive its
          own IDs or passwords. We process the following information to provide the service. Photos
          and videos are processed on your device (exceptions are the frames and photos sent when you use
          an AI template or the Quick Stamp judgment, and the freeze frame the AI creates from the
          freeze-frame template&rsquo;s frame, which the Team keeps on its
          server for 90 days after your last edit so you can keep editing it; project backups of
          signed-in users are also an exception), and running record measurements of signed-in users are
          stored on the server for backup. Running records made as a guest are not stored on the server.
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
                <td className="p-2">Anonymous device identifier, device model, OS version, app version, last access time. If you allow notifications and keep service notifications on in the app&rsquo;s settings, the push notification token (a value Google Firebase issues to the app on this device, Article 5). If you consent to promotional notifications (offers and news), the time of consent, and the time of withdrawal if you withdraw</td>
                <td className="p-2">Generated automatically when the app registers the device with the Team&rsquo;s server. The app uploads the push notification token after you allow notifications and whenever the value changes, and deletes it when you turn notifications off or revoke the permission. Consent to promotional notifications is recorded only if you tap [Yes, please] in the separate prompt shown after allowing notifications, or turn it on in settings</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">Running records</td>
                <td className="p-2">Running workout data such as distance, duration, pace, calories, heart rate, cadence, and GPS route (including the running location name). Of these, the measurements (distance, duration, pace, calories, heart rate, cadence, and splits) are stored on the Team&rsquo;s server when you are signed in, for backup and restore. <strong>GPS routes are not sent to the Team&rsquo;s server, and the server rejects them even if it receives one.</strong> However, to display the running location name, one starting coordinate of the route is sent to Apple&rsquo;s reverse geocoding server (a service that converts coordinates into place names) (Articles 5 and 11).</td>
                <td className="p-2">Read from Apple HealthKit if you allow it. The place name is generated by converting the route&rsquo;s first coordinate with Apple reverse geocoding</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">Photos and videos</td>
                <td className="p-2">Photos and videos taken during your run (candidates for best-shot recommendation and editing). Processed on your device; they reach the server in only two cases: the frames for AI templates and the Quick Stamp judgment, and the project backup of signed-in users (next row). <strong>Only when you use an AI template or the Quick Stamp judgment</strong>, the frames that feature defines (still images reduced to 512 pixels wide, which may show a face) are sent through the Team&rsquo;s server to the AI providers in Article 5. How much is sent depends on the feature. The freeze-frame template sends the single frame you select from a video; Cut Edit sends frames taken from the videos you select at intervals of about 2 seconds (up to 100 per video and 800 per job); Web Shooter sends up to 60 frames taken from the video you select at 1-second intervals, plus up to 110 frames around the judged moment; Monthly Recap sends frames taken from that month&rsquo;s running videos (up to 90 per run); and the Quick Stamp best-shot judgment sends the photos taken during that run (512-pixel-wide copies). The original video and its audio are never sent. The server also receives which feature you used and the timestamps of the frames, but only the frames go to the AI providers (for Web Shooter, frames with a timestamp label drawn on them). The freeze frame the AI creates from the freeze-frame template&rsquo;s frame is kept on the Team&rsquo;s server for 90 days after your last edit (Article 3).</td>
                <td className="p-2">Read from your photo library if you allow it. Frames are created only when you choose videos or photos in an AI template or Quick Stamp and run it (available only to signed-in accounts)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">Project backup (when signed in)</td>
                <td className="p-2">The original photos and videos of projects you edit in the photo and reel editors (copies with capture details such as capture location, capture time, and device information removed, keeping only the orientation value), editing files the app creates (freeze frames and effect files), editing information (trims, order, speed, filters, photo positions, and overlay styles, fonts, colors, positions, and so on), the running record values shown in overlays (distance, duration, pace, and so on, Article 11), a small preview image for the list, the last edit time, and file sizes. The server does not separately receive capture time, location, or photo library file identifiers</td>
                <td className="p-2">When a signed-in user edits, the app uploads automatically when you leave the editor, when the app goes to the background, when you open the app again, and when you sign in. Nothing is uploaded if you turn off backup in settings. Guests keep edits only on the device, up to the 5 most recent (older ones are removed from the device), and those edits are uploaded to the account when you sign in</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">Record screen captures</td>
                <td className="p-2">Screenshots of other running apps&rsquo; record screens, and the distance, duration, and pace extracted from them by text recognition (OCR)</td>
                <td className="p-2">Screenshots you select yourself, analyzed on your device</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">Usage records (collected automatically)</td>
                <td className="p-2">The anonymous device identifier issued by the app (a random value created when the app first launches, not a hardware number read from the device), the account identifier issued by the server when you are signed in (a random value, not your email or name, used to keep you as one user when you change devices), feature usage events, error logs, user experience survey responses (5-point scale), values derived from running records (distance bucket, whether a route exists, and so on; raw figures such as distance and heart rate are excluded)</td>
                <td className="p-2">Generated automatically while you use the service and sent to analytics tools (Article 5)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">Ad attribution information (collected automatically)</td>
                <td className="p-2">
                  Advertising identifier (IDFA, <strong>only if you allow app tracking</strong>, Article 10), identifier for vendors (IDFV), OS version, device type, language, time zone, IP address, screen size, app install and launch events, share-completed events (name of the channel shared to), the anonymous device identifier above (an alias that links the measurement tool&rsquo;s records with the analytics tool&rsquo;s), and attribution details (names of the ad channel, campaign, ad group, and creative)
                </td>
                <td className="p-2">Generated automatically when you install and launch the app and sent to the ad performance measurement tool (Article 5). Attribution details are also recorded in the analytics tool when the measurement tool reports them</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">Server error records (collected automatically)</td>
                <td className="p-2">When an error occurs on the Team&rsquo;s server: the error type and code location, the API path and method where it occurred, the error message written by the server (job, device, and account identifiers and processing status only), the request number, app version, iOS family version, device model name (for example, iPhone16,2), the name of the app screen where the error occurred, the count, reference time, and kind values of list queries, and the server environment and release version. The request body, other headers and query values such as login credentials, IP address, email, photos, running record figures, and location are not included, and error messages produced by third-party software are removed before sending</td>
                <td className="p-2">Generated automatically when an error occurs on the Team&rsquo;s server and sent to the error tracking tool (Article 5)</td>
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
          linked only to the anonymous device identifier. Running records made as a guest are not
          stored on the server and stay on your device; they are backed up to your account when you sign in later. Once you sign in, your
          subsequent usage records also carry the account identifier, and usage records collected on
          the same device before you signed in are linked to that account as well. After you sign
          out, later records no longer carry it.
          <strong>Gender and age group are also optional.</strong> If you skip the form, we do not
          ask again, and you can change your answers at any time on the My Info screen.
        </p>
      </Section>

      <Section title="Article 2 (Purposes of Processing)">
        <ul className="list-disc space-y-1 pl-5">
          <li>Importing running records and automatically collecting photos and videos taken during your run</li>
          <li>Best-shot recommendation (evaluating photo and video quality, faces, and composition on your device; for Quick Stamp, when you are signed in, the person/scenery judgment is made by the AI provider in Article 5 from the photos). <strong>Faces are only detected and evaluated, and are never generated, altered, or retouched except in the freeze-frame creation of AI templates below.</strong></li>
          <li>Creating and editing record overlays, reels, and frame content</li>
          <li>Pose and scene reading and freeze-frame creation in AI templates. In the freeze-frame template, the AI reads the hand position and where the record text can be placed from the single video frame you select, and creates a new freeze-frame image with an effect added based on that frame. Cut Edit and Monthly Recap pick usable cuts from several frames, and Web Shooter judges from several frames the moment the hand motion changes. <strong>When a freeze frame is created, the face and body of the person in the frame may be redrawn by the AI.</strong> The created freeze frame passes through Google once more so the AI can read where the record text can be placed and check the composition, and is then stored on your device and on the Team&rsquo;s server (Article 3); we never process it to identify who someone is (no matching of the same person, no extraction of facial features)</li>
          <li>Creating an account and keeping you signed in; backing up and restoring records when you switch devices or reinstall the app</li>
          <li>Keeping the freeze frame the AI creates on the server so you can keep editing it and restore it on another device</li>
          <li>Keeping projects edited by signed-in users on the server so you can keep editing them and restore them when you switch devices or reinstall the app (project backup)</li>
          <li>Running statistics and personalized recommendations by gender and age group (only for users who answered the optional questions)</li>
          <li>Delivering announcements and notifications (in-app inbox and push notifications; the result notification for a finished AI template job is sent only to the device that started the job)</li>
          <li>Sending promotional notifications (offers and news) only to users who separately consented (we record the time of consent and withdrawal so that none are sent without consent)</li>
          <li>Analyzing usage records to improve service quality and recommendation features</li>
          <li>Ad performance measurement (finding out which ad led to an install). <strong>The advertising identifier is used only if you allow app tracking, and photos, location, and health records are never used for ad performance measurement.</strong></li>
        </ul>
      </Section>

      <Section title="Article 3 (Processing and Retention Period)">
        <p>
          <strong>Photos and videos are stored on your device.</strong> The exceptions are the
          freeze frame an AI template creates and the project backups of signed-in users, which are
          kept on the server as described below. Account information, device information, and running record backups
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
          <li>The push notification token is deleted from the server as soon as you turn service notifications off in the app&rsquo;s settings or revoke the notification permission in iOS, and a token that can no longer receive notifications (for example, after the app is deleted) is deleted as soon as that is confirmed. It is deleted together with the device information when you delete your account. The times of consent to and withdrawal from promotional notifications (offers and news) are kept with the device information as evidence of consent and deleted when you delete your account.</li>
          <li>Gender and age group are kept with your account information and deleted together when the account is deleted. You can change them on the My Info screen; to erase your answers entirely, contact the Team (admin@rungle.app).</li>
          <li>We no longer store running records made as a guest on the server. Records that earlier versions of the app uploaded as a guest are linked only to the anonymous device identifier, not to an account, and the Team plans to delete them. To delete them sooner, contact the Team (admin@rungle.app).</li>
          <li>Best-shot candidates use only references to your photo library; only the photos and clips you finally select are stored in the app.</li>
          <li>
            <strong>The frames and photos sent to the server when you use an AI template or the Quick Stamp judgment are deleted from
            the server as soon as the AI provider&rsquo;s result is returned to the app,</strong> and
            is not kept in any cache, log, or storage. Server records keep only the job number, the
            requesting account, the request time, file size, and processing status; the contents of
            the frame and the result are not kept. <strong>The freeze frame created by the AI is kept
            on the Team&rsquo;s server (in Korea, encrypted storage) for 90 days after your last
            edit (or after it was created, if you never edit it)</strong> so you can keep editing it
            and restore it on another device, and is then deleted automatically. If you request
            account deletion, it is deleted together with your account information after the 30-day
            grace period. AI templates can be used only with a signed-in account, so no freeze frame
            is created on the server while you are a guest. To delete a freeze frame from the server
            before the 90 days are up, contact the Team (admin@rungle.app). The freeze frame is also
            stored on your device and is deleted there together with the draft that uses it.
          </li>
          <li>
            <strong>Project backups are kept on the Team&rsquo;s server (in Korea, encrypted
            storage).</strong> When you delete a project in the app, it disappears from the list
            right away, is kept on the server for 30 days so it can be restored, and is then deleted
            automatically. Photo and video files no longer used by any project (including files whose
            upload stopped partway) are deleted automatically after 24 hours. If you request account
            deletion, project backups are deleted together with your account information after the
            30-day grace period. If you turn off backup in settings, nothing new is uploaded after
            that, and projects already uploaded are kept until you delete them or delete your
            account. Each account has a storage limit, and saves that would exceed it are not
            accepted. Nothing is uploaded while you are a guest.
          </li>
          <li>Usage records (event logs), error logs, and ad attribution information are stored on the servers of the providers listed in Article 5 and deleted once the purposes of service quality improvement and ad performance measurement are fulfilled. After you delete the app, no new records are collected. Error records from the Team&rsquo;s server are kept by the error tracking tool (Sentry) for 30 days (90 days on a paid plan) and then deleted automatically.</li>
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
                <td className="p-2">Server operations: storing account information, device information, running record backups, notifications, the freeze frames the AI creates, and the project backups of signed-in users (original photos and videos and editing information)</td>
                <td className="p-2">Republic of Korea (Seoul region) / until account deletion or the end of the contract (AI-created freeze frames: 90 days after your last edit; project backups: 30 days after the project is deleted, Article 3)</td>
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
          into place names for displaying the running location, frame reading and freeze-frame
          creation for AI templates and Quick Stamp, push notification delivery, and server error record analysis to the providers below. Their servers are located outside Korea,
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
                <td className="p-2">Anonymous device identifier, account identifier issued by the server (only when signed in), feature usage events, user experience survey responses, values derived from running records (distance bucket, whether a route exists, whether a place name exists), attribution details (names of the ad channel, campaign, ad group, and creative)</td>
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
                  Functional Software, Inc.
                  <br />
                  (Sentry)
                  <br />
                  <a className="underline" href="https://sentry.io/privacy/">sentry.io/privacy</a>
                </td>
                <td className="p-2">United States / when an error occurs on the Team&rsquo;s server / from the Team&rsquo;s server over the network (HTTPS encrypted)</td>
                <td className="p-2">Server error records from Article 1 (error type and code location, API path and method, job, device, and account identifiers and processing status, request number, app version, iOS family version, device model name, app screen name, count, reference time, and kind values of list queries, server environment and release version). The request body, login credentials, IP address, email, photos, running record figures, and location are not sent</td>
                <td className="p-2">Diagnosing server errors and improving stability / deleted automatically after 30 days (90 days on a paid plan)</td>
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
                  (Firebase Cloud Messaging)
                  <br />
                  <a className="underline" href="https://policies.google.com/privacy">policies.google.com/privacy</a>
                </td>
                <td className="p-2">United States / when the app registers with Firebase after you allow notifications, and when the Team&rsquo;s server sends a push notification / network (HTTPS encrypted) from the app and from the Team&rsquo;s server</td>
                <td className="p-2">Push notification token (issued by Firebase to the app on this device), the kind of notification text (title and body text keys), and the AI job&rsquo;s number, kind, and status. The notification text itself is chosen by the app on your device, and no photos, record figures, or location are included. Promotional notifications (offers and news) are sent to a topic subscribed only by devices that consented</td>
                <td className="p-2">Push notification delivery / until delivery is complete. The token is deleted from the Team&rsquo;s server when you turn notifications off or revoke the permission</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">
                  Google LLC
                  <br />
                  (Gemini API and Vertex AI)
                  <br />
                  <a className="underline" href="https://policies.google.com/privacy">policies.google.com/privacy</a>
                </td>
                <td className="p-2">United States (the request goes to Google Cloud&rsquo;s global endpoint, so it may be processed in a data center in another country chosen by Google) / when you choose a video in the freeze-frame template or Web Shooter and run it / sent over the network (HTTPS encrypted) through the Team&rsquo;s server</td>
                <td className="p-2">Freeze-frame template: the single video frame you select (a still image 512 pixels wide, which may show a face) and the freeze frame the AI created from it (for reading where the record text can be placed and checking the composition). Web Shooter: up to 110 frames around the judged moment (with a timestamp label drawn on them)</td>
                <td className="p-2">Reading the hand position in the frame; reading where the record text can be placed and checking the composition in the AI-created freeze frame; creating the freeze frame instead when OpenAI&rsquo;s freeze-frame creation is blocked by its safety policy; judging the hand pose and coordinates for Web Shooter / until the result is returned. Under its paid API terms, Google does not use the frame for training or product improvement and keeps it only for a limited period to monitor for prohibited use</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">
                  OpenAI, L.L.C.
                  <br />
                  <a className="underline" href="https://openai.com/policies/privacy-policy/">openai.com/policies/privacy-policy</a>
                </td>
                <td className="p-2">United States / when you run an AI template (freeze frame, Cut Edit, Web Shooter, or Monthly Recap) or the Quick Stamp judgment / sent over the network (HTTPS encrypted) through the Team&rsquo;s server</td>
                <td className="p-2">The frames and photos described in the photos and videos row of Article 1 (one frame for the freeze-frame template; several for Cut Edit, Web Shooter, Monthly Recap, and Quick Stamp; still images 512 pixels wide, which may show a face)</td>
                <td className="p-2">Creating the freeze-frame image for the freeze-frame template; picking cuts for Cut Edit and Monthly Recap; judging the moment of the hand motion for Web Shooter; the person/scenery judgment for Quick Stamp / until the result is returned. OpenAI does not use data received through its API for training and deletes it after keeping it for up to 30 days for abuse monitoring</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The transferred information <strong>does not include account information that identifies
          you, original photos or videos, or raw running record figures.</strong> There are two
          exceptions: the single starting coordinate sent to Apple for place-name conversion, and the
          frames and photos sent to Google and OpenAI when you use an AI template or the Quick Stamp
          judgment (Article 1, along with the freeze frame the AI created from the freeze-frame
          template&rsquo;s frame). The frames are the
          original pictures before any record overlay is applied, so they contain no running record
          figures, and no account information, device identifier, or running record is sent with them.
          For push notification delivery, only the notification token and the kind of text go to
          Google (Firebase), and for server error tracking, only the error type, code location,
          identifiers, processing status, and environment details such as app version and device model go to Sentry.
          Original photos and videos kept as project backups stay only on the server in Korea and are
          not sent to the overseas providers above. If you do not want your information transferred abroad, delete the app; no new records are
          sent after deletion. To block only the advertising identifier, turn off app tracking in
          iOS Settings &gt; Privacy &amp; Security &gt; Tracking (Article 7).
        </p>
        <p>
          <strong>If you only want to avoid the transfer to AI providers, simply do not use AI
          templates or the Quick Stamp judgment.</strong> No frame is sent until you choose videos or
          photos in one of these features and run it yourself, and nothing other than that feature is
          restricted if you do not use it. Guests cannot use these features, so no frames are sent
          for them. Google and OpenAI act as processors on the Team&rsquo;s behalf and, under their
          paid API terms, may not use the frame for their own purposes or for training. We do not
          send photos or videos to any AI service other than these two, and we will disclose any
          change in scope through this policy.
        </p>
      </Section>

      <Section title="Article 6 (Procedures and Methods of Destruction)">
        <ul className="list-disc space-y-1 pl-5">
          <li>Information stored in the app is deleted immediately by iOS when you delete the app. The anonymous device identifier stays on the device even after you delete the app (Article 3).</li>
          <li>Drafts being edited, selected photos, and similar items can be deleted individually in the app.</li>
          <li>Account information, running record backups, notifications, and AI-created freeze frames stored on the server are deleted by an automated process 30 days after you request account deletion, in a way that cannot be recovered.</li>
          <li>AI-created freeze frames stored on the server are also deleted by the storage&rsquo;s automatic expiry rule 90 days after your last edit, even if you do not delete your account (Article 3).</li>
          <li>Project backups stored on the server are deleted by an automated process, in a way that cannot be recovered, 30 days after you delete the project or 30 days after you request account deletion. Photo and video files not used by any project are deleted by the same process after 24 hours (Article 3).</li>
        </ul>
      </Section>

      <Section title="Article 7 (Rights of Users and Legal Representatives and How to Exercise Them)">
        <p>
          You and your legal representative may at any time request access to, correction of,
          deletion of, or suspension of processing of your personal information. Running records,
          photos, and videos are mostly on your device, so you can exercise these rights directly as
          described below. For other requests, including app usage records, contact the Team
          (admin@rungle.app) and we will act without delay.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>Revoke access to running records:</strong> iOS Health app &gt; Profile &gt; Apps &gt; Rungle, turn off read access</li>
          <li><strong>Revoke photo access:</strong> iOS Settings &gt; Rungle &gt; Photos, change or remove the access level</li>
          <li><strong>Refuse sending frames to AI providers:</strong> Simply do not use AI templates or the Quick Stamp judgment. All other templates and features remain available (Article 5)</li>
          <li><strong>Turn off push notifications:</strong> Turn off service notifications in the app&rsquo;s Settings &gt; Notifications, or turn off notifications in iOS Settings &gt; Rungle. Once off, the push notification token is deleted from the Team&rsquo;s server right away, and you can still read the in-app inbox</li>
          <li><strong>Withdraw consent to promotional notifications (offers and news):</strong> Turn off the offers and news (ads) switch in the app&rsquo;s Settings &gt; Notifications. The app shows you the result and the date it was processed right away, and turning it back on is recorded as a new consent</li>
          <li><strong>Change gender or age group:</strong> You can change them on the My Info screen in the app. To erase your answers, contact the Team (Article 3)</li>
          <li><strong>Revoke app tracking (advertising identifier):</strong> Turn off Rungle in iOS Settings &gt; Privacy &amp; Security &gt; Tracking, or turn off Allow Tracking in iOS Settings &gt; Rungle. Once off, the advertising identifier is no longer used, and the service is not restricted in any way</li>
          <li><strong>Delete AI-created freeze frames from the server:</strong> To delete them before the 90 days are up, contact the Team. When you delete your account, they are deleted together with your account information (Article 3)</li>
          <li><strong>Delete a project:</strong> You can delete it from the project list in the app. The backup on the server is deleted 30 days after you delete it; to restore it before then, contact the Team (Article 3)</li>
          <li><strong>Turn off project backup:</strong> You can turn it off in the app&rsquo;s settings. Once off, new edits are not uploaded to the server, and the edits on your device work as before. Projects already uploaded are kept until you delete them or delete your account (Article 3)</li>
          <li><strong>Delete your account:</strong> Request it at any time from the My Info screen in the app. 30 days after the request, the account information, running record backups, AI-created freeze frames, and project backups on the server are permanently deleted; signing in again before then cancels the deletion</li>
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
          <li><strong>On-device processing:</strong> Personal information processing, including photo analysis, face evaluation, and text recognition, is performed on your device, and the iOS app sandbox blocks access from other apps. The only exception is the frames and photos for AI templates and the Quick Stamp judgment (Article 1), which pass through the server to the AI providers; the server deletes them as soon as it returns the result and does not store them. The freeze frame the AI creates is kept in encrypted storage that only the Team&rsquo;s server can access, and you download only your own freeze frames through short-lived signed URLs.</li>
          <li><strong>Project backup:</strong> Before upload, capture details in photos and videos, such as capture location, capture time, and device information, are removed on your device, keeping only the orientation value. The server keeps files in encrypted storage (AES-256), separated by account, and issues the addresses for uploading and downloading files only to the signed-in owner, as signed URLs valid for 1 hour. The storage rejects any request that is not over an encrypted (HTTPS) connection. Photos and videos, including those showing faces, are never used to identify who someone is.</li>
          <li><strong>Push notifications:</strong> Notifications carry only text keys and a job number, so no photos, record figures, or location leave through the notification path, and the push notification token is never written to logs or analytics events.</li>
          <li><strong>Minimal storage:</strong> Birth year is stored only as a 10-year age group, and the original value is not kept.</li>
          <li><strong>Administrative measures:</strong> Minimizing the staff who handle personal information and setting internal handling rules</li>
          <li><strong>Technical measures:</strong> TLS encryption on all external connections; the server is placed in a segment not directly reachable from outside, with access limited to the minimum staff; server credentials are kept in a separate secrets management service</li>
          <li><strong>Access limited to your own data:</strong> Running records and project backups stored on the server can be viewed and edited only by the signed-in owner; ownership is checked on every request.</li>
        </ul>
      </Section>

      <Section title="Article 10 (Automatic Data Collection Tools and How to Refuse Them)">
        <p>
          The Team does not use cookies. Usage records for service quality improvement are generated
          automatically, keyed to the anonymous device identifier issued by the app (and to the account
          identifier issued by the server when you are signed in), and sent to the providers in
          Article 5.
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
          and restore your own records. Measurements of signed-in users (distance, duration, pace, heart rate, cadence,
          and so on) are stored on the Team&rsquo;s server (in Korea) for backup (records made as a guest are not stored on the server), and <strong>GPS
          routes are not sent to the Team&rsquo;s server, and the server is built not to accept
          them.</strong> In line with Apple&rsquo;s policies, <strong>health data is never used for
          advertising or marketing, and is never sold or provided to third parties.</strong>{" "}
          Neither health data nor values derived from it are sent to the ad performance measurement
          tool in Article 5 or to Meta in Article 4. The frames and photos sent to the AI providers in
          Article 5 are the original pictures before any record overlay is applied, so they contain no
          health data. Push notifications carry no record figures either.
        </p>
        <p>
          The <strong>project backup</strong> of a signed-in user also stores the running record
          values shown in that edit&rsquo;s overlays (distance, duration, pace, and so on). This is
          so the edit can be restored exactly on another device, and these values are the same kind
          as the running measurements already backed up to the server. They too are never used for
          advertising or marketing and are never provided to third parties.
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
          storing location data (GPS routes) on the server is introduced.
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
        <p className="text-gray-600">
          Revision of September 16, 2026: server retention of the freeze frame created by the AI (90
          days after your last edit; deleted together with your account information when you delete
          your account) was added to the summary and Articles 1, 2, 3, 5, 6, 7, and 9. The policy
          effective September 9 stated that the freeze frame was stored only on your device; it is
          now kept on the server so you can keep editing it and restore it on another device. This
          retention occurs only when you choose to use an AI template, and AI templates first open
          in the app version released after this policy is published (1.2.0), so existing usage does
          not change and the revision takes effect at the same time as its notice.
        </p>
        <p className="text-gray-600">
          Revision of September 17, 2026: Articles 1, 5, and 10 now state that the usage records of
          signed-in users carry the account identifier issued by the server and are sent to the
          analytics tool (Amplitude). This keeps you as one user when you change devices; the account
          identifier is a random value created by the server and contains no email or name. This
          processing begins only once you sign in on the app version released after this policy is
          published (1.2.0), and does not occur in earlier versions or in guest use, so it takes
          effect at the same time as its notice.
        </p>
        <p className="text-gray-600">
          Revision of October 1, 2026: project backup for signed-in users (server retention of the
          original photos and videos of edits, their editing information, and the running record
          values shown in overlays) was added to the introduction, the summary, and Articles 1, 2, 3,
          5, 6, 7, 9, and 11, and storing original photos and videos on the server was removed from
          the list of planned revisions in Article 13. Project backup applies from app version 2.0.0,
          released after this policy is published. Because it is on by default for signed-in users
          and starts when you update the app without any choice on your part, this revision takes
          effect 7 days after its notice. The same revision adds two more things. First, AI templates
          now include Cut Edit, Web Shooter, and Monthly Recap in addition to the freeze-frame
          template, and the Quick Stamp best-shot judgment now uses an AI provider, so the frames sent
          to AI providers changed from a single frame to several depending on the feature (Articles
          1, 2, 5, 7, 9, and 11). Second, push notifications sent by the Team&rsquo;s server (AI job
          result notifications, delivered through Google Firebase) and consent to promotional
          notifications (offers and news) (Articles 1, 2, 3, 5, 7, and 9). Accordingly, server push
          notifications and sending multiple frames to external AI were also removed from the list of
          planned revisions in Article 13. Sending multiple frames happens only when you choose and
          run such a feature and existing usage does not change, so that part takes effect at the same
          time as its notice. Of these features, Cut Edit was already included in app version 1.2.0,
          released after September 17, 2026, while this policy still described a single frame; we
          apologize for reflecting it late. Web Shooter, Monthly Recap, the Quick Stamp judgment,
          push notifications, and promotional notifications apply from app version 2.0.0, and
          promotional notifications are sent only when you separately consent.
        </p>
        <p className="text-gray-600">
          Revision of October 5, 2026: to find the cause of errors on the Team&rsquo;s server quickly,
          we added to the summary and Articles 1, 3, and 5 that server error records and the environment
          where they occurred (app version, iOS family version, device model name, app screen name) are
          sent to an error tracking tool (Sentry, United States). The records sent do not include the
          request body, login credentials, IP address, email, photos, running record figures, or location. This revision
          takes effect on October 7, 2026.
        </p>
        <p className="text-gray-600">
          Revision of October 8, 2026: the introduction, the summary, and Articles 1, 3, and 11 now state that running records made as a guest
          are not stored on the server but stay on your device, and are backed up to your account after you sign in. Records that
          earlier versions of the app uploaded as a guest will be deleted by the Team. Because this revision reduces the information
          we process, it takes effect at the same time as its notice.
        </p>
        <p><strong>Date of notice: October 8, 2026 / Effective date: October 8, 2026</strong> (the revision announced on October 5, 2026 takes effect on October 7, 2026; the revision announced on October 1, 2026 takes effect on October 8, 2026; AI template provisions first effective September 9, 2026)</p>
      </Section>
    </main>
  );
}
