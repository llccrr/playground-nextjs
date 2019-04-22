import 'isomorphic-unfetch';

const fetchWithErrorHandling = async url => {
    try {
        return await (await fetch(url)).json();
    } catch (err) {
        return { error: true };
    }
};

export const getArticles = async () => fetchWithErrorHandling(`https://api.meltygroup.com/v1/fr/articles/?themas=1`);

export const getArticleDetails = async id => fetchWithErrorHandling(`https://api.meltygroup.com/v1/fr/articles/${id}`);

export const getImageSrc = url => url.replace('{size}', 'thumb');
