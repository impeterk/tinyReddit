export default function Panel() {
  return (
    <div className="container">
     <article className="panel is-sticky has-background-info is-flex is-flex-direction-column min-h-full is-fullheight is-info">
  <p className="panel-heading">
    Info
  </p>
  
  <div className="panel-block">
    <p className="control has-icons-left">
      <input className="input is-info" type="text" placeholder="Search" />
      <span className="icon is-left">
        <i className="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <aside className="menu">
  <ul className="menu-list has-text-light">
    <li><a>Dashboard</a></li>
    <li><a>Customers</a></li>
  </ul>
  <p className="menu-label">
    Administration
  </p>
  <ul className="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a className="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </ul>
  <p className="menu-label">
    Transactions
  </p>
  <ul className="menu-list">
    <li><a>Payments</a></li>
    <li><a>Transfers</a></li>
    <li><a>Balance</a></li>
  </ul>
</aside>
  </article> 
    </div>
  )
}