import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-light text-gray-400 mb-2 tracking-tight">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-normal text-gray-800 mb-4 tracking-tight">
            Page not found
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
          <button
            onClick={handleGoHome}
            className="inline-flex items-center px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors duration-200 min-w-[140px] justify-center"
          >
            <Home size={16} className="mr-2" />
            Go to homepage
          </button>
        </div>

        {/* Additional Help Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-sm text-gray-500 space-y-2">
            <p>Try these suggestions:</p>
            <ul className="text-left max-w-md mx-auto space-y-1">
              <li>• Check the URL for typos</li>
              <li>• Go back to the previous page</li>
              <li>• Visit our homepage</li>
              <li>• Use the search function</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            Error 404 - Page Not Found
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;