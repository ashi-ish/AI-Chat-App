import type { Channel, StreamChat, User } from "stream-chat";

export interface ChatAgent {
    user?: User;
    channel: Channel,
    chatClient: StreamChat,
    getLastInteraction: () => number
    init: () => Promise<void>;
    dispose: () => Promise<void>;
}

