import React from 'react';

const SubTitle = ({title,buttonTitle,}) => {
    return (
        <div className='container'>
            <div className='flex justify-between items-center '>
                <div className='capitalize text-xl font-semibold'> {title}</div>

                {buttonTitle?(
                <a>
                    <div className='capitalize text-sm hover:text-amber-400 cursor-pointer'>{buttonTitle}<i className="ml-3 fa-solid fa-arrow-right-long"></i></div>
                </a>):null}
                
            </div>
        </div>
    );
}

export default SubTitle;
