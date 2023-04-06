import { TextStatistics, NotificationMessage } from './Notification.styled';
import PropTypes from 'prop-types';
export const Notification = ({ message }) => {
  return (
    <>
      <TextStatistics>Statistics</TextStatistics>
      <NotificationMessage>{message}</NotificationMessage>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
