'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-white flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Something went wrong</h2>
        <button
          onClick={() => reset()}
          className="mt-4 px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold cursor-pointer"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
