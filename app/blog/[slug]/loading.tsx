export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-12 bg-gradient-to-br from-navy-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-24 h-8 bg-gray-200 rounded animate-pulse mb-6" />
          <div className="w-32 h-6 bg-gray-200 rounded-full animate-pulse mb-4" />
          <div className="w-full max-w-2xl h-12 bg-gray-200 rounded-lg animate-pulse mb-4" />
          <div className="flex gap-4">
            <div className="w-28 h-4 bg-gray-200 rounded animate-pulse" />
            <div className="w-28 h-4 bg-gray-200 rounded animate-pulse" />
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 max-w-3xl py-12 space-y-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-full h-4 bg-gray-200 rounded animate-pulse"
            style={{ width: `${85 + Math.random() * 15}%` }}
          />
        ))}
        <div className="h-8" />
        {[...Array(6)].map((_, i) => (
          <div
            key={`b-${i}`}
            className="w-full h-4 bg-gray-200 rounded animate-pulse"
            style={{ width: `${80 + Math.random() * 20}%` }}
          />
        ))}
      </div>
    </div>
  )
}
