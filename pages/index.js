import React from 'react';
import Link from 'next/link';
// import Head from '../components/head';
import Nav from '../components/Nav';
import UIHeader from '../components/Header';
import { getArticles } from '../api/melty.api';
import { withAmp, useAmp } from 'next/amp';

const Home = props => {
    const isAmp = useAmp();

    return (
        <div>
            <Nav theme="FPS | TPS" id="fps-tps" />
            <div className="hero">
                <h1 className="title">Welcome to Next! {isAmp ? 'AMP' : 'normal'} </h1>
            </div>
            <ul>
                {props.articles.map(article => (
                    <li key={article.id}>
                        <Link as={`/a/${article.id}`} href={`/article?id=${article.id}`}>
                            <a>{article.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>

            <style jsx>{`
                .hero {
                    width: 100%;
                    color: #333;
                }
                .title {
                    margin: 0;
                    width: 100%;
                    padding-top: 80px;
                    line-height: 1.15;
                    font-size: 48px;
                }
                .title,
                .description {
                    text-align: center;
                }
                .row {
                    max-width: 880px;
                    margin: 80px auto 40px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                }
                .card {
                    padding: 18px 18px 24px;
                    width: 220px;
                    text-align: left;
                    text-decoration: none;
                    color: #434343;
                    border: 1px solid #9b9b9b;
                }
                .card:hover {
                    border-color: #067df7;
                }
                .card h3 {
                    margin: 0;
                    color: #067df7;
                    font-size: 18px;
                }
                .card p {
                    margin: 0;
                    padding: 12px 0 0;
                    font-size: 13px;
                    color: #333;
                }
            `}</style>
        </div>
    );
};

Home.getInitialProps = async () => {
    const data = await getArticles();

    return {
        articles: data.items
    };
};

export default Home;
