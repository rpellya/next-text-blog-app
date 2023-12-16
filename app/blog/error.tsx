'use client';

export default function ErrorWrapper({ error }: { error: Error }) {
  return <div>Loop!!! {error.message}</div>;
}
