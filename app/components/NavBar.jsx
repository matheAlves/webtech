'use client';
import MenuItem from './MenuItem';

const NavBar = () => {
    function onClick() {
        console.log("clicked");
    }
    return <nav>
        <ul
            className="hidden sm:flex bg-re justify-end p-4 uppercase font-bold text-sm"

        >
            <MenuItem text="Início" onClick={onClick} />
            <MenuItem text="Startup" onClick={onClick} />
            <MenuItem text="Expanda" onClick={onClick} />
            <MenuItem text="Serviços" onClick={onClick} />
            <MenuItem text="Planos" onClick={onClick} />
        </ul>
    </nav>
}
export { NavBar };