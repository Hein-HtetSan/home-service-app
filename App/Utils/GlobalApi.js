import { gql, request } from 'graphql-request';

const MASTER_URL = "https://eu-west-2.cdn.hygraph.com/content/cm20chkpd00f007w0temlidgp/master";

const getSlider = async () => {
    const query = gql`
        query GetSlider{
            sliders {
                id
                name
                image{
                    url
                }
            }
        }   
    `;
    const result = await request(MASTER_URL, query);
    return result;
}

// get category section
const getCategory = async () => {
    const query = gql`
        query GetCategory{
            categories {
                id
                name
                icon {
                    url
                }
            }
        }   
    `;
    const result = await request(MASTER_URL, query);
    return result;
}

export default {
    getSlider,
    getCategory
}