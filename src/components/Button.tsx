import { FC, ReactNode } from 'react';

type Button = {
    children: ReactNode;
    disabled?: boolean;
    onClick?: (e: any) => void;
};

const Button: FC<Button> = ({
    children,
    disabled = false,
    onClick
}) => {

    const handleSubmit = (e: any) => {
        if (onClick && !disabled) {
            onClick(e);
        }
    };

    return (
        <button onClick={handleSubmit}>
            {children}
        </button>
    );
};

export default Button;