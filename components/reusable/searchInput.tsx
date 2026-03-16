import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    for?: string;
}
export const SearchInput = ({ ...props }: InputProps) => {
    return (
        <input
            {...props}
            className={cn("border-b border-gray-300 outline-0", props.className)}
        >

        </input>

    );
}
export default SearchInput;