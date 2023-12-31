
declare type ButtonProps = {
  children?: string;
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'disabled';
}
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
