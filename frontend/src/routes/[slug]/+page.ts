import LinkController from "@/controllers/listController";
import type { PageLoad } from "../$types";

// export const ssr = false;

export const load: PageLoad = async ({ params })  => {

    const { slug } = params as { slug : string };

    const link = await LinkController.getLinkBySlug(slug);

    return {
        link,
        slug
    }

};
