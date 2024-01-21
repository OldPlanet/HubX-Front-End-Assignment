import { FC } from 'react';
import Button from './Button';

interface GroupButtonProps {
  onButtonClick: (label: string) => void;
  selectedButton: string | null;
}

const GroupButton: FC<GroupButtonProps> = ({ onButtonClick, selectedButton }) => {
  const handleButtonClick = (buttonLabel: string) => {
    if (selectedButton !== buttonLabel) {
      onButtonClick(buttonLabel);
    }
  };

  return (
    <div className="button-group">
      <Button
        iconClicked={'../icons/DocumentScannerClicked.svg'}
        iconNotClicked={'../icons/DocumentScannerNotClicked.svg'}
        label={'Document Scanner'}
        onClick={() => handleButtonClick('ButtonDocumentScanner')}
        isClicked={selectedButton === 'ButtonDocumentScanner'}
      />
      <div style={{ height: '100%', borderLeft: '1px solid #00000014' }} />
      <Button
        iconClicked={'../icons/SignStampClicked.svg'}
        iconNotClicked={'../icons/SignStampNotClicked.svg'}
        label={'Sign & Stamp'}
        onClick={() => handleButtonClick('ButtonSignStamp')}
        isClicked={selectedButton === 'ButtonSignStamp'}
      />
      <div style={{ height: '100%', borderLeft: '1px solid #00000014' }} />
      <Button
        iconClicked={'../icons/BatchScanningClicked.svg'}
        iconNotClicked={'../icons/BatchScanningNotClicked.svg'}
        label={'Batch Scanning'}
        onClick={() => handleButtonClick('ButtonBatchScanning')}
        isClicked={selectedButton === 'ButtonBatchScanning'}
      />
      <div style={{ height: '100%', borderLeft: '1px solid #00000014' }} />
      <Button
        iconClicked={'../icons/AdvancedFiltersClicked.svg'}
        iconNotClicked={'../icons/AdvancedFiltersNotClicked.svg'}
        label={'Advanced Filters'}
        onClick={() => handleButtonClick('ButtonAdvancedFilters')}
        isClicked={selectedButton === 'ButtonAdvancedFilters'}
      />
      <div style={{ height: '100%', borderLeft: '1px solid #00000014' }} />
      <Button
        iconClicked={'../icons/ExportShareClicked.svg'}
        iconNotClicked={'../icons/ExportShareNotClicked.svg'}
        label={'Export & Share'}
        onClick={() => handleButtonClick('ButtonExportShare')}
        isClicked={selectedButton === 'ButtonExportShare'}
      />
    </div>
  );
};

export default GroupButton;
