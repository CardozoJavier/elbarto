import {
  Container,
  Label,
} from './styles/Button.styles';
import classes from '../../utils/classes';

const Button = ({ label, type, icon, onClick }: ButtonProps): React.ReactElement => (
  <Container className={classes.get(type)} onClick={onClick}>
    <Label>{label}</Label>
  </Container>
);

interface ButtonProps {
  label: string
  type: string
  icon?: string
  onClick: () => void
}

export default Button;
