import React from 'react';
import NewsItem from "./NewsItem";
import "./NewsBlock.scss"

const NewsBlock = ({title, items}) => {
    const itemsList = items.map((news, i) => <NewsItem news={news} number={i+1} key={i}/>);

    return (
        <section className="news">
            <header className="news-title">{title}</header>
            <div className="tops">
                <div className="news-list">
                    {itemsList}
                </div>
            </div>
        </section>
    );
};

export default NewsBlock;
