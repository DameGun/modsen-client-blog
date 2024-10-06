type RelativeAlertStatusProps = {
  isError: boolean;
  isSuccess: boolean;
};

type RelativeAlertTextProps = {
  errorMessage: string;
  successMessage: string;
};

type RelativeAlertMinimizedProps = {
  minimize: true;
} & RelativeAlertStatusProps &
  Partial<RelativeAlertTextProps>;

type RelativeAlertBaseProps = {
  minimize?: false;
} & RelativeAlertStatusProps &
  RelativeAlertTextProps;

type RelativeAlertProps = RelativeAlertBaseProps | RelativeAlertMinimizedProps;

export type { RelativeAlertProps };
