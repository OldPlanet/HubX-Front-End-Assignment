import { FC, useEffect, useState } from 'react';
import Page from './Page';

interface SelectedPageProps {
  selectedPage: string;
}

const SelectedPage: FC<SelectedPageProps> = ({ selectedPage }) => {
  let pageContent;
  const [isImageAnimated, setIsImageAnimated] = useState(false);

  useEffect(() => {
    setIsImageAnimated(true);

    const animationTimeout = setTimeout(() => {
      setIsImageAnimated(false);
    }, 1000);

    return () => clearTimeout(animationTimeout);
  }, [selectedPage]);

  switch (selectedPage) {
    case 'ButtonDocumentScanner':
      pageContent = {
        image: ['../images/ImageDocumentScanner.png'],
        animationClasses: ['image'],
        title: 'DOCUMENT SCANNER',
        header: 'Scan with Ease',
        paragraph:
          'Scan any document instantly with your mobile device by just a few steps. Save as PDF, JPG, ZIP, TXT, and Word format.',
        button: 'Learn More'
      };
      break;

    case 'ButtonSignStamp':
      pageContent = {
        image: [
          '../images/ImageSignStamp.png',
          '../images/ImageSignature.png',
          '../images/ImageCompleted.png'
        ],
        animationClasses: ['image', 'image-signature', 'image-completed'],
        title: 'SIGN & STAMP',
        header: 'One-Tap Focus',
        paragraph:
          'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
        button: 'Learn More'
      };
      break;

    case 'ButtonBatchScanning':
      pageContent = {
        image: [
          '../images/ImagePhoneEmpty.png',
          '../images/ImageBatchThird.png',
          '../images/ImageBatchSecond.png',
          '../images/ImageBatchFirst.png'
        ],
        animationClasses: ['image', 'image-batch-third', 'image-batch-second', 'image-batch-first'],
        title: 'BATCH SCANNING',
        header: 'Multiple Page Scan',
        paragraph:
          'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
        button: 'Learn More'
      };
      break;

    case 'ButtonAdvancedFilters':
      pageContent = {
        image: [
          '../images/ImageAdvancedFilters.png',
          '../images/ImageBrightness.png',
          '../images/ImageContrast.png'
        ],
        animationClasses: ['image', 'image-brightness', 'image-contrast'],
        title: 'ADVANCED FILTERS',
        header: 'Unique Filters',
        paragraph:
          'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
        button: 'Learn More'
      };
      break;

    case 'ButtonExportShare':
      pageContent = {
        image: [
          '../images/ImageExportShare.png',
          '../images/ImageArrow.png',
          '../images/ImagePDFFile.png',
          '../images/ImageJPGFile.png',
          '../images/ImageTXTFile.png'
        ],
        animationClasses: [
          'image',
          'image-arrow',
          'image-pdf-file',
          'image-jpg-file',
          'image-txt-file'
        ],
        title: 'EXPORT & SHARE',
        header: 'All-Round Conversion',
        paragraph: 'Export your scans as PDF, JPG, ZIP, TXT and Word.',
        button: 'Learn More'
      };
      break;

    default:
      pageContent = null;
      break;
  }

  return <div>{pageContent && <Page {...pageContent} isImageAnimated={isImageAnimated} />}</div>;
};

export default SelectedPage;
