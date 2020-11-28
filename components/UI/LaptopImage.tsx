import {
  ComposeContainer,
  ImageContainer,
  Image
} from './styles/LaptopImage.styles';

const LaptopImage = ({ className }: { className?: string }): React.ReactElement => (
  <ComposeContainer className={className}>
    <Image
      src="/images/laptop.png"
      alt="laptop-image"
    />
    <ImageContainer>
      <Image
        src="/images/video.gif"
        alt="coding-gif"
      />
    </ImageContainer>
  </ComposeContainer>
);

export default LaptopImage;
