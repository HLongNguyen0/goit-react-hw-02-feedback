import { Button } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const keys = Object.keys(options);
  return keys.map(key => (
    <Button
      key={key}
      type="button"
      name="key"
      onClick={() => onLeaveFeedback(key)}
    >
      {key}
    </Button>
  ));
}

export default FeedbackOptions;
