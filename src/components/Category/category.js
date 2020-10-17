import React from 'react';
import './category.scss';
import './myScript';



function Category() {
    return (
        <div className="body">
            <header>
                Категорії
            </header>
            <div className="container">

                <div className="categories hide" id="animation1">
                    <a href="#">Новини шкіл України</a>
                </div>
                <div className="categories hide" id="animation2">
                    <a href="#">Дошка пошани</a>
                </div>
                <div className="categories hide" id="animation3">
                    <a href="#">Карта та контакти шкіл</a>
                </div>

            </div>
        </div>
    );
}

export default Category;