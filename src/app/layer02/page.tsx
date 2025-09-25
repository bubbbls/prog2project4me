import Link from 'next/link'

export default function Layer2Page() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#F1AB86] to-[#F7DBA7] text-white">
      <Link href="..">1st page</Link>
        (Second page yaaaas)
    </main>
  );
}
