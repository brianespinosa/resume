'use client';

import dynamic from 'next/dynamic';

const ResumeViewer = dynamic(
  () =>
    import('@/components/ResumeViewer').then((module_) => module_.ResumeViewer),
  { ssr: false },
);

export default function Page() {
  return <ResumeViewer />;
}
