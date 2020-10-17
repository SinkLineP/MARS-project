import React, {useState} from 'react';

const NewsItem = ({news, number}) => {
    const [isToolTipShowing, setToolTipShowing] = useState(false);
    const [isDirectionSwitchedLeft, setDirectionSwitchedLeft] = useState(false);
    const [isDirectionSwitchedRight, setDirectionSwitchedRight] = useState(false);
    const toggleToolTip = (newValue) => {
        setDirectionSwitchedLeft(number === 1 || number === 5)
        setDirectionSwitchedRight(number === 4 || number === 8)
        setToolTipShowing(newValue)
    }

    return (
        <div className="news-list-item"
             onMouseEnter={() => toggleToolTip(true)}
             onMouseLeave={() => toggleToolTip(false)}
             style={{
                 background: `url(${news.imgUrl}) center no-repeat`,
                 backgroundSize: 'cover'
        }}>
            <p className="news-list-item-name">
                {news.name}
            </p>
            {isToolTipShowing && <div className={`news-list-item-tooltip ${
                isDirectionSwitchedLeft
                    ? "news-list-item-tooltip-switchedLeft"
                    : ""
            } 
            ${
                isDirectionSwitchedRight
                    ? "news-list-item-tooltip-switchedRight"
                    : ""
            }`}>
                <p className="news-list-item-tooltip-description">{news.description}</p>
            </div>
            }
        </div>
    );
};

export default NewsItem;
