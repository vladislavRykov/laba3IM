import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const CoursePage = () => {
  const location = useLocation();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const onClick = () => {
    authCtx?.currentUser === null && navigate('/reg');
    window.confirm('Вы успешно записались');
  };
  console.log(location.state);
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '200px',
      }}>
      <button
        style={{
          borderRadius: '5px',
          padding: '10px',
          color: 'purple',
          backgroundColor: 'white',
          border: '1px solid purple',
          fontSize: '30px',
        }}
        onClick={onClick}>
        Записаться
      </button>
    </div>
  );
};

export default CoursePage;
