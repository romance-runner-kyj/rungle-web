import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "고객 지원 | Rungle",
  description: "Rungle 사용 중 막히는 부분과 문의 방법",
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

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-[15px]">
      <h1 className="text-3xl font-extrabold">고객 지원</h1>
      <p className="mt-4 leading-7 text-gray-800">
        Rungle은 러닝 기록을 불러와 사진·영상에서 베스트컷을 골라주고 기록 오버레이·릴스를
        만들어 공유하는 iOS 앱입니다. 쓰다가 막히는 부분이 있으면 아래 내용을 먼저 확인하고,
        해결되지 않으면 메일로 알려주세요.
      </p>

      <div className="mt-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
        <h2 className="font-bold">문의</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>
            <strong>이메일:</strong>{" "}
            <a className="underline" href="mailto:admin@rungle.app">
              admin@rungle.app
            </a>
          </li>
          <li><strong>답변:</strong> 영업일 기준 2~3일 안에 회신합니다</li>
          <li>
            <strong>문의에 적어주시면 좋은 것:</strong> 쓰고 있는 iPhone 모델과 iOS 버전, 앱
            버전, 문제가 생긴 화면과 그 직전에 한 조작
          </li>
        </ul>
        <p className="mt-3 leading-7 text-gray-800">
          앱 버전은 앱 안의 설정 화면 맨 아래에서 볼 수 있습니다. 사진이나 화면 녹화를 함께
          보내주시면 원인을 훨씬 빨리 찾을 수 있습니다.
        </p>
      </div>

      <Section title="자주 묻는 질문">
        <Faq question="러닝 기록이 하나도 안 보여요">
          <p>
            Rungle은 러닝을 직접 측정하지 않고, iOS 건강 앱에 저장된 러닝 기록을 읽어옵니다.
            그래서 두 가지를 확인해야 합니다.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              평소 쓰는 러닝 앱이 기록을 건강 앱에 저장하도록 켜져 있는지 확인해 주세요. 이
              설정이 꺼져 있으면 건강 앱에 기록이 남지 않아 Rungle도 읽을 수 없습니다.
            </li>
            <li>
              건강 앱 &gt; 오른쪽 위 프로필 &gt; 앱 &gt; Rungle에서 읽기 권한이 켜져 있는지
              확인해 주세요.
            </li>
          </ul>
          <p>
            기록이 없어도 시작할 수 있습니다. 다른 러닝 앱의 기록 화면을 캡처해 두면, 그
            이미지에서 거리·시간·페이스를 읽어 콘텐츠를 만들 수 있습니다.
          </p>
        </Faq>

        <Faq question="러닝은 했는데 사진이 안 모여요">
          <p>
            Rungle은 갤러리 전체가 아니라 러닝한 시간대에 찍힌 사진·영상만 모읍니다. 그 시간
            바깥에서 찍은 것은 후보에 들어오지 않습니다.
          </p>
          <p>
            사진 권한도 확인해 주세요. iOS 설정 &gt; Rungle &gt; 사진에서 접근 범위가 &ldquo;선택한
            사진&rdquo;으로 되어 있으면 고른 사진만 보입니다. 러닝 사진이 전부 보이게 하려면 범위를
            넓히거나, 쓸 사진을 직접 골라 추가해 주세요.
          </p>
        </Faq>

        <Faq question="만든 사진이나 영상은 어디에 저장되나요">
          <p>
            완성 화면에서 저장을 누르면 iOS 사진 앱(갤러리)에 들어갑니다. 인스타그램으로 바로
            보내거나, 사진은 복사해서 다른 앱에 붙여 넣을 수도 있습니다.
          </p>
          <p>
            인스타그램으로 보내기가 안 되면 인스타그램 앱이 깔려 있는지 확인해 주세요. 깔려
            있지 않으면 App Store의 인스타그램 페이지로 이동합니다.
          </p>
        </Faq>

        <Faq question="제 사진이 서버로 올라가나요">
          <p>
            아닙니다. 사진과 영상 원본은 기기 밖으로 나가지 않습니다. 어떤 컷이 잘 나왔는지
            판단하는 일도 기기 안에서 합니다.
          </p>
          <p>
            얼굴은 잘 나왔는지 평가만 하고 만들거나 바꾸거나 보정하지 않습니다. 자세한 내용은{" "}
            <a className="underline" href="/privacy">
              개인정보 처리방침
            </a>
            에 적어 두었습니다.
          </p>
        </Faq>

        <Faq question="앱을 지우면 제 데이터는 어떻게 되나요">
          <p>
            전부 함께 지워집니다. Rungle은 만든 콘텐츠와 설정을 기기 안에만 두기 때문에, 앱을
            삭제하면 iOS가 같이 지웁니다. 갤러리에 이미 저장한 결과물은 그대로 남습니다.
          </p>
        </Faq>

        <Faq question="권한을 허용하지 않으면 못 쓰나요">
          <p>
            쓸 수 있습니다. 건강·사진·알림 권한은 모두 선택입니다. 허용하지 않은 기능만 빠지고
            나머지는 그대로 씁니다. 각 권한은 그 기능이 처음 필요해질 때 이유와 함께
            요청합니다.
          </p>
        </Faq>
      </Section>

      <Section title="문서">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <a className="underline" href="/privacy">
              개인정보 처리방침
            </a>
          </li>
          <li>
            <a className="underline" href="/terms">
              이용약관
            </a>
          </li>
        </ul>
      </Section>
    </main>
  );
}
