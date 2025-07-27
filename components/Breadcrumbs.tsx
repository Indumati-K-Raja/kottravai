import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs = () => {
  const router = useRouter();
  const pathnames = router.pathname.split('/').filter((x) => x);

  const getBreadcrumbLabel = (path: string, index: number) => {
    const pathMap: { [key: string]: string } = {
      'shop': 'Shop',
      'creators': 'Creators',
      'creator': 'Creator Profile',
      'hubs': 'Hubs',
      'hub': 'Hub Details',
      'mentorship': 'Mentorship',
      'instructor': 'Instructor Profile',
      'story': 'Our Story',
      'contact': 'Contact',
      'about': 'About',
      'products': 'Products',
      'timeline': 'Timeline'
    };

    // For dynamic routes like /creator/123, use the mapped name
    if (index > 0 && pathnames[index - 1] in pathMap) {
      return pathMap[pathnames[index - 1]];
    }

    return pathMap[path] || path.charAt(0).toUpperCase() + path.slice(1);
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
    ...pathnames.map((path, index) => ({
      label: getBreadcrumbLabel(path, index),
      path: `/${pathnames.slice(0, index + 1).join('/')}`
    }))
  ];

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 py-3">
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={breadcrumb.path}>
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-900 font-medium text-sm">
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  href={breadcrumb.path}
                  className="text-gray-600 hover:text-purple-600 text-sm transition-colors flex items-center"
                >
                  {index === 0 && <Home className="h-4 w-4 mr-1" />}
                  {breadcrumb.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;