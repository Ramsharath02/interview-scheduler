import React, { ReactNode } from 'react';
import { Calendar, Mail, Phone } from 'lucide-react';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-indigo-600 mr-2" />
            <h1 className="text-xl font-semibold text-gray-900">Interview Scheduler</h1>
          </div>
          <nav className="flex space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
>
  Home
</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Calendar className="h-6 w-6 text-indigo-600 mr-2" />
              <span className="text-gray-600 font-medium">Interview Scheduler</span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center text-gray-500">
                <Mail className="h-5 w-5 mr-2" />
                <span>support@scheduler.com</span>
              </div>
              <div className="flex items-center text-gray-500">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-100 pt-6">
            <p className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} Interview Scheduler. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;