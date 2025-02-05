import { Button } from '../button/button.tsx';
import { cn } from '@utils/utils';
import cryptonite from '../assets/cryptonite.png';

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

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  className
}: HeaderProps) => (
  <header
    className={cn(
      'flex justify-between items-center px-5 py-[15px] border-b-[rgba(0,0,0,0.1)] border-b border-solid',
      className
    )}>
    <div className="flex flex-row items-center">
      <img
        src={cryptonite}
        className="w-10 h-10 inline-block align-top"
        alt="Cryptonite logo"
      />
      <h1 className="inline-block align-top font-bold text-xl leading-none ml-2.5 mr-0 my-1.5">
        Cryptonite
      </h1>
    </div>
    <div>
      {user ? (
        <>
          <span className="text-[#333] text-sm mr-2.5">
            Hey, <b>{user.name}</b>!
          </span>
          <Button onClick={onLogout}>Log out</Button>
        </>
      ) : (
        <>
          <Button onClick={onLogin}>Log in</Button>
          <Button className="ml-2.5" onClick={onCreateAccount}>
            Sign up
          </Button>
        </>
      )}
    </div>
  </header>
);
