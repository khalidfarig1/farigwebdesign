export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header Skeleton */}
      <section className="py-16 bg-gradient-to-br from-navy-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-32 h-6 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
            <div className="w-96 h-12 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse"></div>
            <div className="w-full max-w-2xl h-6 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Blog Posts Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="flex space-x-4 mb-3">
                    <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="w-full h-6 bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="w-full h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="w-full h-10 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
