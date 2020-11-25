import React from 'react';
import { NextPageContext } from 'next';
import { Router } from 'next/router';

import { $isLoggedIn } from '@iso/shared';

export const withPrivate = <T extends any>(
  Component: (props: T) => JSX.Element
) => {
  const isLoggedIn = $isLoggedIn.getState();
  // @ts-ignore
  const patchedComponent = (props: T) => <Component {...props} />;

  patchedComponent.getInitialProps = async (context: NextPageContext) => {
    if (!isLoggedIn) {
      if (context.res) {
        context.res.writeHead(302, {
          Location: '/login'
        });
        context.res.end();
      } else {
        // @ts-ignore
        Router.push('/login').then();
      }
    }

    return {};
  };

  return patchedComponent;
};
