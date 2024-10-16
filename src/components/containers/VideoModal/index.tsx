import { createPortal } from 'react-dom';

import cn from 'classnames';
import Image from 'next/image';

import closeIcon from '@/public/icons/close-icon.svg';
import variables from '@/styles/abstracts/variables.module.scss';
import { parseStylesVariableAsNumber } from '@/utils/styles';

import styles from './styles.module.scss';

type VideoModalProps = {
  onClose: VoidFunction;
};

export default function VideoModal({ onClose }: VideoModalProps) {
  return createPortal(
    <div className={cn(styles.videoModal, { preventScroll: true })}>
      <div className={styles.videoContainer}>
        <video width='80%' controls>
          <source src='/video/stock-video.mp4' type='video/mp4' />
        </video>
        <span className={styles.videoOverlay} onClick={onClose} />
      </div>
      <Image
        className={styles.videoCloseButton}
        src={closeIcon}
        width={parseStylesVariableAsNumber(variables.imageSizeLg)}
        height={parseStylesVariableAsNumber(variables.imageSizeLg)}
        alt='Close Video Modal'
        onClick={onClose}
      />
    </div>,
    document.body
  );
}
