import React from "react";

const FooterLegal: React.FC = () => {
  return (
    <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} DishCovery. All rights reserved. |
        <a
          href="/privacy"
          className="ml-2 hover:text-orange-600 dark:hover:text-orange-500"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          className="ml-2 hover:text-orange-600 dark:hover:text-orange-500"
        >
          Terms of Service
        </a>
      </p>
    </div>
  );
};

export default FooterLegal;