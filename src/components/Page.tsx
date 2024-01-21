import { FC } from 'react';
import './Page.css';

interface PageProps {
  image: string[];
  isImageAnimated: boolean;
  animationClasses: string[];
  title: string;
  header: string;
  paragraph: string;
  button: string;
}

const Page: FC<PageProps> = ({
  image,
  isImageAnimated,
  animationClasses,
  title,
  header,
  paragraph,
  button
}) => {
  return (
    <div className="page-component">
      <div className="left-section">
        {image.map((img, index) => (
          <img
            key={index}
            className={`image${index + 1} ${isImageAnimated ? animationClasses[index] + ' animation' : animationClasses[index]}`}
            src={img}
          />
        ))}
      </div>
      <div className={isImageAnimated ? 'right-section animation' : 'right-section'}>
        <div className="blue-header">{title}</div>
        <div className="large-header">{header}</div>
        <p className="paragraph">{paragraph}</p>
        <button className="info-button">{button}</button>
      </div>
    </div>
  );
};

export default Page;
