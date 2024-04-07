export async function getTopAnime(limit){
    const res = await fetch(`https://api.jikan.moe/v4/top/anime?${limit}`);
    const dataAnime = await res.json();
    return dataAnime
}