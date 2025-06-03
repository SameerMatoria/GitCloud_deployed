import { Suspense } from 'react';
import RepoClient from '@/components/RepoClient';

export default function RepoPage() {
  return (
    <Suspense fallback={<div className="p-6 text-white">Loading repo...</div>}>
      <RepoClient />
    </Suspense>
  );
}
