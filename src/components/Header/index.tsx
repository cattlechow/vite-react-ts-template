import React, { useEffect } from 'react';
import './index.scss';
import logoSrc from '@assets/imgs/vite.png';
import { ReactComponent as ReactLogo } from '@assets/icons/logo.svg';
import { version } from '../../../package.json';

export function Header() {
  useEffect(() => {
    const img = document.getElementById('logo') as HTMLImageElement;
    img.src = logoSrc;
  }, []);
  return (
    <div className="header">
      {version}
      <img id="logo" alt="logo" />
      <ReactLogo />
    </div>
  );
}
