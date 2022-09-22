import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <nav style={{ padding: '1rem' }} class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Pentcloud</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link href="/">
                                    <a class="nav-link">Inicio</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/">
                                    <a class="nav-link">Acerca de</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/">
                                    <a class="nav-link">Servicios</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/">
                                    <a class="nav-link">Contactanos</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/articulos">
                                    <a class="nav-link">Artículos</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}