import type { Metadata } from "next";
import { LangSwitch } from "@/app/lang-switch";

export const metadata: Metadata = {
  title: "개인정보 처리방침 | Rungle",
  description: "Rungle 개인정보 처리방침",
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

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-[15px]">
      <LangSwitch path="/privacy" current="ko" />
      <h1 className="text-3xl font-extrabold">개인정보 처리방침</h1>
      <p className="mt-4 leading-7 text-gray-800">
        Rungle 운영팀(이하 &ldquo;운영팀&rdquo;)은 「개인정보 보호법」
        제30조에 따라 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할
        수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.
      </p>
      <p className="mt-3 leading-7 text-gray-800">
        Rungle은 러닝 기록을 불러와 사진·영상에서 베스트컷을 골라주고 기록 오버레이·릴스를
        만들어 공유하는 iOS 앱입니다. 본 방침은 현재 제공 중인 버전을 기준으로 합니다.
        소셜 로그인으로 가입할 수 있고, 로그인 없이(게스트) 이용할 수도 있습니다.
        러닝 기록은 백업·복원을 위해 운영팀 서버(국내)에 저장되며, <strong>사진·영상은
        이용자 기기 밖으로 나가지 않습니다. GPS 경로는 서버에 저장하지 않습니다.</strong>{" "}
        서비스 개선을 위한 앱 이용 기록은 외부 분석 도구로, 광고 성과 측정을 위한 설치·실행
        기록은 외부 측정 도구로 전송됩니다(제5조). 광고 식별자(IDFA)는 이용자가 앱 추적을
        허용한 경우에만 씁니다(제10조).
      </p>

      {/* 중요 사항 요약 표시 (개인정보 처리방침 주요 내용) */}
      <div className="mt-8 rounded-lg border border-gray-300 bg-gray-50 p-5">
        <h2 className="font-bold">주요 개인정보 처리 표시(요약)</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li><strong>계정 정보:</strong> 소셜 로그인으로 가입할 때 로그인 제공자·제공자가 발급한 사용자 식별자·이메일을 수집(제1조). 닉네임은 서비스가 만들어 배정하며 수집하지 않습니다</li>
          <li><strong>처리 항목:</strong> 러닝 기록(HealthKit·기록 화면 캡처) — 기기에서 처리하고 측정값을 서버에 백업(GPS 경로 제외), 러닝 장소 지명 표시를 위해 경로 첫 좌표 1개를 Apple에 전송(제5조·제11조) / 사진·영상 — 이용자 기기 안에서만 처리·보관 (일부 콘텐츠 분석 시 외부 AI 이용 가능, 제5조) / 기기 정보·앱 이용 기록 — 서버 등록·분석 도구로 전송(제5조) / 광고 유입 정보(광고 식별자는 추적 허용 시에만) — 광고 성과 측정 도구로 전송(제5조)</li>
          <li><strong>처리 목적:</strong> 베스트컷 추천, 기록 오버레이·릴스 생성, 계정 로그인과 기록 백업·복원, 서비스 품질 개선, 광고 성과 측정(어떤 광고를 보고 설치했는지 확인)</li>
          <li><strong>보유 기간:</strong> 계정 정보와 서버 백업 기록은 계정 삭제를 요청하면 30일 유예 뒤 파기(제3조), 기기 내 정보는 앱 삭제 시 파기(익명 기기 식별자만 예외 — 기기에 남습니다, 제3조), 앱 이용 기록은 위탁 업체 보관 후 목적 달성 시 파기</li>
          <li><strong>제3자 제공:</strong> 원칙적으로 하지 않음. 광고를 집행하는 동안 설치·공유 완료 이벤트를 Meta에 제공할 수 있음(제4조, 현재는 제공하지 않음). 앱 이용 기록 분석·광고 성과 측정·좌표의 지명 변환 업무는 국외 업체에 위탁(제5조)</li>
          <li><strong>개인정보 보호책임자:</strong> 김동호 (admin@rungle.app)</li>
          <li><strong>문의:</strong> 운영팀 (admin@rungle.app)</li>
        </ul>
      </div>

      <Section title="제1조 (처리하는 개인정보의 항목 및 수집 방법)">
        <p>
          서비스는 소셜 로그인으로 가입하며, 운영팀은 자체 아이디·비밀번호를 만들지 않고
          받지도 않습니다. 서비스 제공을 위해 처리하는 정보는 다음과 같습니다. 사진·영상은
          이용자의 기기 안에서만 처리하고, 러닝 기록의 측정값은 백업을 위해 서버에 저장합니다.
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
                <td className="p-2 font-semibold">계정 정보</td>
                <td className="p-2">로그인 제공자 구분(구글·애플·카카오·네이버), 제공자가 발급한 사용자 식별자, 이메일. 애플의 &lsquo;나의 이메일 가리기&rsquo;를 쓰면 애플이 만든 전달용 주소가 수집됩니다. 이름·프로필 사진은 받지 않습니다</td>
                <td className="p-2">이용자가 소셜 로그인할 때 해당 제공자로부터 받음</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">닉네임</td>
                <td className="p-2">서비스가 형용사와 동물 이름을 조합해 만들어 주는 표시 이름. 이용자가 앱에서 바꿀 수 있습니다</td>
                <td className="p-2">수집하지 않고 서비스가 생성</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">기기 정보</td>
                <td className="p-2">익명 기기 식별자, 기기 모델, OS 버전, 앱 버전, 마지막 접속 시각</td>
                <td className="p-2">앱이 운영팀 서버에 기기를 등록할 때 자동 생성</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">러닝 기록</td>
                <td className="p-2">거리·시간·페이스·칼로리·심박수·케이던스·GPS 경로(러닝 장소 지명 포함) 등 러닝 워크아웃 데이터. 이 가운데 측정값(거리·시간·페이스·칼로리·심박수·케이던스·구간 기록)은 백업·복원을 위해 운영팀 서버에 저장됩니다. <strong>GPS 경로는 운영팀 서버로 보내지 않으며, 서버는 GPS 경로를 받더라도 거절합니다.</strong> 다만 러닝 장소의 지명을 보여주기 위해 경로의 첫 좌표 1개를 Apple 역지오코딩(좌표를 지명으로 바꾸는 서비스) 서버로 보냅니다(제5조·제11조).</td>
                <td className="p-2">이용자가 허용한 경우 Apple HealthKit에서 읽기. 지명은 경로 첫 좌표를 Apple 역지오코딩으로 변환해 생성</td>
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
                <td className="p-2">앱이 발급한 익명 기기 식별자(앱이 처음 켜질 때 만드는 무작위 값 — 기기에서 읽어온 고유 번호가 아닙니다), 기능 사용 이벤트, 오류 기록, 사용 경험 평가 응답(5점 척도), 러닝 기록에서 뽑은 파생값(거리 구간, 경로 보유 여부 등 — 거리·심박 같은 원본 수치는 제외)</td>
                <td className="p-2">서비스 이용 과정에서 자동 생성, 분석 도구로 전송(제5조)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">광고 유입 정보(자동 수집)</td>
                <td className="p-2">
                  광고 식별자(IDFA — <strong>이용자가 앱 추적을 허용한 경우에만</strong>, 제10조), 개발사 기기 식별자(IDFV), OS 버전, 기기 종류, 언어, 시간대, IP 주소, 화면 크기, 앱 설치·실행 이벤트, 공유 완료 이벤트(공유한 채널 이름), 위 익명 기기 식별자(측정 도구와 분석 도구의 기록을 잇는 별명), 유입 광고 정보(광고 채널·캠페인·광고 그룹·소재의 이름)
                </td>
                <td className="p-2">앱을 설치·실행할 때 자동 생성, 광고 성과 측정 도구로 전송(제5조). 유입 광고 정보는 측정 도구가 알려 주면 분석 도구에 함께 기록</td>
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
        <p>
          <strong>로그인도 선택입니다.</strong> 로그인하지 않아도(게스트) 서비스를 이용할 수
          있으며, 이때는 계정 정보를 수집하지 않고 기록이 익명 기기 식별자에만 연결됩니다.
          게스트 상태에서 서버에 백업된 기록은 나중에 로그인하면 그 계정으로 합쳐집니다.
        </p>
      </Section>

      <Section title="제2조 (개인정보의 처리 목적)">
        <ul className="list-disc space-y-1 pl-5">
          <li>러닝 기록 불러오기와 러닝 시간대 사진·영상 자동 수집</li>
          <li>베스트컷 추천(사진·영상 품질과 얼굴·구도를 기기 내에서 평가). <strong>얼굴은 인식·평가만 하며 생성·변형·보정하지 않습니다.</strong></li>
          <li>기록 오버레이·릴스·프레임 콘텐츠 생성과 편집</li>
          <li>계정 생성과 로그인 상태 유지, 기기를 바꾸거나 앱을 다시 설치했을 때의 기록 백업·복원</li>
          <li>공지·알림 전달(앱 안 알림함)</li>
          <li>서비스 품질 개선과 추천 기능 고도화를 위한 이용 기록 분석</li>
          <li>광고 성과 측정(어떤 광고를 보고 설치했는지 확인). <strong>광고 식별자는 이용자가 앱 추적을 허용한 경우에만 쓰며, 사진·위치·건강 기록은 광고 성과 측정에 쓰지 않습니다.</strong></li>
        </ul>
      </Section>

      <Section title="제3조 (개인정보의 처리 및 보유 기간)">
        <p>
          <strong>사진·영상은 이용자의 기기 안에만 저장</strong>되며, 운영팀이 서버에 보관하지
          않습니다. 계정 정보·기기 정보와 러닝 기록 백업은 운영팀 서버(국내)에 보관합니다.
          이용자가 앱을 삭제하면 앱이 기기에 저장한 정보가 함께 파기되며, 아래 익명 기기
          식별자 하나만 예외입니다. 서버에 있는 정보는 앱을 지워도 남으므로, 지우려면 계정
          삭제를 요청해 주세요(제7조).
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>계정 정보와 서버 백업 기록·알림은 계정 삭제를 요청하면 30일 유예 기간을
            거친 뒤 완전히 파기합니다.</strong> 유예 기간은 실수로 지운 계정을 되살리기 위한
            장치이며, 그 사이 다시 로그인하면 삭제가 취소됩니다.
          </li>
          <li>게스트 상태로 서버에 백업된 기록은 계정이 아니라 익명 기기 식별자에만 연결되어 있습니다. 계정 없이 이 기록의 삭제를 원하면 운영팀(admin@rungle.app)에 문의해 주세요.</li>
          <li>베스트컷 후보는 사진 라이브러리의 참조 정보만 사용하며, 이용자가 최종 선택한 사진·클립만 앱에 저장됩니다.</li>
          <li>이용 기록(이벤트 로그)·오류 기록·광고 유입 정보는 제5조의 위탁 업체 서버에 보관되며, 서비스 품질 개선과 광고 성과 측정이라는 목적을 달성하면 파기합니다. 앱을 삭제하면 그 뒤로는 새 기록이 쌓이지 않습니다.</li>
          <li>
            <strong>익명 기기 식별자는 앱을 삭제해도 기기에 남습니다.</strong> iOS 키체인(앱의
            비밀값을 담아두는 저장소)에 두기 때문이며, 같은 기기에 앱을 다시 설치하면 같은
            값을 이어 씁니다. 값이 기기 밖으로 복사되지 않게 저장해 두어 기기 백업이나 새 기기
            이전에는 따라가지 않습니다. 지금 버전에는 이 값을 앱에서 지우는 기능이 없으며,
            운영팀(admin@rungle.app)에 문의하면 위탁 업체에 쌓인 해당 값의 기록을 지워 드립니다.
          </li>
        </ul>
      </Section>

      <Section title="제4조 (개인정보의 제3자 제공)">
        <p>
          운영팀은 이용자의 개인정보를 <strong>원칙적으로 제3자에게 제공하지 않습니다.</strong>{" "}
          다만 이용자가 사전에 동의한 경우 또는 법령의 규정에 의한 경우에는 예외로 하며, 광고
          성과 측정을 위해 아래 제공이 일어날 수 있습니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="p-2 font-bold">제공받는 자</th>
                <th className="p-2 font-bold">제공 항목</th>
                <th className="p-2 font-bold">제공받는 자의 이용 목적</th>
                <th className="p-2 font-bold">보유 기간</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">
                  Meta Platforms, Inc.
                  <br />
                  <a className="underline" href="https://www.facebook.com/privacy/policy/">facebook.com/privacy/policy</a>
                </td>
                <td className="p-2">앱 설치 이벤트, 공유 완료 이벤트(공유한 채널 이름), 광고 식별자(IDFA — 이용자가 앱 추적을 허용한 경우에만)</td>
                <td className="p-2">Meta 광고를 보고 설치한 사람 수 집계와 광고 노출 최적화</td>
                <td className="p-2">Meta의 개인정보 처리방침에 따름</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          이 제공은 운영팀이 Meta에 광고를 집행하는 동안 제5조의 광고 성과 측정 도구(Airbridge)가
          서버에서 Meta로 이벤트를 전달하는 방식으로 이루어집니다. 앱이 Meta로 직접 보내는
          정보는 없습니다. <strong>현재는 이 전달을 켜지 않았으며,</strong> 켜는 시점에 본 방침의
          시행일을 갱신해 알립니다. 이용자는 iOS 설정 &gt; 개인정보 보호 및 보안 &gt; 추적에서
          앱 추적을 끄면 광고 식별자 제공을 언제든 막을 수 있습니다(제7조).
        </p>
      </Section>

      <Section title="제5조 (개인정보 처리의 위탁 및 국외 이전)">
        <p>
          운영팀은 서버 운영 업무를 아래 업체에 위탁하고 있습니다. 서버는 국내(대한민국)에
          있어 국외로 이전되지 않습니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="p-2 font-bold">수탁 업체</th>
                <th className="p-2 font-bold">위탁 업무</th>
                <th className="p-2 font-bold">보관 장소·기간</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">
                  Amazon Web Services, Inc.
                  <br />
                  <a className="underline" href="https://aws.amazon.com/privacy">aws.amazon.com/privacy</a>
                </td>
                <td className="p-2">서버 운영 — 계정 정보·기기 정보·러닝 기록 백업·알림 보관</td>
                <td className="p-2">대한민국(서울 리전) / 계정 삭제 또는 위탁 종료 시까지</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          소셜 로그인 제공자(구글·애플·카카오·네이버)는 수탁 업체가 아니라 이용자가 직접
          로그인하는 상대방입니다. 각 제공자의 개인정보 처리에는 해당 사업자의 처리방침이
          적용됩니다.
        </p>
        <p>
          이와 별개로, 운영팀은 서비스 품질 개선과 오류 대응을 위한 앱 이용 기록 처리 업무,
          광고 성과 측정 업무, 러닝 장소 지명 표시를 위한 좌표의 지명 변환 업무를 다음 업체에
          위탁하고 있습니다. 네 업체의 서버가 국외에 있어 아래 항목이 국외로 이전됩니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="p-2 font-bold">이전받는 자</th>
                <th className="p-2 font-bold">국가·시기·방법</th>
                <th className="p-2 font-bold">이전 항목</th>
                <th className="p-2 font-bold">이용 목적 및 보유 기간</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">
                  Amplitude, Inc.
                  <br />
                  <a className="underline" href="https://amplitude.com/privacy">amplitude.com/privacy</a>
                </td>
                <td className="p-2">미국 / 앱 사용 중 수시 / 네트워크(HTTPS 암호화) 전송</td>
                <td className="p-2">익명 기기 식별자, 기능 사용 이벤트, 사용 경험 평가 응답, 러닝 기록 파생값(거리 구간, 경로 보유 여부, 지명 보유 여부), 유입 광고 정보(광고 채널·캠페인·광고 그룹·소재의 이름)</td>
                <td className="p-2">이용 행동 분석과 서비스 품질 개선, 광고별 유입 성과 비교 / 위탁 종료 또는 목적 달성 시까지</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">
                  주식회사 에이비일팔공
                  <br />
                  (Airbridge)
                  <br />
                  <a className="underline" href="https://www.airbridge.io/ko/privacy-policy">airbridge.io/ko/privacy-policy</a>
                </td>
                <td className="p-2">일본(AWS 도쿄 리전) / 앱 설치·실행 시와 공유 완료 시 / 네트워크(HTTPS 암호화) 전송</td>
                <td className="p-2">광고 식별자(IDFA — 앱 추적을 허용한 경우에만), 개발사 기기 식별자(IDFV), OS 버전, 기기 종류, 언어, 시간대, IP 주소, 화면 크기, 앱 설치·실행 이벤트, 공유 완료 이벤트(공유한 채널 이름), 익명 기기 식별자(별명)</td>
                <td className="p-2">어떤 광고를 보고 설치했는지 확인하는 광고 성과 측정 / 위탁 종료 또는 목적 달성 시까지</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">
                  Google LLC
                  <br />
                  (Firebase Crashlytics)
                  <br />
                  <a className="underline" href="https://policies.google.com/privacy">policies.google.com/privacy</a>
                </td>
                <td className="p-2">미국 / 앱이 갑자기 꺼질 때 / 네트워크(HTTPS 암호화) 전송</td>
                <td className="p-2">익명 기기 식별자, 오류 기록(크래시 로그), 기기·OS 정보</td>
                <td className="p-2">오류 원인 파악과 안정성 개선 / 위탁 종료 또는 목적 달성 시까지</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 font-semibold">
                  Apple Inc.
                  <br />
                  <a className="underline" href="https://www.apple.com/legal/privacy/kr/">apple.com/legal/privacy/kr</a>
                </td>
                <td className="p-2">미국 / 이용자가 오버레이 편집을 열어 러닝 장소 지명을 만들 때 / 네트워크(HTTPS 암호화) 전송</td>
                <td className="p-2">러닝 경로의 첫 좌표 1개(위도·경도)</td>
                <td className="p-2">좌표를 지명으로 바꾸는 변환(역지오코딩) / 변환 처리 시까지. 받은 지명은 이용자 기기 안에만 저장됩니다</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          이전 항목에는 <strong>이용자를 식별할 수 있는 계정 정보, 사진·영상 원본, 러닝 기록의
          원본 수치가 들어가지 않습니다.</strong> 지명 변환을 위해 Apple로 보내는 경로 첫 좌표
          1개가 유일한 예외이며, 좌표 밖의 러닝 기록 원본은 어디에도 전송하지 않습니다.
          국외 이전을 원하지 않으면 앱을 삭제하면 되고, 삭제한 뒤로는 새 기록이 전송되지
          않습니다. 광고 식별자만 막으려면 iOS 설정 &gt; 개인정보 보호 및 보안 &gt; 추적에서 앱
          추적을 끄면 됩니다(제7조).
        </p>
        <p>
          이와 별개로, 일부 콘텐츠 분석·편집 기능의 보조를 위해 외부 인공지능(AI) 서비스
          API를 이용할 수 있습니다. 이 경우 해당 기능 처리에 필요한 최소한의 데이터만
          전송되며, <strong>건강 데이터(러닝 기록 원본값)와 이용자를 식별할 수 있는 정보는
          전송하지 않습니다.</strong> 이용 범위가 확정·변경되는 경우 본 방침을 통해
          공개합니다.
        </p>
      </Section>

      <Section title="제6조 (개인정보의 파기 절차 및 방법)">
        <ul className="list-disc space-y-1 pl-5">
          <li>앱 내 저장 정보는 이용자가 앱을 삭제하면 iOS 시스템에 의해 즉시 파기됩니다. 익명 기기 식별자는 앱을 삭제해도 기기에 남습니다(제3조).</li>
          <li>편집 중인 초안·선택한 사진 등은 앱 안에서 해당 항목을 삭제하여 개별적으로 파기할 수 있습니다.</li>
          <li>서버에 보관된 계정 정보·러닝 기록 백업·알림은 계정 삭제를 요청한 날부터 30일이 지나면 자동 절차로 삭제하며, 되살릴 수 없는 방법으로 파기합니다.</li>
        </ul>
      </Section>

      <Section title="제7조 (정보주체와 법정대리인의 권리·의무 및 행사 방법)">
        <p>
          이용자 및 법정대리인은 언제든지 개인정보의 열람, 정정, 삭제, 처리정지를 요구할 수
          있습니다. 러닝 기록·사진·영상은 이용자 기기 안에 있어 다음 방법으로 직접 행사할 수
          있으며, 앱 이용 기록을 포함한 그 밖의 요구는 운영팀(admin@rungle.app)에 문의하면 지체
          없이 조치합니다.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>러닝 기록 접근 철회:</strong> iOS 건강 앱 &gt; 프로필 &gt; 앱 &gt; Rungle에서 읽기 권한 해제</li>
          <li><strong>사진 접근 철회:</strong> iOS 설정 &gt; Rungle &gt; 사진에서 접근 범위 변경 또는 해제</li>
          <li><strong>앱 추적(광고 식별자) 허용 철회:</strong> iOS 설정 &gt; 개인정보 보호 및 보안 &gt; 추적에서 Rungle을 끄거나, iOS 설정 &gt; Rungle &gt; 추적 허용을 끕니다. 끄면 그 뒤로는 광고 식별자를 쓰지 않으며, 서비스 이용에는 아무 제한이 없습니다</li>
          <li><strong>계정 삭제:</strong> 앱의 내 정보 화면에서 언제든 요청할 수 있습니다. 요청한 날부터 30일이 지나면 서버에 있는 계정 정보와 러닝 기록 백업이 완전히 파기되며, 그 전에 다시 로그인하면 삭제가 취소됩니다</li>
          <li><strong>전체 삭제:</strong> 앱 삭제 시 앱이 저장한 정보가 파기됩니다. 서버에 있는 정보는 앱을 지워도 남으므로 위의 계정 삭제를 함께 요청해 주세요. 익명 기기 식별자만 기기에 남으며, 지우려면 운영팀에 문의해 주세요(제3조)</li>
        </ul>
      </Section>

      <Section title="제8조 (만 14세 미만 아동의 개인정보 처리)">
        <p>
          서비스는 만 14세 미만 아동을 대상으로 하지 않으며, 운영팀은 만 14세 미만 아동의
          개인정보를 수집하지 않습니다.{" "}
          <strong>
            만 14세 미만 아동이 서비스를 이용하려는 경우 반드시 법정대리인(부모 등)의 동의를
            받아야 하며,
          </strong>{" "}
          법정대리인의 동의 없이 처리된 사실이 확인된 아동의 개인정보는 지체 없이 파기합니다.
        </p>
      </Section>

      <Section title="제9조 (개인정보의 안전성 확보 조치)">
        <p>운영팀은 「개인정보 보호법」 제29조에 따라 다음과 같은 안전성 확보 조치를 취하고 있습니다.</p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>기기 내 처리:</strong> 사진 분석·얼굴 평가·문자인식을 포함한 개인정보 처리를 이용자 기기 안에서 수행하고, iOS 앱 샌드박스로 다른 앱의 접근이 차단됩니다.</li>
          <li><strong>관리적 조치:</strong> 개인정보 취급 인원 최소화, 내부 취급 원칙 수립</li>
          <li><strong>기술적 조치:</strong> 외부로 전송하는 구간에 TLS 암호화 적용, 서버는 외부에서 직접 접근할 수 없는 구간에 두고 접속 권한을 최소 인원으로 제한, 서버 접속 정보는 별도 비밀 관리 서비스에 보관</li>
          <li><strong>본인 자료 접근 제한:</strong> 서버에 보관된 러닝 기록은 로그인한 본인의 것만 조회·수정할 수 있도록 요청마다 소유 여부를 확인합니다.</li>
        </ul>
      </Section>

      <Section title="제10조 (개인정보 자동 수집 장치의 설치·운영 및 거부)">
        <p>
          운영팀은 쿠키를 사용하지 않습니다. 서비스 품질 개선을 위한 이용 기록은 앱이 발급한
          익명 기기 식별자 기준으로 자동 생성되어 제5조의 위탁 업체로 전송됩니다.
        </p>
        <p>
          <strong>광고 식별자(IDFA)는 이용자가 앱 추적 투명성(ATT, iOS의 앱 추적 허용 팝업)에서
          허용한 경우에만 수집합니다.</strong> 앱은 처음 실행할 때 어디에 쓰는지 설명한 뒤
          시스템 팝업으로 허용 여부를 묻고, 허용하지 않아도 모든 기능을 똑같이 쓸 수 있습니다.
          허용한 뒤에도 iOS 설정에서 언제든 끌 수 있습니다(제7조). 허용하지 않은 경우 광고
          성과 측정 도구는 광고 식별자 없이 설치·실행 여부만 받습니다.
        </p>
      </Section>

      <Section title="제11조 (건강 데이터의 취급)">
        <p>
          Apple HealthKit에서 읽어온 러닝 기록은 콘텐츠 생성과 이용자 본인의 기록 백업·복원
          목적으로만 사용합니다. 측정값(거리·시간·페이스·심박수·케이던스 등)은 백업을 위해
          운영팀 서버(국내)에 저장되며, <strong>GPS 경로는 운영팀 서버로 전송하지 않고 서버도
          이를 받지 않도록 만들어져 있습니다.</strong> Apple 정책에 따라 <strong>건강 데이터를
          광고·마케팅 목적으로 사용하지 않고, 제3자에게 판매하거나 제공하지 않습니다.</strong>{" "}
          제5조의 광고 성과 측정 도구와 제4조의 Meta로는 건강 데이터도, 건강 데이터에서 뽑은
          파생값도 보내지 않습니다.
        </p>
        <p>
          <strong>러닝 장소 지명</strong>은 이용자가 오버레이 편집을 열 때 러닝 경로의 첫 좌표
          1개를 Apple 역지오코딩(좌표를 지명으로 바꾸는 서비스) 서버로 보내 만듭니다(제5조).
          좌표가 기기 밖으로 나가는 것은 이때뿐이며, <strong>받은 지명은 이용자 기기 안에만
          저장하고 운영팀 서버에 올리지 않습니다.</strong> 분석 이벤트에는 지명 자체가 아니라
          지명이 있는지 여부(예·아니오)만 남습니다.
        </p>
        <p>
          다만 서비스 개선 분석을 위해 <strong>러닝 기록에서 뽑은 파생값</strong>은 제5조의 위탁
          업체로 전송됩니다. 전송하는 파생값은 다음 세 가지이고, 원본 수치는 복원할 수 없습니다.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li><strong>거리 구간:</strong> 5km 미만 / 5km 이상 10km 미만 / 10km 이상 가운데 하나</li>
          <li><strong>경로 보유 여부:</strong> 해당 러닝에 GPS 경로가 있는지 여부(예·아니오)</li>
          <li><strong>지명 보유 여부:</strong> 해당 러닝에 지명이 만들어졌는지 여부(예·아니오)</li>
        </ul>
        <p>
          이 파생값은 <strong>어떤 거리대의 러닝에서 콘텐츠가 잘 만들어지는지 파악하는 분석
          목적으로만 쓰며,</strong> 광고·마케팅에 쓰거나 다른 곳에 판매·공유하지 않습니다.
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
          페이지를 통해 고지합니다. 다만 새로 처리하는 항목이 이용자가 직접 선택한 기능에서만
          생기고 기존 이용 방식에는 변화가 없는 경우에는 공고와 동시에 시행할 수 있습니다.
          특히 위치정보(GPS 경로)의 서버 저장, 사진·영상의 외부 AI
          분석 경유, 서버 푸시 알림(운영팀 서버에서 보내는 알림 — 현재 제공 중인 러닝 감지
          알림은 기기 안에서만 만들어지는 로컬 알림입니다), 사진·영상의 서버 업로드가
          도입되는 시점에 본 방침이 개정됩니다.
        </p>
        <p className="text-gray-600">
          이번 개정으로 광고 성과 측정이 반영되었습니다. 개정 전 방침(2026년 9월 2일
          시행)에서 달라진 부분은 광고 유입 정보 항목 추가(제1조), 광고 성과 측정 목적
          추가(제2조), Meta에 대한 조건부 제3자 제공(제4조), 광고 성과 측정 도구(Airbridge)의
          일본 국외 이전(제5조), 앱 추적 허용 철회 방법(제7조), 광고 식별자 수집 조건(제10조)입니다.
        </p>
        <p className="text-gray-600">
          이번 개정은 공고와 동시에 시행합니다. 새로 추가된 처리(광고 성과 측정)는 이 방침을
          공개한 뒤 배포되는 앱 버전(1.1.1)을 설치한 때부터 시작되고, 그 전 버전에서는
          일어나지 않습니다. 미리 알릴 기존 이용자가 없어 사전 고지 기간을 두지 않았습니다.
        </p>
        <p><strong>공고일 및 시행일: 2026년 9월 8일</strong></p>
      </Section>
    </main>
  );
}
