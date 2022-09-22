import Link from 'next/link'

export default function Inicio() {
    return (
        <div>
            <div>
                <header class="page-header gradient">
                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md-5">
                                <h1>Artículos Informativos</h1>

                                <p>
                                    Proporcionamos una forma sencilla de buscar ampliamente cualquier artículo de tu interes.
                                </p>
                                <Link href="/articulos">
                                    <button type="button" class="btn btn-outline-warning btn-lg">
                                        Nuestros Artículos
                                    </button>
                                </Link>
                            </div>
                            <div class="col-md-5">
                                <img
                                    src="/images/email_campaign_monochromatic.svg"
                                    alt="Header image"
                                />
                            </div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                        <path
                            fill="#fff"
                            fill-opacity="1"
                            d="M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,112C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </header>

                <section class="companies mb-5">
                    <div class="container text-center">
                        <div class="row g-4">
                            <div>
                                <h1>Articulos Informativos</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="icons">
                    <div class="container">
                        <div class="row text-center">
                            <div class="col-md-4">
                                <div class="icon gradient mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-layers"
                                    >
                                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                        <polyline points="2 17 12 22 22 17"></polyline>
                                        <polyline points="2 12 12 17 22 12"></polyline>
                                    </svg>
                                </div>
                                <h3>Todos los artículos</h3>
                                <p>
                                    Contamos con todos los artículos que puedas imaginar
                                </p>
                            </div>
                            <div class="col-md-4">
                                <div class="icon gradient mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-smartphone"
                                    >
                                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
                                    </svg>
                                </div>
                                <h3>Úsalo en tu teléfono</h3>
                                <p class="mb-0">
                                    Compatible con todos los dispositivos móviles o tablets
                                </p>
                            </div>
                            <div class="col-md-4">
                                <div class="icon gradient mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-layers"
                                    >
                                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                        <polyline points="2 17 12 22 22 17"></polyline>
                                        <polyline points="2 12 12 17 22 12"></polyline>
                                    </svg>
                                </div>
                                <h3>Artículos Interesantes</h3>
                                <p class="mb-0">
                                    Seguramente encontraras un artículo el cual te interese
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="services gradient">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                        <path
                            fill="#fff"
                            fill-opacity="1"
                            d="M0,96L34.3,106.7C68.6,117,137,139,206,122.7C274.3,107,343,53,411,53.3C480,53,549,107,617,117.3C685.7,128,754,96,823,96C891.4,96,960,128,1029,154.7C1097.1,181,1166,203,1234,202.7C1302.9,203,1371,181,1406,170.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
                        ></path>
                    </svg>
                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md-5">
                                <button type="button" class="btn btn-outline-warning mb-3">
                                    Autores
                                </button>

                                <h1>Autores favoritos</h1>

                                <p>
                                    Encontrarás artículos de todos tus autores favoritos.
                                </p>
                            </div>
                            <div class="col-md-5"><img src="images/marketing.svg" alt="" /></div>
                            <div class="col-md-5"><img src="images/marketing.svg" alt="" /></div>
                            <div class="col-md-5">
                                <button type="button " class="btn btn-outline-success mb-3">
                                    Categorías
                                </button>

                                <h1>Todo tipo de categorías</h1>

                                <p>
                                    Contamos con muchas categorías para que te encuentre identificado con una.
                                </p>
                            </div>
                            <div class="col-md-5">
                                <button type="button" class="btn btn-outline-light mb-3">
                                    Artículos
                                </button>

                                <h1>Gran cantidad de artículos</h1>

                                <p>
                                    Contamos con una gran base de datos con muchos artículos.
                                </p>
                            </div>
                            <div class="col-md-5"><img src="images/seo_monochromatic.svg" alt="" /></div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
                        <path
                            fill="#fff"
                            fill-opacity="1"
                            d="M0,96L34.3,106.7C68.6,117,137,139,206,122.7C274.3,107,343,53,411,53.3C480,53,549,107,617,117.3C685.7,128,754,96,823,96C891.4,96,960,128,1029,154.7C1097.1,181,1166,203,1234,202.7C1302.9,203,1371,181,1406,170.7L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                        ></path>
                    </svg>
                </section>

                <section style={{ marginBottom: '10rem' }} class="contact">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5">
                                <h1>Contáctanos:</h1>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="nombre@ejemplo.com"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">
                                        Mensaje
                                    </label>
                                    <textarea
                                        class="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                    ></textarea>
                                </div>
                                <button type="button" class="btn btn-outline-secondary">
                                    Enviar
                                </button>
                            </div>
                            <div class="col-md-5">
                                <img src="images/handshake.svg" alt="Contact image" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}