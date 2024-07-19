import { useCustomButtonstyle } from './button.style';
import { IButtonProps } from './button';
const ButtonComponent = ({type:variant = 'primary', children, className, ...props}:IButtonProps) => {
  const classes = useCustomButtonstyle();
    return (
    <button
      {...props}
      className={`${className}  ${variant === 'primary' ? classes.primary : classes.outline} ${classes.button}` }
    >
      <span className={classes.buttonContent}>
        {children}
      </span>
    </button>
  );
};

export default ButtonComponent;
