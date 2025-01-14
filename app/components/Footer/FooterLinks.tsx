import * as React from 'react'
import NavLink from "../Navbar/NavLinks";

const FooterLinks: React.FC = () => {
    const NavItems = [
        {label: "Home", href: "/"},
        {label: "Recipes", href: "/recipes"},
        {label: "Blog", href: "/blog"},
        {label: "Contact us", href: "/contact"},
    ]

    return (
        <div>
            <h3 className='text-lg font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2 font-bold'>
                {NavItems.map((item) => (
                    <li key={item.href}>
                        <NavLink 
                        href={item.href}
                        className='hover:text-orange-600 dark:hover:text-orange-500'>
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterLinks