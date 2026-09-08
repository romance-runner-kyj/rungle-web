import type { Metadata } from "next";
import { LangSwitch } from "@/app/lang-switch";

export const metadata: Metadata = {
  title: "Support | Rungle",
  description: "Where to get help with Rungle and how to contact us",
  alternates: { languages: { ko: "/support", en: "/en/support" } },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold border-b border-gray-200 pb-2">{title}</h2>
      <div className="mt-4 space-y-3 leading-7 text-gray-800">{children}</div>
    </section>
  );
}

function Faq({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 first:mt-0">
      <h3 className="font-bold">{question}</h3>
      <div className="mt-2 space-y-2 leading-7 text-gray-800">{children}</div>
    </div>
  );
}

// 한국어판(app/(ko)/support/page.tsx)을 그대로 옮긴 영어판. 한국어판을 고치면 여기도 같이 고친다.
export default function SupportPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-[15px]">
      <LangSwitch path="/support" current="en" />
      <h1 className="text-3xl font-extrabold">Support</h1>
      <p className="mt-4 leading-7 text-gray-800">
        Rungle is an iOS app that imports your running records, picks the best shots from your
        photos and videos, and turns them into record overlays and reels to share. If you get stuck,
        check the items below first, and email us if that does not solve it.
      </p>

      <div className="mt-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
        <h2 className="font-bold">Contact</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>
            <strong>Email:</strong>{" "}
            <a className="underline" href="mailto:admin@rungle.app">
              admin@rungle.app
            </a>
          </li>
          <li><strong>Response:</strong> within 2 to 3 business days</li>
          <li>
            <strong>Helpful to include:</strong> your iPhone model and iOS version, the app
            version, the screen where the problem happened, and what you did just before
          </li>
        </ul>
        <p className="mt-3 leading-7 text-gray-800">
          You can find the app version at the bottom of the Settings screen in the app. A screenshot
          or screen recording helps us find the cause much faster.
        </p>
      </div>

      <Section title="Frequently Asked Questions">
        <Faq question="I can't see any running records">
          <p>
            Rungle does not measure runs itself. It reads the running records saved in the iOS
            Health app, so there are two things to check.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Make sure the running app you normally use is set to save workouts to the Health app.
              If that setting is off, nothing is written to Health, and Rungle cannot read it.
            </li>
            <li>
              In the Health app, go to your profile (top right) &gt; Apps &gt; Rungle and make sure
              read access is turned on.
            </li>
          </ul>
          <p>
            You can start without records, too. Take a screenshot of another running app&rsquo;s
            record screen, and Rungle reads the distance, time, and pace from that image to create
            content.
          </p>
        </Faq>

        <Faq question="I ran, but no photos were collected">
          <p>
            Rungle does not collect your whole library, only the photos and videos taken during the
            time of your run. Anything taken outside that window is not included as a candidate.
          </p>
          <p>
            Also check the photo permission. If iOS Settings &gt; Rungle &gt; Photos is set to
            &ldquo;Selected Photos&rdquo;, only the photos you chose are visible. To see all your
            running photos, widen the access, or pick and add the photos you want to use yourself.
          </p>
        </Faq>

        <Faq question="Where are the photos and videos I made saved?">
          <p>
            Tapping Save on the completion screen puts them in the iOS Photos app (your library).
            You can also send them straight to Instagram, or copy a photo and paste it into another
            app.
          </p>
          <p>
            If sending to Instagram does not work, check that the Instagram app is installed. If it
            is not, you are taken to Instagram&rsquo;s App Store page.
          </p>
        </Faq>

        <Faq question="Are my photos uploaded to a server?">
          <p>
            No. Your original photos and videos never leave your device. Judging which shots came
            out well also happens on your device.
          </p>
          <p>
            Faces are only evaluated for how well they came out; they are never generated, altered,
            or retouched. The details are in the{" "}
            <a className="underline" href="/en/privacy">
              Privacy Policy
            </a>
            .
          </p>
        </Faq>

        <Faq question="What happens to my data if I delete the app?">
          <p>
            It is all deleted with the app. Rungle keeps the content you made and your settings only
            on your device, so iOS removes them when you delete the app. Results you already saved
            to your library remain.
          </p>
        </Faq>

        <Faq question="Can I use the app without granting permissions?">
          <p>
            Yes. The Health, Photos, and Notifications permissions are all optional. Only the
            features that need a permission you declined are unavailable; everything else works as
            usual. Each permission is requested with an explanation when the feature first needs it.
          </p>
        </Faq>
      </Section>

      <Section title="Documents">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <a className="underline" href="/en/privacy">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="underline" href="/en/terms">
              Terms of Service
            </a>
          </li>
        </ul>
      </Section>
    </main>
  );
}
