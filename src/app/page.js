import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p className="font-mono flex text-3xl text-lime-600 leading-10">Em Construção...</p>
      <div className="relative flex place-items-center">
        <Image
          className="relative"
          src="/logo.jpg"
          alt="ge Aldeia verde Logo"
          width={500}
          height={500}
          priority
        />
      </div>
    </main>
  )
}
