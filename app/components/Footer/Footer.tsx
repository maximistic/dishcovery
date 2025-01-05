import React from "react";
import FooterNavLinks from "./FooterLinks";
import FooterSocialIcons from "./SocialIcons";
import FooterLegal from "./Legal";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-2xl font-bold text-orange-600">DishCovery</h2>
            <p className="mt-4 text-sm">
              Discover new recipes, Bookmark your favorites, and explore cuisines from around the world.
            </p>
          </div>

          <FooterNavLinks />
          <FooterSocialIcons />
        </div>
        <FooterLegal />
      </div>
    </footer>
  );
};

export default Footer;