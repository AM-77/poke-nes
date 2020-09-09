import axios from "axios"

const fetchPokemon = async (url) => {
  const res = await axios.get(url)
  const { id, name, height, weight, types, abilities, species, stats, sprites } = res.data 
  return { id, name, height, weight, types, abilities, species, stats, img: sprites.other.dream_world.front_default }
}

const loadPokes = async (page) => {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=30&offset=" + page * 30)
  const pokes = res.data.results.map((poke) => fetchPokemon(poke.url))
  const data = await Promise.all(pokes)  
  return { next: res.data.next, pokes: data }
}

export default loadPokes