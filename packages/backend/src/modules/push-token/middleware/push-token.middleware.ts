import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response } from "express";
import { IAuthRequest } from "../../../shared/interfaces/auth.request.interface";
import { PushTokenService } from "../services/push-token.service";

@Injectable()
export class PushTokenMiddleware implements NestMiddleware {
    constructor(private readonly pushTokenService: PushTokenService) {}

    async use(req: IAuthRequest, res: Response, next: () => void) {
        // try to get push tokens
        if (req.user) {
            await this.setPushTokenIfExists(req.user);
        }
        next();
    }

    private async setPushTokenIfExists(user: IAuthRequest["user"]): Promise<void> {
        const pushTokens = await this.pushTokenService.findByUserId(user.id);
        if (pushTokens) {
            user.tokens = pushTokens.map(pushToken => pushToken.token);
        }
    }
}
