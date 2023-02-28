vue
<template>
    <div>
        <v-list lines="three" select-strategy="classic">
            <v-list-item
                v-for="(notification, index) in notifications"
                :key="index"
                :class="notification.done ? 'notification-active' : ''"
            >
                <template v-slot:default>
                    <v-list-item-action>
                        <v-checkbox :v-model="notification.done"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title
                            ><p :class="notification.done ? 'text-decoration-line-through' : ''">
                                {{ notification.name }}
                            </p></v-list-item-title
                        >
                    </v-list-item-content>
                </template>
            </v-list-item>
        </v-list>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { Notification } from '~/models/notifications/notification';

@Component({
    name: 'notification-list',
})
export default class NotificationList extends Vue {
    @Prop({
        default: () => [],
    })
    notifications!: Notification[];
}
</script>

<style lang="scss" scoped>
.notification-active {
    background-color: #ffb1b1;
    border-radius: 10px;
}
</style>
