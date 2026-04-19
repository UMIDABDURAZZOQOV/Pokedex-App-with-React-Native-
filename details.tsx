import { Image, Text, View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams, Stack } from "expo-router";

export default function Details() {
  const params = useLocalSearchParams();
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.name) fetchPokemonByName(params.name as string);
  }, [params.name]);

  async function fetchPokemonByName(name: string) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setPokemon(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack.Screen options={{ title: (params.name as string).toUpperCase() }} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
            <Image 
                source={{ uri: pokemon?.sprites.other['official-artwork'].front_default }} 
                style={styles.mainImage} 
            />
            <Text style={styles.title}>{pokemon?.name.toUpperCase()}</Text>
        </View>
        
        <View style={styles.infoCard}>
            <Text style={styles.sectionTitle}>Details:</Text>
            {pokemon?.stats.map((s: any) => (
                <View key={s.stat.name} style={styles.statRow}>
                    <Text style={styles.statName}>{s.stat.name}</Text>
                    <Text style={styles.statValue}>{s.base_stat}</Text>
                </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { alignItems: 'center', marginBottom: 20 },
  mainImage: { width: 200, height: 200 },
  title: { fontSize: 32, fontWeight: 'bold', marginTop: 10 },
  infoCard: { backgroundColor: '#f9f9f9', padding: 20, borderRadius: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4, borderBottomWidth: 1, borderBottomColor: '#eee' },
  statName: { textTransform: 'capitalize', color: '#666' },
  statValue: { fontWeight: 'bold' }
});