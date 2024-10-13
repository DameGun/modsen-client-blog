'use client';

import { useState, useTransition } from 'react';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';

const VideoComponent = dynamic(() => import('../VideoModal'));

type VideoButtonProps = {
  handleNavClose: VoidFunction;
};

export function VideoButton({ handleNavClose }: VideoButtonProps) {
  const t = useTranslations('Header');
  const [, startTransition] = useTransition();
  const [load, setLoad] = useState(false);

  const handleShowVideo = () => {
    handleNavClose();

    startTransition(() => {
      setLoad(true);
    });
  };

  const handleClose = () => {
    setLoad(false);
  };

  return (
    <>
      <Button variant='secondary' onClick={handleShowVideo}>
        {t('videoButton')}
      </Button>
      {load && <VideoComponent onClose={handleClose} />}
    </>
  );
}
