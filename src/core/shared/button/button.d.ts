import { ButtonProps } from 'antd';

interface ButtonStylesProps {
  size: number;
}
  interface IButtonProps extends ButtonProps {
  type:'primary' | 'secondary',
}
  