import type { Channel, StreamChat, User } from "stream-chat";

export interface ChatAgent {
    user?: User;
    channel: Channel,
    chatClient: StreamChat,
    getLastInteraction: () => number
    init: () => Promise<void>;
    dispose: () => Promise<void>;
}

export enum AgentPlatform {
    OPENAI = "openai",
    WRITTING_ASSISTANT = "writing_assistant"
}

export interface WritingMessage { 
    custom?: {
        suggestions?: string[];
        writingTask?: string;
        messageType?: "user_input" | "ai_response" | "system_message";
    }
}