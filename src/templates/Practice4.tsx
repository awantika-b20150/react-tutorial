import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function Practice4() {
    type FormData = {
        postalCode: number;
    };
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = handleSubmit(data => {console.log(data)});
  
  return (
    <form onSubmit={onSubmit}>
      <input type="number" 
        {...register("postalCode", {required : "必須項目です", 
            minLength:{
            value:7,
            message: "7桁の数字を入力してください"
            }, 
            maxLength: {
            value:7,
            message: "7桁の数字を入力してください"
            }
            } )}
      >郵便番号</input>
      <ErrorMessage errors={errors} name="subject" 
                render={({message}) => (
          <span className="errorMessage" >{message}</span>
        )}
     />

      
      <input type="submit" />
    </form>
  );
}
