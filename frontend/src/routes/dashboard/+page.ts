import AuthController from "@/controllers/authController";
import type { PageLoad } from "../$types";

export const ssr = false;

export const load : PageLoad = async ( { params }) => {
    const controller = new AuthController();
    const user =  await controller.fetchSelf();

    return {
        user:user,

    }
}