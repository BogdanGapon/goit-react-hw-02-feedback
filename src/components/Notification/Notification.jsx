import { TextStatistics, NotificationMessage } from './Notification.styled';
export const Notification = ({ message }) => {
  return (
    <>
      <TextStatistics>Statistics</TextStatistics>
      <NotificationMessage>{message}</NotificationMessage>
    </>
  );
};
