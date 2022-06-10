import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from '@/helpers/classNames';

const convertBreadcrumb = (string) => {
  return string
    .split(/[?#]/)[0]
    .replace(/-/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
};

const Breadcrumbs = ({ option }) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  const checkLast = (i) => {
    if (i === breadcrumbs.length - 1) return true;
    return false;
  };

  return (
    <nav aria-label="breadcrumbs">
      <ol className={'breadcrumb font-medium'}>
        {/* <li>
          <a className="text-gray-400" href="/">
            HOME
          </a>
        </li> */}
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <>
              {i > 0 ? <div>{'/'}</div> : null}
              {checkLast(i) ? (
                <p className="text-gray-700">
                  {convertBreadcrumb(breadcrumb.breadcrumb)}{' '}
                  {option && `- ${option}`}
                </p>
              ) : (
                <li key={breadcrumb.href}>
                  <Link href={breadcrumb.href}>
                    <a className="text-gray-400">
                      {convertBreadcrumb(breadcrumb.breadcrumb)}
                    </a>
                  </Link>
                </li>
              )}
              {/* check last crumb */}
            </>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
