import React from "react";

const Media = ({
    divClassName,
    Type,
    Src,
    demoSrc,
    children
        
}) => {
  return (
    
                  <div className={divClassName}>
                    <div className={Type}>
                      <img
                        className="avatar"
                        src={Src}
                        data-demo-src={demoSrc}
                        alt=""
                        data-user-popover="17"
                      />
                      <img
                        className="badge"
                        src={Src}
                        data-demo-src="assets/img/icons/flags/germany.svg"
                        alt=""
                      />
                    </div>
                    <div className="flex-meta">
                      {children}
                    </div>
                  </div>
  );
};

export default Media;
