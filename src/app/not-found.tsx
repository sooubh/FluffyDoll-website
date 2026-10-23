import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold text-stone-900 mb-2">Page Not Found</h1>
      <p className="text-stone-600 text-sm mb-6">The requested page does not exist.</p>
      <Link 
        href="/" 
        className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors"
      >
        Return to Privacy Policy
      </Link>
    </div>
  );
}
