import MD5 from "crypto-js/md5";

export const getHash = (ts: any, privateKey: any, publicKey: any) => {
  return MD5(ts + privateKey + publicKey).toString();
};

export const baseURL = process.env.NEXT_PUBLIC_MARVEL_WIKI_BASE_URL;
export let ts = Date.now().toString();
export let apikey = process.env.NEXT_PUBLIC_MARVEL_WIKI_PUBLIC_API_KEY;
export let privateKey = process.env.NEXT_PUBLIC_MARVEL_WIKI_PRIVATE_API_KEY;

export let hash = getHash(ts, privateKey, apikey);

export const fetchCharactersURL = (search: string) => {
  const queryParams = search ? `name=${search}&` : "";

  return `${baseURL}/characters?${queryParams}ts=${ts}&apikey=${apikey}&hash=${hash}`;
};

export const baseURLWithCredentials = `${baseURL}/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`;
