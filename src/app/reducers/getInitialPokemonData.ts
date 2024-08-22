import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokemonRoutes } from "../../utils/Constant";

export const getInitialPokemonData = createAsyncThunk("pokemon/initialData", async ()=> {
    try {
        const { data } = await axios.get(pokemonRoutes);
        return data.results;
    } catch(err) {
        console.log(err);
    }
});