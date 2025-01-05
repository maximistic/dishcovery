import * as React from "react";

interface DropDownMenuProps {
    title: string;
    items: string[];
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ title, items }) => {
    return (
        <div>
            <h4 className="font-semibold mb-4 text-lg">{title}</h4>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li
                    key={item}
                    className="hover:text-orange-600 dark:hover:text-orange-500">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DropdownMenu