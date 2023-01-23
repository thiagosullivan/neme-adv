const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = '4e4d3327a61d29e4b179a9e89da7a7';

async function fetchCmsAPI(query, { variables } = {}){
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllPosts(){
  const data = await fetchCmsAPI(`
    {
      allPosts {
        id
        title
        slug
        author
        _firstPublishedAt
        imgPost {
          url
        }
        content
      }
    }
  `);
  
  return data.allPosts;
}

export async function getAllAuthors(){
  const data = await fetchCmsAPI(`
    {
      allAuthors {
        id
        name
        _status
        _firstPublishedAt
      }
    }
  `);
  
  return data.allAuthors;
}

export default { getAllPosts, getAllAuthors };