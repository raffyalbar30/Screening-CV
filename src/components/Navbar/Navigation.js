import React from 'react';

const Navigation = ({ children }) => {
    return (
        <div className="w-full mt-4">
             <div className="flex justify-between items-center">
               { children }
            </div>
        </div>
    );
}

export default Navigation;
