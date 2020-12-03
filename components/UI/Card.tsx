import {
  Container,
} from './styles/Card.styles';

const Card = ({ children, className }: CardProps) => (
  <Container className={className}>
    {children}
  </Container>
);

interface CardProps {
  children: React.ReactElement
  className: string
}

export default Card;
