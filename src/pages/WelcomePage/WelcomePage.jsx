import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import StatisticsInfoCard from '../../components/StatisticsInfoCard/StatisticsInfoCard';
import { ReactComponent as IconAthlete } from '../../icons/symbol-defs.svg#icon-athlete'
import { ReactComponent as IconPlayVideo } from '../../icons/symbol-defs.svg#icon-play_video'

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
          <StatisticsInfoCard icon={IconAthlete} number={500} value={'cal'} />
        </div>
      </div>
    </Container>
  );
};

export default WelcomePage;
