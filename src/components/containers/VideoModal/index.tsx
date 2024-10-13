import { createPortal } from 'react-dom';

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
    <div className={styles.videoModal}>
      <span className={styles.videoOverlay} onClick={onClose} />
      <Image
        className={styles.videoCloseButton}
        src={closeIcon}
        width={parseStylesVariableAsNumber(variables.imageSizeLg)}
        height={parseStylesVariableAsNumber(variables.imageSizeLg)}
        alt='Close Video Modal'
        onClick={onClose}
      />
      <div className={styles.videoContainer}>
        <video width='80%' controls preload='none'>
          <source src='./video/stock-video.mp4' type='video/mp4' />
        </video>
      </div>
    </div>,
    document.body
  );
}
