/* /components/button.tsx  */

type ButtonType = 'button' | 'submit' | 'reset';
interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
  styles: string;
  type?: ButtonType;
  title: string;
}

const Button = (props:Props) => {
  return (
      <button
      onClick={props?.handleClick}
      className={`${props.styles} px-3 py-2 rounded-lg font-medium border-2 border-transparent`}
      type={props?.type}
      title={props.title}
      >
          {props.children}
      </button>
  )
}

export default Button
