export default function FAQLoading() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header Skeleton */}
      <section className="py-16 bg-gradient-to-br from-navy-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-48 h-6 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
            <div className="w-80 h-12 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse"></div>
            <div className="w-full max-w-2xl h-6 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* FAQ Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="w-3/4 h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
                <div className="w-full h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
