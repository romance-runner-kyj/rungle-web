import type { Metadata } from "next";
import Link from "next/link";
import { LangSwitch } from "@/app/lang-switch";

export const metadata: Metadata = {
  title: "Terms of Service | Rungle",
  description: "Rungle Terms of Service",
  alternates: { languages: { ko: "/terms", en: "/en/terms" } },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold border-b border-gray-200 pb-2">{title}</h2>
      <div className="mt-4 space-y-3 leading-7 text-gray-800">{children}</div>
    </section>
  );
}

// 한국어판(app/(ko)/terms/page.tsx)을 조항 번호까지 그대로 옮긴 영어판. 준거법은 한국 그대로다.
// 한국어판을 고치면 여기도 같이 고친다.
export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-[15px]">
      <LangSwitch path="/terms" current="en" />
      <h1 className="text-3xl font-extrabold">Terms of Service</h1>
      <p className="mt-2 text-sm text-gray-600">
        This is an English translation of the Korean Terms of Service. If the two versions differ,
        the Korean version prevails.
      </p>
      <p className="mt-4 leading-7 text-gray-800">
        These Terms set out the rights, obligations, and responsibilities between the Rungle team
        (the &ldquo;Team&rdquo;) and Users regarding use of the Rungle service provided by the Team.
        These Terms apply to the version currently available.
      </p>

      <Section title="Article 1 (Definitions)">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>&ldquo;Service&rdquo;</strong> means the iOS app that imports your running
            records, picks the best shots from your photos and videos, and lets you create and
            share record overlays and reels, together with all related features.
          </li>
          <li>
            <strong>&ldquo;User&rdquo;</strong> means a person who uses the Service under these
            Terms.
          </li>
          <li>
            <strong>&ldquo;Content&rdquo;</strong> means everything a User imports or creates while
            using the Service, including photos, videos, record overlays, and reels.
          </li>
        </ul>
      </Section>

      <Section title="Article 2 (Effect of and Changes to the Terms)">
        <ul className="list-disc space-y-1 pl-5">
          <li>These Terms take effect when posted on this page.</li>
          <li>
            By installing the app and using the Service, you are deemed to have agreed to these
            Terms, and a service agreement is formed at that point.
          </li>
          <li>
            The Team may change these Terms within the limits of applicable law. When it does, it
            states the effective date and the reasons and gives notice at least 7 days before the
            change takes effect, on this page and through in-app announcements or other means Users
            can easily check. Changes that are unfavorable to Users or material are announced at
            least 30 days in advance.
          </li>
          <li>
            If you keep using the Service after the effective date of the changed Terms, you are
            deemed to have agreed to them. If you do not agree, you may stop using the Service and
            delete the app.
          </li>
        </ul>
      </Section>

      <Section title="Article 3 (Provision of the Service)">
        <p>The Team provides the following services.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Importing running records (HealthKit) and recognizing screenshots of other running apps&rsquo; record screens</li>
          <li>Recommending the best shots from photos and videos taken during your run</li>
          <li>Creating, editing, and sharing record overlays, reels, and frame content</li>
        </ul>
        <p>
          The Service is provided free of charge and can be used without signing up or signing in.
          Using the Service requires an iOS device the Service supports, and you choose whether to
          grant each permission, such as HealthKit and Photos.
        </p>
        <p>
          <strong>
            The Service is an early version under continuous improvement. Features may be added or
            changed without notice, and some features may not work perfectly.
          </strong>
        </p>
      </Section>

      <Section title="Article 4 (User Obligations)">
        <p>Users must not do any of the following.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Create or share Content that infringes the rights of others, such as their right to their own image or their copyright</li>
          <li>Use the Service for purposes that violate applicable law or public order</li>
          <li>
            Reverse engineer, copy, or distribute the Service, or use it in abnormal ways
          </li>
          <li>Deliberately interfere with the operation of the Service by the Team or a third party</li>
        </ul>
        <p>
          Sharing Content you made with the Service outside the app (on social media, for example),
          and the responsibility that comes with it, rest with you.
        </p>
        <p>
          If you violate this Article, the Team may restrict or suspend your use of the Service
          after giving notice.
        </p>
      </Section>

      <Section title="Article 5 (Rights to Content)">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Rights to the Content you import or create belong to <strong>you</strong>, and the Team
            claims no rights to your Content. Content is in principle processed and stored on your
            device; whether some features process data externally is governed by the Privacy
            Policy.
          </li>
          <li>
            Intellectual property rights in the app, software, design, trademarks, and other parts
            of the Service belong to the Team, and these Terms transfer no intellectual property
            rights to you beyond the right to use the Service.
          </li>
        </ul>
      </Section>

      <Section title="Article 6 (Privacy)">
        <p>
          The Team strives to protect Users&rsquo; personal information as required by applicable
          law. Matters concerning the processing of personal information are governed by the{" "}
          <Link href="/en/privacy" className="font-semibold underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
      </Section>

      <Section title="Article 7 (Changes to and Suspension of the Service)">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            The Team may change or suspend all or part of the Service as operational or technical
            needs require. Material matters such as termination of the Service are announced at
            least 30 days in advance on this page and through in-app announcements.
          </li>
          <li>
            Your Content and records are stored only on your device, so Content stored on your
            device remains even if the Service is suspended. Backing up Content in case you change
            devices or delete the app is your responsibility.
          </li>
        </ul>
      </Section>

      <Section title="Article 8 (Limitation of Liability)">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            The Service is provided free of charge, and the Team is not liable for damages arising
            from use of the Service unless caused by its willful misconduct or gross negligence.
          </li>
          <li>
            The accuracy and completeness of the results the Service provides, such as best-shot
            recommendations and text recognition (OCR) of record screen captures, are not
            guaranteed, and the source data such as HealthKit remains the authoritative record of
            your runs.
          </li>
          <li>
            The Team is not liable for interruptions of the Service caused by events beyond its
            control, such as natural disasters or failures of the device or operating system (iOS).
          </li>
        </ul>
      </Section>

      <Section title="Article 9 (Governing Law and Jurisdiction)">
        <p>
          These Terms are interpreted under the laws of the Republic of Korea, and any lawsuit over
          a dispute between the Team and a User concerning use of the Service shall be filed with
          the court having jurisdiction under the Korean Civil Procedure Act.
        </p>
      </Section>

      <Section title="Article 10 (Contact)">
        <p>You may contact us about these Terms and use of the Service at the following.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Contact: Dongho Kim, Rungle team</li>
          <li>Email: hkim4410@gmail.com</li>
        </ul>
      </Section>

      <Section title="Addendum">
        <p><strong>Effective date: August 4, 2026</strong></p>
      </Section>
    </main>
  );
}
