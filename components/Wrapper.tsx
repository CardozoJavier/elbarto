import { WrapperContainer } from './styles/Wrapper.styles';

interface WrapperProps {
  children: React.ReactNode;
  key?: string;
  type?: string;
}

/**
 * @param {node} children - The app elements
 * @return The app wrapped
 */
const Wrapper  = (props: WrapperProps): JSX.Element => (
  <WrapperContainer>
    {props.children}
  </WrapperContainer>
);

export default Wrapper;
