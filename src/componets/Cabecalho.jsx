export default function Cabecalho({ avaliados = 0, total = 0, media = 0 }) {
    return (
        <header>
            <h1>Avaliador de filmes</h1>
            <p id="resumo">
                {avaliados} de {total} avaliados{" "}
                {avaliados > 0 && `média ${Number(media).toFixed(1)}`}
            </p>
        </header>
    );
}