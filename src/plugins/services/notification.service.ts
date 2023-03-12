import { Notification } from '~/models/notifications/notification';
import { BaseService } from './base.service';

export class NotificationService extends BaseService {
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

    async getAllNotification() : Promise<Notification[]> {
        try {
            return (
                await this.axios.get<Notification[]>(`/notifications`, {
                    withCredentials: true,
                })
            ).data;
        }
        catch (err) {
            console.debug(err);
            throw err;
        }
    }
}
