import React from "react";

const Container = (props) => {
  const { id, title, subtitle, description, children, className } = props;
  return (
    <section id={id ? id : ""} className={`relative px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-16  ${className}`}>
      <div className=" max-w-[1400px] mx-auto  overflow-hidden">

      {(subtitle || title || description) && <div className="flex-col flex justify-center items-start  px-3 sm:px-6 md:px-12 pb-8 sm:pb-10 md:pb-12 mt-2 md:mt-12 gap-4">
        {subtitle && <span className='text-base md:text-lg uppercase font-bold gradient-text mb-1 xs:mb-4 md:max-w-[600px]'>{subtitle}</span>}
        {title && <h3 className='text-xl md:text-2xl lg:text-3xl font-secondary  capitalize font-bold mb-2 xs:mb-3 text-title'>{title}</h3>}
        {description && <p className="text-base md:text-lg lowercase  font-semibold md:max-w-[600px]">{description}</p>}
      </div>}

      <div className="px-4 md:px-8 lg:px-24 mx-auto  max-w-[1400px] overflow-hidden">
        {children}
      </div>

      </div>
    </section>
  );
};

export default Container;
