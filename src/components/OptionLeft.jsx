import React, { useState } from 'react';

export const OptionLeft = ({nombre1, lista1, lista2, lista3, lista4, lista5, lista6}) => {
    
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseOver = () => {
      setDropdownVisible(true);
    };

    const handleMouseOut = () => {
      setDropdownVisible(false);
    };

    const items = [lista1, lista2, lista3, lista4, lista5, lista6];

    return (
        <>
            <li
                className='p-2 cursor-pointer relative hover:bg-[#b9b6b6] rounded-lg'
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                {nombre1} 
                {dropdownVisible && (
                    <div
                        className='absolute top-8 left-0 mt-2 bg-[#e2dfdc] shadow-lg rounded-md p-4'
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <ul className='text-black'>
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    className='px-2 py-1 cursor-pointer hover:bg-gray-300 rounded-md'
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </li>
        </>
    );
};
