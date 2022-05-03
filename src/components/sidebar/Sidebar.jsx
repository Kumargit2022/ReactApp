import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img  class="sidebarImg" src="https://th.bing.com/th/id/OIP.wQiCe6pWL8WIa91r1big3wHaE4?pid=ImgDet&rs=1" alt="" />
            <p>
                Lore ipsum folor sit amet consecyor adipsicling alit
                neccesss.Lore ipsum folor sit amet consecyor adipsicling alit
                neccesssLore ipsum folor sit amet consecyor adipsicling alit
                neccesss. 
            </p>
        </div>
        <div className="sidebarItem">
           <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>
        </div>
        <div className="sidebarItem">
           <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sideBarIcon fab fa-facebook-square"></i>
            <i className="sideBarIcon fab fa-twitter-square"></i>
            <i className="sideBarIcon fab fa-pinterest-square"></i>
            <i className="sideBarIcon fab fa-instagram-square"></i>
        </div>
        </div>

    </div>
  )
}
