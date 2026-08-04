import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관 | Rungle",
  description: "Rungle 이용약관",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold border-b border-gray-200 pb-2">{title}</h2>
      <div className="mt-4 space-y-3 leading-7 text-gray-800">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-[15px]">
      <h1 className="text-3xl font-extrabold">이용약관</h1>
      <p className="mt-4 leading-7 text-gray-800">
        본 약관은 Rungle 운영팀(이하 &ldquo;운영팀&rdquo;)이 제공하는 Rungle 서비스의 이용과
        관련하여 운영팀과 이용자 간의 권리·의무 및 책임 사항을
        정하는 것을 목적으로 합니다. 본 약관은 현재 제공 중인 버전을 기준으로 합니다.
      </p>

      <Section title="제1조 (정의)">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>&ldquo;서비스&rdquo;</strong>란 러닝 기록을 불러와 사진·영상에서 베스트컷을
            골라주고 기록 오버레이·릴스를 만들어 공유할 수 있도록 하는 iOS 앱 및 이에 부수하는
            제반 기능을 말합니다.
          </li>
          <li>
            <strong>&ldquo;이용자&rdquo;</strong>란 본 약관에 따라 서비스를 이용하는 사람을
            말합니다.
          </li>
          <li>
            <strong>&ldquo;콘텐츠&rdquo;</strong>란 이용자가 서비스를 이용하는 과정에서
            불러오거나 만들어 내는 사진·영상·기록 오버레이·릴스 등 일체의 결과물을 말합니다.
          </li>
        </ul>
      </Section>

      <Section title="제2조 (약관의 효력 및 변경)">
        <ul className="list-disc space-y-1 pl-5">
          <li>본 약관은 본 페이지에 게시함으로써 효력이 발생합니다.</li>
          <li>
            이용자가 앱을 설치하고 서비스를 이용하는 경우 본 약관에 동의한 것으로 보며, 이때
            이용계약이 성립합니다.
          </li>
          <li>
            운영팀은 관련 법령을 위반하지 않는 범위에서 본 약관을 변경할 수 있으며, 변경 시
            적용일자와 변경 사유를 명시하여 시행 최소 7일 전에 본 페이지 및 앱 내 공지 등
            이용자가 쉽게 확인할 수 있는 방법으로 고지합니다. 이용자에게 불리하거나 중대한
            변경은 시행 최소 30일 전에 고지합니다.
          </li>
          <li>
            이용자가 변경된 약관의 시행일 이후에도 서비스를 계속 이용하는 경우 변경된 약관에
            동의한 것으로 봅니다. 변경에 동의하지 않는 이용자는 서비스 이용을 중단하고 앱을
            삭제할 수 있습니다.
          </li>
        </ul>
      </Section>

      <Section title="제3조 (서비스의 제공)">
        <p>운영팀은 다음 각 호의 서비스를 제공합니다.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>러닝 기록(HealthKit) 불러오기 및 타 러닝 앱 기록 화면 캡처 인식</li>
          <li>러닝 시간대 사진·영상에서 베스트컷 추천</li>
          <li>기록 오버레이·릴스·프레임 콘텐츠 생성과 편집, 공유 지원</li>
        </ul>
        <p>
          서비스는 무료로 제공되며, 회원 가입·로그인 없이 이용할 수 있습니다. 서비스 이용을 위해서는
          서비스가 지원하는 iOS 기기가 필요하며, HealthKit·사진 등 각 권한의 허용 여부는
          이용자가 선택할 수 있습니다.
        </p>
        <p>
          <strong>
            서비스는 계속 개선 중인 초기 버전으로, 기능이 예고 없이 추가·변경될 수 있으며
            일부 기능이 불완전하게 동작할 수 있습니다.
          </strong>
        </p>
      </Section>

      <Section title="제4조 (이용자의 의무)">
        <p>이용자는 다음 각 호의 행위를 해서는 안 됩니다.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>타인의 초상권·저작권 등 권리를 침해하는 콘텐츠를 만들거나 공유하는 행위</li>
          <li>서비스를 관련 법령 또는 공공질서에 위반되는 목적으로 이용하는 행위</li>
          <li>
            서비스를 역설계(리버스 엔지니어링)·복제·배포하거나 비정상적인 방법으로 이용하는
            행위
          </li>
          <li>운영팀 또는 제3자의 서비스 운영을 고의로 방해하는 행위</li>
        </ul>
        <p>
          이용자가 서비스로 만든 콘텐츠를 외부(소셜 미디어 등)에 공유하는 행위와 그에 따른
          책임은 이용자 본인에게 있습니다.
        </p>
        <p>
          이용자가 본 조를 위반한 경우 운영팀은 사전 고지 후 서비스의 이용을 제한하거나
          중단할 수 있습니다.
        </p>
      </Section>

      <Section title="제5조 (콘텐츠에 대한 권리)">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            이용자가 불러오거나 만든 콘텐츠에 대한 권리는 <strong>이용자 본인에게</strong>{" "}
            있으며, 운영팀은 이용자의 콘텐츠에 대해 어떠한 권리도 주장하지 않습니다.
            콘텐츠는 원칙적으로 이용자의 기기 안에서 처리·보관되며, 일부 기능의 외부 처리
            여부는 개인정보 처리방침에서 정한 범위에 따릅니다.
          </li>
          <li>
            서비스를 구성하는 앱·소프트웨어·디자인·상표 등에 대한 지식재산권은 운영팀에게
            있으며, 본 약관은 이용자에게 서비스 이용 목적의 권리 외에 어떠한 지식재산권도
            이전하지 않습니다.
          </li>
        </ul>
      </Section>

      <Section title="제6조 (개인정보 보호)">
        <p>
          운영팀은 관련 법령이 정하는 바에 따라 이용자의 개인정보를 보호하기 위해 노력합니다.
          개인정보의 처리에 관한 사항은{" "}
          <Link href="/privacy" className="font-semibold underline underline-offset-2">
            개인정보 처리방침
          </Link>
          에 따릅니다.
        </p>
      </Section>

      <Section title="제7조 (서비스의 변경 및 중단)">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            운영팀은 운영·기술상 필요에 따라 서비스의 전부 또는 일부를 변경·중단할 수
            있으며, 서비스 종료 등 중대한 사항은 시행 최소 30일 전에 본 페이지 및 앱 내
            공지를 통해 고지합니다.
          </li>
          <li>
            이용자의 콘텐츠와 기록은 이용자 기기 안에만 저장되므로, 서비스가 중단되더라도
            기기에 저장된 콘텐츠는 유지됩니다. 기기 변경·앱 삭제에 대비한 콘텐츠 백업은
            이용자의 책임으로 합니다.
          </li>
        </ul>
      </Section>

      <Section title="제8조 (책임의 제한)">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            서비스는 무상으로 제공되며, 운영팀은 고의 또는 중대한 과실이 없는 한
            서비스 이용과 관련하여 발생한 손해에 대해 책임을 지지 않습니다.
          </li>
          <li>
            베스트컷 추천, 기록 화면 캡처의 문자인식(OCR) 결과 등 서비스가 제공하는 결과물의
            정확성·완전성은 보장되지 않으며, 러닝 기록의 원본은 HealthKit 등 원천 데이터를
            기준으로 합니다.
          </li>
          <li>
            천재지변, 기기·운영체제(iOS)의 장애 등 운영팀이 통제할 수 없는 사유로 인한 서비스
            제공 중단에 대해서는 책임을 지지 않습니다.
          </li>
        </ul>
      </Section>

      <Section title="제9조 (준거법 및 재판관할)">
        <p>
          본 약관은 대한민국 법령에 따라 해석되며, 서비스 이용과 관련하여 운영팀과 이용자 간에
          발생한 분쟁에 대한 소송은 「민사소송법」상의 관할 법원에 제기합니다.
        </p>
      </Section>

      <Section title="제10조 (문의)">
        <p>이용자는 본 약관 및 서비스 이용에 관한 사항을 아래로 문의할 수 있습니다.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>담당: Rungle 운영팀 김동호</li>
          <li>이메일: hkim4410@gmail.com</li>
        </ul>
      </Section>

      <Section title="부칙">
        <p><strong>시행일: 2026년 8월 4일</strong></p>
      </Section>
    </main>
  );
}
