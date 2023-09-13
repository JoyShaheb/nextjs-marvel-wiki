import MD5 from "crypto-js/md5";

const getHash = (ts: any, privateKey: any, publicKey: any) => {
  return MD5(ts + privateKey + publicKey).toString();
};

const baseURL = process.env.NEXT_PUBLIC_MARVEL_WIKI_BASE_URL;
let ts = Date.now().toString();
let apiKey = process.env.NEXT_PUBLIC_MARVEL_WIKI_PUBLIC_API_KEY;
let privateKey = process.env.NEXT_PUBLIC_MARVEL_WIKI_PRIVATE_API_KEY;

let hash = getHash(ts, privateKey, apiKey);

export const fetchCharactersURL = `${baseURL}/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
