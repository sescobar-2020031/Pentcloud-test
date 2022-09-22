import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const getServerSideProps = async () => {

    const client = new ApolloClient({
        uri: "https://blog-backend-blush.vercel.app/graphql",
        cache: new InMemoryCache()
    });

    const { data } = await client.query({
        query: gql`
        query obtenerArticulos{
            posts{
              rows{
                title
                body
                reactions
                author{
                  name
                }
                categories{
                  name
                }
              }
            }
          }
        `
    })

    return {
        props: {
            articulos: data.posts.rows
        }
    }
}

export default function Articulos({ articulos }) {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Articulos</h1>
            <div className='row text-center g-4' style={{ margin: "2rem"}}>
                {
                    articulos.map((articulo) => (
                        <div className='col-lg-3 col-sm-6'>
                            <div class="team-member card-effect" style={{ width: "18rem" }}>
                                <div class="card-body" key={articulo.id}>
                                    <h5 class="card-title">{articulo.title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Autor: {articulo.author.name}</h6>
                                    <h6 class="card-subtitle mb-2 text-muted">Categoría: {
                                        articulo.categories.map((categoria) => (
                                            " " + categoria.name + " "
                                        ))
                                    }</h6>
                                    <p class="card-text">{articulo.body}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <hr></hr>
            </div>
        </div>
    )
}