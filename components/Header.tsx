import Link from 'next/link'
function Header() {
    return (
    
        <nav className="navbar navbar-expand-lg bg-black py-4 px-lg-8" style={{padding:'0 12px'}}>
          <Link className="navbar-brand py-0" href='/'>
            <img src='/images/桌機版/logo.png' style={{ width: '192px', height: '72px' }} alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <i className="bi bi-list" style={{ color: 'white', fontSize: '24px' }}></i>
          </button>
          <div className="offcanvas offcanvas-end w-100 bg-black"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn text-reset text-white ms-auto" data-bs-dismiss="offcanvas" aria-label="Close">
              <i className="bi bi-x-lg text-white fs-3"></i>
              </button>
            </div>
            <div className="offcanvas-body">
            <ul className="navbar-nav mb-2 mb-lg-0 text-center">
              <li className="nav-item rounded">
                <a className="nav-link py-0 active text-white " aria-current="page" href="#">客房旅館</a>
              </li>
              <li className="nav-item rounded">
                <Link href='../auth/Login.tsx' className="nav-link py-0 text-white">會員登入</Link>
              </li>
              <li className="nav-item rounded">
                <a className="nav-link py-0 text-white" href="#">立即訂房</a>
              </li>
            </ul>
            </div>
          </div>
      </nav>
    )
}
export default Header