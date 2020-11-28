import {
  Container,
} from './styles/Card.styles';

const Card = ({ children }: CardProps) => (
  <Container>
    {children}
  </Container>
);

interface CardProps {
  children: React.ReactElement
}

export default Card;
