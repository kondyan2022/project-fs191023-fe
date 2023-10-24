import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import StatisticsInfoCard from '../../components/StatisticsInfoCard/StatisticsInfoCard';
import { ReactComponent as IconRunMen } from '../../images/sprite.svg#icon-run-man'
import { ReactComponent as IconPlayVideo } from '../../images/sprite.svg#icon-play'

const WelcomePage = () => {
  return (
    <Container>
      <div>
        <div>
          <h1>Transforming your body shape with Power Pulse</h1>
          <Button>Sign Up</Button>
          <Button>Sign In</Button>
        </div>
        <div>
          <StatisticsInfoCard icon={IconPlayVideo} number={'350+'} value={'Video tutorial'} />
          <StatisticsInfoCard icon={IconRunMen} number={500} value={'cal'} />
        </div>
      </div>
    </Container>
  );
};

export default WelcomePage;
