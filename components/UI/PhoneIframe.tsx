import { useState, useCallback, useEffect } from 'react';
import {
  Container,
  Iframe,
  Image,
} from './styles/PhoneIframe.styles';


const PhoneIframe = () => {  
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
      <div className="notch">
        <p>{time}</p>
      </div>
      <div className="iframe-container">
        <Iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          src="https://www.mercadolibre.com.ar/privacidad"
        />
      </div>
      <div className="image-container">
        <Image src="/images/iphone-front.png" alt="iphone-front" />
      </div>
    </Container>
  );
}

export default PhoneIframe;
