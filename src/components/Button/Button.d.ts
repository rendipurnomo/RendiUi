declare type ButtonProps = {
  children?: string;
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'disabled';
};
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
// Context from Function d:/practice/rwid/RendiUi/src/components/Button/index.jsx:Button
// const Button = (props) => {
//   const { children='button', variant='contained',color='primary'} = props;
//}