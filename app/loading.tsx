export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-navy-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-navy-900 mb-2">Loading...</h2>
        <p className="text-gray-600">Please wait while we load the content</p>
      </div>
    </div>
  )
}
