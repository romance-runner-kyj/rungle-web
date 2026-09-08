import Link from "next/link";

/**
 * 페이지 맨 위의 한국어·영어 전환 링크. 영어 주소는 한국어 주소 앞에 /en을 붙인 꼴이라
 * path 하나만 받는다. 지금 보고 있는 판은 링크 없이 굵게 보여 준다.
 */
export function LangSwitch({ path, current }: { path: string; current: "ko" | "en" }) {
  const item = (lang: "ko" | "en", href: string, label: string) =>
    lang === current ? (
      <span lang={lang} className="font-semibold text-gray-800">
        {label}
      </span>
    ) : (
      <Link href={href} lang={lang} hrefLang={lang} className="underline">
        {label}
      </Link>
    );
  return (
    <nav aria-label="Language" className="flex justify-end gap-2 text-sm text-gray-500">
      {item("ko", path, "한국어")}
      <span aria-hidden="true">|</span>
      {item("en", `/en${path}`, "English")}
    </nav>
  );
}
