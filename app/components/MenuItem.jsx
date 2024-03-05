'use client';

const MenuItem = ({ text, onClick }) => {

    return (
        <li
            onClick={onClick}
            className="ml-6 cursor-pointer hover:text-slate-400 transition duration-300"
        >{text}</li>
    )
}

export default MenuItem;