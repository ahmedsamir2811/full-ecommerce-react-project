import React from 'react';
import SubTitle from '../../Utils/SubTitle';
import CategoryCard from '../../Utils/CategoryCard';
import Clothes from '../../Assets/Images/clothe.png'


const HomeCategory = () => {
    return (
        <div className='container mt-8'>
            <SubTitle title="category name" buttonTitle="more"/>
            <div className='mt-3 flex justify-between items-center gap-y-10 flex-wrap' >
            <CategoryCard image={Clothes} title="phone"/>
            <CategoryCard image={Clothes} title="elctronic"/>
            <CategoryCard image={Clothes} title="clothes"/>
            <CategoryCard image={Clothes} title="laptop"/>
            
            </div>
        </div>
    );
}

export default HomeCategory;
