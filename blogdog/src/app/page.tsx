import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Yo dog, you ever heard of a dog with a blog</h1>

      <Image
        src="/app/assets/bloog_dog_profile.jpeg"
        width={400}
        height={600}
        alt="Profile picture of blog dog"
      ></Image>
    </main>
  );
}
