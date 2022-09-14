import { useEffect } from "react";


const Layout = ({ title = 'title', className, children }) => {

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div>
            <div className="mb-3">
                <h3>Menu</h3>
            </div>
            <div className={className}>{children}</div>
        </div>
    )
}

export default Layout;