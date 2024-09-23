import { err, ok, type Result } from 'neverthrow';
import type AuthController from './authController';
import { API_URL } from '@/constants';
import type { ILink } from '@/entities/link';

class LinkController {
	constructor(readonly authController: AuthController) {}
	async addLink(name: string, originalUrl: string, slug: string, newUrl: string): Promise<Result<string,string>> {
		const response = await fetch(`${API_URL}/link`, {
            method:"POST",
			headers: await this.authController.getDefaultHeaders(),
			body: JSON.stringify({
				name: name,
				originalUrl: originalUrl,
				slug: slug,
				newUrl: newUrl
			})
		});
        console.log(response)
		if (!response.ok) {
			return err(await response.text());
		}
		return ok(`Created Link ${name}`);
	}

    async fetchLinks( page : number = 1, limit : number = 10): Promise<Array<ILink>> {
        const response = await fetch(`${API_URL}/link?page=${page}&limit=${limit}`,{
            method:'GET',
            headers: await this.authController.getDefaultHeaders(),  
        });
        if(!response.ok){
            console.error(response);
            return [];
        }
        const jsonResponse = await response.json();
        const data = jsonResponse["data"];
        const final : Array<ILink> = [];
        for(const link of data){
            final.push(
                {
                    name: link["name"],
                    id: link["id"],
                    originalUrl: link["originalUrl"],
                    slug : link["slug"],
                    newUrl : link["newUrl"]
                }
            )
        }
        console.log('final')
        console.table(final)
        return final;
    }
    static async getLinkBySlug(slug: string) : Promise<ILink|null>{ 
        const response = await fetch(`${API_URL}/link/${slug}`,{
            method:'GET',

        })
        if(!response.ok){
            return null;
        }

        const data = await response.json();
        return { 
            id: data["id"],
            name: data["name"],
            newUrl : data["newUrl"],
            originalUrl: data["originalUrl"],
            slug : data["slug"]
        } satisfies ILink;

    } 
}

export default LinkController;
