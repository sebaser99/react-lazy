import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"
import reactLogo from '../assets/react.svg'


export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img width={120} src={reactLogo} alt="React Logo" />
                <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'nav-active' : ''} to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'nav-active' : ''} to="/about" >About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'nav-active' : ''}  to="/users">Users</NavLink>
                    </li>
                </ul>
                
            </nav>

            <Routes>
                <Route path="about" element={<h1>About Page</h1>} />
                <Route path="users" element={<h1>Users Page</h1>} />
                <Route path="home" element={<h1>Home Page</h1>} />

                <Route path='/*' element={<Navigate to='/home' replace />} />
            </Routes>
        </div>

    </BrowserRouter>
  )
}
