import './App.css';
import SelectedPage from './components/SelectedPage';
import GroupButton from './components/GroupButton';
import { useState } from 'react';

export function App() {
  const [selectedButton, setSelectedButton] = useState('ButtonDocumentScanner');

  const handleButtonClick = (buttonLabel: string) => {
    setSelectedButton(buttonLabel);
  };

  return (
    <>
      <div className="main">
        <SelectedPage selectedPage={selectedButton} />
        <GroupButton onButtonClick={handleButtonClick} selectedButton={selectedButton} />
      </div>
    </>
  );
}
