interface NotificationProps {
  text: string;
}

const Notification: React.FC<NotificationProps> = ({ text }): JSX.Element => {
  return (
    <>
      <p>{text}</p>
    </>
  );
};

export default Notification;
