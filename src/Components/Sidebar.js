import React, { useEffect } from 'react';
import "./sidebar.css";
import { Link, useLocation } from 'react-router-dom';

function Sidebar(props) {
    const { handleHeadingText, searchQuerySubmit, sourceName } = props;
    const location = useLocation();
    useEffect(() => {
        // Toggle the side navigation
        const sidebarToggle = document.body.querySelector('#sidebarToggle');
        if (sidebarToggle) {
            // Uncomment Below to persist sidebar toggle between refreshes
            if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
                document.body.classList.toggle('sb-sidenav-toggled');
            }
            const handleClick = event => {
                event.preventDefault();
                document.body.classList.toggle('sb-sidenav-toggled');
                localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
            };
            sidebarToggle.addEventListener('click', handleClick);
            return () => {
                sidebarToggle.removeEventListener('click', handleClick);
            };
        }
    }, []);
    useEffect(() => {
        if (location.pathname === '/') {
            handleHeadingText("Latest News")
        } else if (location.pathname === '/sources') {
            handleHeadingText("All Channels")
        } else if (location.pathname.includes("/search")) {
            handleHeadingText(`Search Results for "${searchQuerySubmit}"`)
        } else if (location.pathname.includes("/source/")) {
            handleHeadingText(`News from "${sourceName}"`)
        }
    }, [location]);

    // const [selectedItem, setSelectedItem] = useState(0);

    const listItems = [
        { text: 'Hot', heading: "Latest News", path: "/hot" },
        { text: 'Current', heading: "Latest News", path: "/Current" },
        { text: 'Briefly', heading: "Sources", path: "/Briefly" },
        { text: 'Specific Channel', heading: "Latest News", path: "/Specific" },
    ];

    // const handleItemClick = (index, headingText) => {
    //     setSelectedItem(index);
    //     // console.log(index)
    //     handleHeadingText(headingText);
    // };

    // let myStyle = {
    //     backgroundColor: '#e9ecef',
    //     color: 'rgb(16, 16, 16)',
    // }
    // console.log(location)

    return (
        <>
            <div className="border-end bg-white" id="sidebar-wrapper"> {/* Sidebar */}
                <div className="sidebar-heading border-bottom bg-light">News Type</div>
                <div id="sidebarList" className="list-group list-group-flush">

                    {/* Latest News */}
                    <Link
                        className={`list-group-item list-group-item-action list-group-item-light latestNewsBox ${location.pathname === '/' ? 'activeItem' : ''}`}
                        to="/">
                        Latest News
                    </Link>
                    {/* Sources ↓ */}
                    <Link
                        className={`list-group-item list-group-item-action list-group-item-light latestNewsBox ${location.pathname === '/sources' ? 'activeItem' : ''}`}
                        to="/sources">
                        All Channels
                    </Link>
                    {listItems.map((item, index) => (
                        <Link className={`list-group-item list-group-item-action list-group-item-light p-3 disabled ${location.pathname === item.path ? 'activeItem' : ''}`} to="#"
                            key={index + 4}> {item.text}</Link>
                    ))}
                </div>
            </div>

        </>
    );
}

export default Sidebar;
