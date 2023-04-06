import { BtnWrapper } from './FeedbackOptions.styled.';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options }) => {
  return (
    <>
      <BtnWrapper>
        <button type="button" onClick={() => options('good')}>
          Good
        </button>
        <button type="button" onClick={() => options('neutral')}>
          Neutral
        </button>
        <button type="button" onClick={() => options('bad')}>
          Bad
        </button>
      </BtnWrapper>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.func.isRequired,
};
