'use client'

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-8 py-16 pb-40 min-h-screen">
      
      <h2 className="text-xl font-normal tracking-tight">
        q14u
      </h2>

      <header className="mb-16 mt-8">
        <nav className="flex gap-6">
          <a className="text-sm transition-opacity duration-200 opacity-100 hover:opacity-50" href="/">About</a>
          <a href="/license">License</a>
        </nav>
      </header>

      <div>
        <p className="leading-relaxed mt-4">
          I am q14u.
        </p>

        <p className="leading-relaxed mt-4">
          Check my{" "}
          <a
            className="underline underline-offset-4 hover:opacity-60 transition"
            href="/projects"
          >
            projects
          </a>.
        </p>
      </div>

      {/* Projectsカード */}
      <section className="mt-16 grid gap-6">
        <div className="p-6 border rounded-2xl hover:shadow-lg transition">
          <h3 className="text-lg font-medium">Magnet Festival 2026 Executive Committee</h3>
          <p className="text-sm opacity-60 mt-2">
            Online PMO
          </p>
        </div>

        <div className="p-6 border rounded-2xl hover:shadow-lg transition">
          <h3 className="text-lg font-medium">Knowledge Base Executive Committee</h3>
          <p className="text-sm opacity-60 mt-2">
            Gemini Team
          </p>
        </div>
      </section>

      {/* フッター */}
      <footer className="mt-24 text-sm text-gray-500 dark:text-gray-400">
        <p>Copyright 2026 q14u</p>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com/q14uy20" target="_blank" className="hover:opacity-60 transition">GitHub</a>
        </div>
      </footer>

    </main>
  )
}