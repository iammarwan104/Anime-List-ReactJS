export async function getAnimeDetail(malId){
    // const res = await fetch(`https://api.jikan.moe/v4/anime/${malId}`);
    const res = await fetch(`https://api.jikan.moe/v4/anime/${malId}/full`);
    const dataAnime = await res.json();
    return dataAnime
}