export type Folder = { id: string; name: string; count: number };

export type LinkItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  folderId: string;
  createdAt: string;
};

export const FOLDERS: Folder[] = [
  { id: "dev", name: "개발", count: 4 },
  { id: "design", name: "디자인", count: 3 },
  { id: "news", name: "뉴스", count: 2 },
  { id: "read-later", name: "나중에 읽기", count: 3 },
];

export const LINKS: LinkItem[] = [
  { id: "1", title: "Next.js 공식 문서", description: "React 프레임워크 Next.js의 공식 문서입니다.", url: "https://nextjs.org/docs", folderId: "dev", createdAt: "2026-10-01" },
  { id: "2", title: "Tailwind CSS", description: "유틸리티 우선 CSS 프레임워크.", url: "https://tailwindcss.com", folderId: "dev", createdAt: "2026-10-02" },
  { id: "3", title: "MDN Web Docs", description: "웹 개발자를 위한 리소스.", url: "https://developer.mozilla.org", folderId: "dev", createdAt: "2026-10-03" },
  { id: "4", title: "TypeScript Handbook", description: "TypeScript 공식 핸드북.", url: "https://www.typescriptlang.org/docs", folderId: "dev", createdAt: "2026-10-04" },
  { id: "5", title: "Figma", description: "협업 디자인 도구.", url: "https://figma.com", folderId: "design", createdAt: "2026-10-05" },
  { id: "6", title: "Dribbble", description: "디자이너들의 포트폴리오 모음.", url: "https://dribbble.com", folderId: "design", createdAt: "2026-10-06" },
  { id: "7", title: "Refactoring UI", description: "개발자를 위한 디자인 팁.", url: "https://refactoringui.com", folderId: "design", createdAt: "2026-10-07" },
  { id: "8", title: "GeekNews", description: "개발/기술/스타트업 뉴스 서비스.", url: "https://news.hada.io", folderId: "news", createdAt: "2026-10-08" },
  { id: "9", title: "Hacker News", description: "Y Combinator의 기술 뉴스.", url: "https://news.ycombinator.com", folderId: "news", createdAt: "2026-10-09" },
  { id: "10", title: "React 블로그", description: "React 팀의 공식 블로그.", url: "https://react.dev/blog", folderId: "read-later", createdAt: "2026-10-09" },
  { id: "11", title: "web.dev", description: "웹 플랫폼 성능과 모범 사례.", url: "https://web.dev", folderId: "read-later", createdAt: "2026-10-10" },
  { id: "12", title: "CSS-Tricks", description: "CSS 팁과 트릭 모음.", url: "https://css-tricks.com", folderId: "read-later", createdAt: "2026-10-10" },
];
