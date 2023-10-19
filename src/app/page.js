import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-3 p-24">
      <h1>Nextauth js</h1>
      <Link href="/register">Register page</Link>
      <Link href="/login">Login page</Link>
    </main>
  );
}
