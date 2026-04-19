import { Image, Text, View, ScrollView, StyleSheet, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { Link } from 'expo-router';



export default function Index() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemons();
  }, []);

  async function fetchPokemons() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
      const data = await response.json();
      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon: any) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            name: pokemon.name,
            image: details.sprites.other['official-artwork'].front_default || details.sprites.front_default,
            imageBack: details.sprites.back_default,
            types: details.types,
          };
        })
      );
      setPokemons(detailedPokemons);
    } catch (e) {
      console.log("Xatolik:", e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {pokemons.map((pokemon) => (
        <Link 
          key={pokemon.name} 
          href={{ pathname: '/details', params: { name: pokemon.name } }} 
          asChild
        >
          <Pressable style={({ pressed }) => [
            styles.card,
            { 
              backgroundColor: colorsByType[pokemon.types[0].type.name] || '#eee',
              opacity: pressed ? 0.9 : 1,
              transform: [{ scale: pressed ? 0.98 : 1 }]
            }
          ]}>
            <View style={styles.cardContent}>
              <View>
                <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
                <View style={styles.typeBadge}>
                   <Text style={styles.typeText}>{pokemon.types[0].type.name}</Text>
                </View>
              </View>
              <Image source={{ uri: pokemon.image }} style={styles.image} />
            </View>
          </Pressable>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  card: {
    borderRadius: 24,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name: { fontSize: 22, fontWeight: '900', color: 'white', textShadowColor: 'rgba(0,0,0,0.1)', textShadowRadius: 2 },
  typeBadge: { backgroundColor: 'rgba(255,255,255,0.3)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginTop: 8, alignSelf: 'flex-start' },
  typeText: { color: 'white', fontWeight: 'bold' },
  image: { width: 100, height: 100 },
});