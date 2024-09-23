import AuthController from '@/controllers/authController';
import type { PageLoad } from '../$types';
import LinkController from '@/controllers/listController';

export const ssr = false;

export const load: PageLoad = async ({ params }) => {
	if (!(await AuthController.validate())) {
		return;
	}
	const controller = new AuthController();
	const user = await controller.fetchSelf();

    const linkController = new LinkController(controller);

    const links = await linkController.fetchLinks();

	return {
		user: user,
        links: links
	};
};
