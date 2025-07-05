export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent border-t-purple-600 rounded-full animate-spin animate-reverse"></div>
      </div>
    </div>
  )
}
