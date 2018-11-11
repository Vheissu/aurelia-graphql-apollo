import { query } from 'apollo';
import { ApolloQueryResult } from 'apollo-boost';

interface QueryPostInterface {
    post: {
        id: string;
        title: string;
        body: string;
    }
}

export class PostRoute {
    private post;

    async canActivate({ postSlug }) {
        try {
            const { data: { post } } = await query(`query {
                post(slug: "${postSlug}") {
                    id,
                    title,
                    body
                }
            }`) as ApolloQueryResult<QueryPostInterface>;

            this.post = post;
        } catch (e) {
            throw new Error('Could not load post');
        }
    }
}
