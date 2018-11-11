import { ApolloQueryResult } from 'apollo-boost';
import { query } from 'apollo';

interface QueryPostInterface {
    posts: [{
        id: string;
        title: string;
        body: string;
    }]
}

export class Home {
    private posts = [];

    async activate() {
        try {
            const { data: { posts } } = await query(`query {
                posts() {
                    id,
                    title,
                    body
                }
            }`) as ApolloQueryResult<QueryPostInterface>;

            this.posts = posts;
        } catch (e) {
            throw new Error('Could not load posts');
        }
    }
}
