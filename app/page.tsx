import Chat from "@/components/chat";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white" >
      <h1 className="text-3xl font-bold">
        Zuper AI Chat
      </h1>
      <Chat />
    </main>
  )
}