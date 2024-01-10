import React from 'react';

const CategoryCard = ({image , title}) => {
    return (
            <div className='border-r-2 flex items-center justify-between gap-x-10 py-4 px-10'>
                <div className=' w-20 h-20'>
                    <img src={image}/>
                </div>
                <div className=''>
                    <h6 className='capitalize font-bold '>{title}</h6>
                    <span className='text-xs text-zinc-500'>shop now <i class="fa-solid fa-angles-right"></i></span>
                </div>
            </div>
            
    );
}

export default CategoryCard;
