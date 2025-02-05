import { FC } from 'react';
import cryptonite from '/cryptonite.png';
import useAuthentication from '../hooks/useAuthentication.ts';

const MainPage: FC = () => {
  const { user } = useAuthentication();
  return (
    <div className="w-full flex justify-around items-center">
      <div className="flex flex-col items-center">
        <img className="w-72 h-72" src={cryptonite} alt="Cryptonite logo" />
        <h1 className="text-green-500">Hello, {user?.nickname}</h1>
      </div>
    </div>
  );
};

export default MainPage;
