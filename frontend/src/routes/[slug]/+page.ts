import type { PageLoad } from "./$types";


export const load: PageLoad = async ({ params }) => {
    

    const { slug } = params as { slug : string };

    return {        
        slug
	};
};
