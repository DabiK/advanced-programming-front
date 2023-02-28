import { Notification } from '~/models/notifications/notification';

export class NotificationService {
    static notifications: Notification[] = [
        {
            name: 'Soutenance - Allison',
            done: true,
        },
        {
            name: 'Soutenance',
            done: false,
        },
    ];

    async getAllNotification() {
        return NotificationService.notifications;
    }
}
