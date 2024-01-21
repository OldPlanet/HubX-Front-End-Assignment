import { FC } from 'react';
import './Button.css';

interface ButtonProps {
  iconClicked: string;
  iconNotClicked: string;
  label: string;
  isClicked: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ iconClicked, iconNotClicked, label, isClicked, onClick }) => {
  return (
    <button className={`button ${isClicked ? 'clicked' : ''}`} onClick={onClick}>
      <div className="icon-container">
        <div className="icon-circle" />
        <img className="image-icon" src={isClicked ? iconClicked : iconNotClicked} alt="icon" />
      </div>
      <span style={{ fontSize: '20px' }}>{label}</span>
    </button>
  );
};

export default Button;
