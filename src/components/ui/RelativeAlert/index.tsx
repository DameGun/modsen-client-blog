import cn from 'classnames';
import Image from 'next/image';

import errorIcon from '@/public/icons/error-icon.svg';
import successIcon from '@/public/icons/success-icon.svg';
import variables from '@/styles/abstracts/variables.module.scss';
import type { RelativeAlertProps } from '@/types/alert';
import { parseStylesVariableAsNumber } from '@/utils/styles';

import styles from './styles.module.scss';

export function RelativeAlert({
  minimize,
  isError,
  isSuccess,
  errorMessage,
  successMessage,
}: RelativeAlertProps) {
  return (
    <div
      className={cn(styles.relativeAlert, {
        [styles.isError]: isError,
        [styles.isSuccess]: isSuccess,
      })}
    >
      {isError && (
        <>
          <Image
            src={errorIcon}
            alt='Error Icon'
            width={parseStylesVariableAsNumber(variables.iconSize)}
            height={parseStylesVariableAsNumber(variables.iconSize)}
          />
          {!minimize && <h5>{errorMessage}</h5>}
        </>
      )}
      {isSuccess && (
        <>
          <Image
            src={successIcon}
            alt='Success Icon'
            width={parseStylesVariableAsNumber(variables.iconSize)}
            height={parseStylesVariableAsNumber(variables.iconSize)}
          />
          {!minimize && <h5>{successMessage}</h5>}
        </>
      )}
    </div>
  );
}
