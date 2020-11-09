import {
  Container,
  Label,
} from './styles/Button.styles';
import getIcon from '../../icons/getIcon';
import classes from '../../utils/classes';

const Button = ({ label, type, icon, onClick }: ButtonProps): React.ReactElement => (
  <Container className={classes.get(type)} onClick={onClick}>
    <Label>{label}</Label>
    {icon ? getIcon(icon) : null}
  </Container>
);

interface ButtonProps {
  label: string
  type: string
  icon?: string
  onClick: () => void
}

export default Button;
