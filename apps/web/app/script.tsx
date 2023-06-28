'use client';

import React from 'react';

import Script from 'next/script';

interface LoadScriptProps {
  src: string;
  strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload';
  onLoad?: () => void;
}

export const LoadScriptComponent: React.FC<LoadScriptProps> = ({
  src,
  strategy = 'lazyOnload',
  onLoad = () => {},
}) => {
  return <Script src={src} strategy={strategy} onLoad={onLoad} />;
};
