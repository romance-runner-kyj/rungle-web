import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보 처리방침 | Rungle",
  description: "Rungle 개인정보 처리방침",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold border-b border-gray-200 pb-2">{title}</h2>
      <div className="mt-4 space-y-3 leading-7 text-gray-800">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-[15px]">
      <h1 className="text-3xl font-extrabold">개인정보 처리방침</h1>
      <p className="mt-4 leading-7 text-gray-800">
        Rungle(이하 &ldquo;서비스&rdquo;)은 「개인정보 보호법」
        제30조에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할
        수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.
      </p>
      <p className="mt-3 leading-7 text-gray-800">
        Rungle은 러닝 기록을 불러와 사진·영상에서 베스트컷을 골라주고 기록 오버레이·릴스를
        만들어 공유하는 iOS 앱입니다. 본 방침은 현재 제공 중인 클로즈 베타 버전을 기준으로
        하며, <strong>현재 버전은 회원 가입·로그인 기능이 없고 별도의 서비스 서버로 개인정보를
        전송하지 않습니다.</strong>
      </p>

      {/* 중요 사항 요약 표시 (개인정보 처리방침 주요 내용) */}
      <div className="mt-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
        <h2 className="font-bold">주요 개인정보 처리 표시(요약)</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li><strong>계정 정보:</strong> 수집하지 않음(회원 가입·로그인 없음)</li>
          <li><strong>처리 항목:</strong> 러닝 기록(HealthKit), 사진·영상, 앱 이용 기록 — 모두 이용자 기기 안에서 처리·보관 (일부 콘텐츠 분석 시 외부 AI 이용 가능, 제5조)</li>
          <li><strong>처리 목적:</strong> 베스트컷 추천, 기록 오버레이·릴스 생성, 서비스 품질 개선</li>
          <li><strong>보유 기간:</strong> 이용자 기기 내 보관, 앱 삭제 시 전부 파기</li>
          <li><strong>제3자 제공:</strong> 하지 않음</li>
          <li><strong>개인정보 보호책임자:</strong> 김동호 (admin@rungle.app)</li>
          <li><strong>문의:</strong> 서비스 (admin@rungle.app)</li>
        </ul>
      </div>

      <Section title="제1조 (처리하는 개인정보의 항목 및 수집 방법)">
        <p>
          서비스는 회원 가입 없이 이용하며, 이름·이메일·비밀번호 등 계정 정보를 수집하지
          않습니다. 서비스 제공을 위해 처리하는 정보는 다음과 같고, 전부 이용자의 기기 안에서
          처리됩니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="p-2 font-bold">항목</th>
                <th className="p-2 font-bold">내용</th>
                <th className="p-2 font-bold">수집 방법</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">러닝 기록</td>
                <td className="p-2">거리·시간·페이스·칼로리·심박수·케이던스·GPS 경로 등 러닝 워크아웃 데이터</td>
                <td className="p-2">이용자가 허용한 경우 Apple HealthKit에서 읽기</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">사진·영상</td>
                <td className="p-2">러닝 시간대에 촬영된 사진·영상(베스트컷 추천·편집 대상)</td>
                <td className="p-2">이용자가 허용한 경우 사진 라이브러리에서 읽기</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">기록 화면 캡처</td>
                <td className="p-2">타 러닝 앱 기록 화면 캡처 이미지와 문자인식(OCR)으로 추출한 거리·시간·페이스</td>
                <td className="p-2">이용자가 직접 선택한 캡처 이미지를 기기 내에서 분석</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">이용 기록(자동 수집)</td>
                <td className="p-2">앱이 발급한 익명 기기 식별자, 기능 사용 이벤트, 오류 기록, 사용 경험 평가 응답(5점 척도)</td>
                <td className="p-2">서비스 이용 과정에서 자동 생성, 기기 내 보관</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>
            HealthKit·사진·알림 등 모든 권한은 선택 사항이며, 허용하지 않아도 서비스 이용
            자체가 거부되지 않고 가능한 범위의 기능을 계속 이용할 수 있습니다.
          </strong>{" "}
          예를 들어 HealthKit을 연동하지 않아도 기록 화면 캡처로 콘텐츠를 만들 수 있습니다. 각
          권한은 해당 기능이 처음 필요해지는 시점에 이유와 함께 요청됩니다.
        </p>
      </Section>

      <Section title="제2조 (개인정보의 처리 목적)">
        <ul className="list-disc space-y-1 pl-5">
          <li>러닝 기록 불러오기와 러닝 시간대 사진·영상 자동 수집</li>
          <li>베스트컷 추천(사진·영상 품질과 얼굴·구도를 기기 내에서 평가). <strong>얼굴은 인식·평가만 하며 생성·변형·보정하지 않습니다.</strong></li>
          <li>기록 오버레이·릴스·프레임 콘텐츠 생성과 편집</li>
          <li>서비스 품질 개선과 추천 기능 고도화를 위한 이용 기록 분석</li>
        </ul>
      </Section>

      <Section title="제3조 (개인정보의 처리 및 보유 기간)">
        <p>
          처리되는 모든 정보는 <strong>이용자의 기기 안에만 저장</strong>되며, 서비스가 별도
          서버에 보관하지 않습니다. 이용자가 앱을 삭제하면 앱이 저장한 모든 정보가 함께
          파기됩니다.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>베스트컷 후보는 사진 라이브러리의 참조 정보만 사용하며, 이용자가 최종 선택한 사진·클립만 앱에 저장됩니다.</li>
          <li>이용 기록(이벤트 로그)은 기기 내에 보관됩니다. 향후 정식 출시 과정에서 서비스 품질 분석을 위한 서버 전송이 도입될 수 있으며, 도입 시 본 방침을 개정하여 사전에 고지합니다.</li>
        </ul>
      </Section>

      <Section title="제4조 (개인정보의 제3자 제공)">
        <p>
          서비스는 이용자의 개인정보를 <strong>제3자에게 제공하지 않습니다.</strong> 다만
          이용자가 사전에 동의한 경우 또는 법령의 규정에 의한 경우에는 예외로 합니다.
        </p>
      </Section>

      <Section title="제5조 (개인정보 처리의 위탁 및 외부 서비스 이용)">
        <p>서비스는 현재 개인정보 처리 업무를 외부에 위탁하고 있지 않습니다.</p>
        <p>
          다만 베타 기간 중 일부 콘텐츠 분석·편집 기능의 보조를 위해 외부 인공지능(AI) 서비스
          API를 이용할 수 있습니다. 이 경우 해당 기능 처리에 필요한 최소한의 데이터만
          전송되며, <strong>건강 데이터(러닝 기록 원본값)와 이용자를 식별할 수 있는 정보는
          전송하지 않습니다.</strong> 이용 범위가 확정·변경되는 경우 본 방침을 통해
          공개합니다.
        </p>
      </Section>

      <Section title="제6조 (개인정보의 파기 절차 및 방법)">
        <ul className="list-disc space-y-1 pl-5">
          <li>앱 내 저장 정보는 이용자가 앱을 삭제하면 iOS 시스템에 의해 즉시 파기됩니다.</li>
          <li>편집 중인 초안·선택한 사진 등은 앱 안에서 해당 항목을 삭제하여 개별적으로 파기할 수 있습니다.</li>
        </ul>
      </Section>

      <Section title="제7조 (정보주체와 법정대리인의 권리·의무 및 행사 방법)">
        <p>
          이용자 및 법정대리인은 언제든지 개인정보의 열람, 정정, 삭제, 처리정지를 요구할 수
          있습니다. 처리되는 정보가 모두 이용자 기기 안에 있으므로 다음 방법으로 직접 행사할
          수 있으며, 그 밖의 요구는 서비스(admin@rungle.app)에 문의하면 지체 없이 조치합니다.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>러닝 기록 접근 철회:</strong> iOS 건강 앱 &gt; 프로필 &gt; 앱 &gt; Rungle에서 읽기 권한 해제</li>
          <li><strong>사진 접근 철회:</strong> iOS 설정 &gt; Rungle &gt; 사진에서 접근 범위 변경 또는 해제</li>
          <li><strong>전체 삭제:</strong> 앱 삭제 시 앱이 저장한 모든 정보가 파기됩니다</li>
        </ul>
      </Section>

      <Section title="제8조 (만 14세 미만 아동의 개인정보 처리)">
        <p>
          서비스는 만 14세 미만 아동을 대상으로 하지 않으며, 만 14세 미만 아동의 개인정보를
          수집하지 않습니다.{" "}
          <strong>
            만 14세 미만 아동이 서비스를 이용하려는 경우 반드시 법정대리인(부모 등)의 동의를
            받아야 하며,
          </strong>{" "}
          법정대리인의 동의 없이 처리된 사실이 확인된 아동의 개인정보는 지체 없이 파기합니다.
        </p>
      </Section>

      <Section title="제9조 (개인정보의 안전성 확보 조치)">
        <p>서비스는 「개인정보 보호법」 제29조에 따라 다음과 같은 안전성 확보 조치를 취하고 있습니다.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>기기 내 처리:</strong> 러닝 기록·사진 분석·얼굴 평가·문자인식을 포함한 개인정보 처리를 이용자 기기 안에서 수행하고, iOS 앱 샌드박스로 다른 앱의 접근이 차단됩니다.</li>
          <li><strong>관리적 조치:</strong> 개인정보 취급 인원 최소화, 내부 취급 원칙 수립</li>
          <li><strong>기술적 조치:</strong> 외부 통신 도입 시 TLS 암호화 적용</li>
        </ul>
      </Section>

      <Section title="제10조 (개인정보 자동 수집 장치의 설치·운영 및 거부)">
        <p>
          서비스는 쿠키를 사용하지 않으며, 광고 식별자(IDFA)를 수집하지 않고 앱 추적 투명성(ATT)
          대상 추적을 하지 않습니다. 서비스 품질 개선을 위한 이용 기록은 앱이 발급한 익명 기기
          식별자 기준으로 기기 내에 자동 생성·보관됩니다(제3조).
        </p>
      </Section>

      <Section title="제11조 (건강 데이터의 취급)">
        <p>
          Apple HealthKit에서 읽어온 러닝 기록은 콘텐츠 생성 목적으로만 사용합니다. Apple
          정책에 따라 <strong>건강 데이터를 광고·마케팅 목적으로 사용하지 않으며, 제3자에게
          제공하지 않습니다.</strong> 이용 기록(이벤트 로그)에도 건강 수치 원본값을 포함하지
          않습니다.
        </p>
      </Section>

      <Section title="제12조 (권익침해 구제 방법)">
        <p>정보주체는 개인정보 침해로 인한 구제를 받기 위하여 아래 기관에 분쟁 해결이나 상담 등을 신청할 수 있습니다.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>개인정보침해 신고센터 (한국인터넷진흥원): (국번없이) 118 / privacy.kisa.or.kr</li>
          <li>개인정보 분쟁조정위원회: (국번없이) 1833-6972 / kopico.go.kr</li>
          <li>대검찰청 사이버수사과: (국번없이) 1301 / spo.go.kr</li>
          <li>경찰청 사이버수사국: (국번없이) 182 / ecrm.police.go.kr</li>
        </ul>
      </Section>

      <Section title="제13조 (개인정보 처리방침의 변경)">
        <p>
          본 개인정보 처리방침의 내용이 추가, 삭제 및 수정되는 경우 시행 최소 7일 전에 본
          페이지를 통해 고지합니다. 특히 회원 가입(소셜 로그인), 서버 전송, 알림 기능 등이
          도입되는 정식 출시 시점에 본 방침이 개정됩니다.
        </p>
        <p><strong>시행일: 2026년 7월 29일</strong></p>
      </Section>
    </main>
  );
}
