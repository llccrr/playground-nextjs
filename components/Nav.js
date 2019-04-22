import React from 'react';
import Link from 'next/link';

const Nav = props => (
    <nav>
        <ul>
            <li>
                <Link prefetch href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link prefetch as={`/f/${props.id}`} href={`/fortnite?theme=${props.theme}`}>
                    <a theme="Fortnite">Fortnite</a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/lol">
                    <a title="League of Legends">League of Legends</a>
                </Link>
            </li>
        </ul>
        <style jsx>{`
            :global(body) {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
            }
            nav {
                text-align: center;
            }
            ul {
                display: flex;
                justify-content: flex-start;
            }
            nav > ul {
                padding: 4px 16px;
            }
            li {
                display: flex;
                padding: 6px 8px;
            }
            a {
                color: #067df7;
                text-decoration: none;
                font-size: 13px;
            }
        `}</style>
    </nav>
);

const Style = () => (
    <style jsx>{`
        :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }
        nav {
            text-align: center;
        }
        ul {
            display: flex;
            justify-content: flex-start;
        }
        nav > ul {
            padding: 4px 16px;
        }
        li {
            display: flex;
            padding: 6px 8px;
        }
        a {
            color: #067df7;
            text-decoration: none;
            font-size: 13px;
        }
    `}</style>
);

export default Nav;
