import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './Header.module.scss';
import cn from 'classnames';
import { AuthContext } from '../../context/AuthContext';

const links = [
  {
    title: 'Главная страница',
    path: '/home',
  },
  {
    title: 'Курсы',
    path: '/courses',
  },
  {
    title: 'Контакты',
    path: '/contacts',
  },
  {
    title: 'Регистрация',
    path: '/reg',
  },
  {
    title: 'Вход',
    path: '/log',
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const authCtx = useContext(AuthContext);

  return (
    <header className={s.header}>
      <div className={s.header_links}>
        {links.map((link) => (
          <Link
            className={cn(s.link, { [s.selected_link]: pathname === link.path })}
            to={link.path}
            key={link.path}>
            {link.title}
          </Link>
        ))}
        {authCtx?.currentUser && (
          <button
            style={{
              backgroundColor: 'white',
              border: '1px solid black',
              color: 'black',
              padding: '8px',
              borderRadius: '10px',
            }}
            onClick={() => authCtx?.setCurrentUser(null)}>
            Выйти
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
