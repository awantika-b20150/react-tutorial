import Button from './button';

type ButtonType = 'button';
export default function Practice1({name,styleb,type} : {name:string,styleb:string,type?:ButtonType})
{
    return(
        <Button
            handleClick={() => console.log(name)}
            styles={styleb}
            type={type}
            title={name}
            >
                {/* children */}
                   {name}
        </Button>

    );
}
