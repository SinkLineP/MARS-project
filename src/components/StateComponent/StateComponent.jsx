import React from 'react';

import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/slider';
import NewsBlock from '../NewsBlock/NewsBlock';
import Doshka from '../Doshka/doshka';
import Mapbox from '../Mapbox/mapbox';
import Footer from '../Footer/footer';







export default function StateComponent(props) {
    return (
        <div className="App fon">
            <Navbar />
            <div className="slides-margin">
                <Slider slides={props.slides}/>
            </div>
            <NewsBlock title="Новини шкіл України"
                items={props.items} />
            <Doshka />
            <Mapbox />

            <Footer />

        </div>
    )
}





