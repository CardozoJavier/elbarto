import { useState, useCallback, useEffect } from 'react';
import {
  Container,
  Iframe,
  Image,
} from './styles/PhoneIframe.styles';
import {
  NOTCH,
  IMAGE_CONTAINER,
  IFRAME_CONTAINER,
} from '../../utils/constants';


const PhoneIframe = ({ src }: { src: string }): React.ReactElement => {  
  const getTime = useCallback((): string => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const splitTime = time.split(':');
    const timeFormated = `${splitTime[0]}:${splitTime[1]}`;
    
    return timeFormated;
  }, []);

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 1000);
  }, []);

  return (
    <Container>
      <div className={NOTCH}>
        <p>{time}</p>
      </div>
      <div className={IFRAME_CONTAINER}>
        <Iframe
          title="Inline Frame Example"
          src={src}
        />
      </div>
      <div className={IMAGE_CONTAINER}>
        <Image src="/images/iphone-front.png" alt="iphone-front" />
      </div>
    </Container>
  );
}

export default PhoneIframe;
