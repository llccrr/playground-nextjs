import React from 'react';
// import { getArticleDetails } from '../api/melty.api';
import { withAmp } from 'next/amp';
import Head from 'next/head';

const Article = ({ articleDetail }) => (
    <div>
        <Head>
            {/*<title>{articleDetail.title}</title>*/}
            <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js" />
        </Head>
        {/*<h1>{articleDetail.title}</h1>*/}
        <amp-story standalone title="Joy of Pets" publisher="AMP tutorials" poster-portrait-src="/static/cover.jpg">
            <amp-story-page id="cover">
                <amp-story-grid-layer template="fill">
                    <amp-img src="../static/cover.jpg" width="720" height="1280" layout="responsive" />
                </amp-story-grid-layer>
                <amp-story-grid-layer template="vertical">
                    <h1>The Joy of Pets</h1>
                    <p>By AMP Tutorials</p>
                </amp-story-grid-layer>
            </amp-story-page>
        </amp-story>
        {/*<amp-img src="/static/cover.jpg" width="720" height="1280" />*/}
        {/*<p>{articleDetail.lead}</p>*/}
    </div>
);

// Article.getInitialProps = async function(context) {
//     const { id } = context.query;
//     const articleDetail = await getArticleDetails(id);
//     return { articleDetail };
// };

export default withAmp(Article);
