type User = {
    name: string;
};
export interface HeaderProps {
    user?: User;
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
    className?: string;
}
export declare const Header: ({ user, onLogin, onLogout, onCreateAccount, className }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
