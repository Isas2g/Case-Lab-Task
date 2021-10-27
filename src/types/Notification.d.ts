interface Notification {
  id: integer;
  dateTime: string;
  text: string;
  looked: boolean;
  data: boolean;
}

interface NotificationUnread {
  id: integer;
  createdAt: string;
  text: string;
  looked: boolean;
}