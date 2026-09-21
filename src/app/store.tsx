import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';

export default function Store() {
  const games = [
    {
      image: require('@/assets/images/wolverine.png'),
      title: 'Marvel’s Wolverine',
      description:
        'Jogue como o Wolverine. Aniquile os inimigos de maneira brutal e explosiva em uma disputa global pela sobrevivência dos mutantes.',
      price: 'R$ 399,90',
    },
    {
      image: require('@/assets/images/gta.png'),
      title: 'Grand Theft Auto VI: Ultimate Edition',
      description:
        'A história acompanha os protagonistas Lucia Caminos e Jason Duval, um casal de criminosos envolvidos em uma conspiração no estado fictício de Leonida.',
      price: 'R$ 549,90',
    },
    {
      image: require('@/assets/images/cod.png'),
      title: 'Call of Duty®: Black Ops II',
      description:
        'Jogue em uma Guerra Fria do século XXI em um futuro próximo, ambientado em 2025, onde armas e tecnologia avançada se uniram.',
      price: 'R$ 87,45',
    },
    {
      image: require('@/assets/images/aliens.png'),
      title: 'Aliens Roadside',
      description:
        'Jogo de simulação e gerenciamento onde você assume o papel de um alienígena disfarçado de humano.',
      price: 'R$ 82,50',
    },
    {
      image: require('@/assets/images/detroit.png'),
      title: 'Detroit: Become Human',
      description:
        'O mundo foi transformado pelo uso de androides criados pela empresa CyberLife. Máquinas começam a sentir emoções e viram os chamados "divergentes".',
      price: 'R$ 71,50',
    },
    {
      image: require('@/assets/images/forever_ago.png'),
      title: 'Forever Ago',
      description:
        'Após um acontecimento trágico, ele parte em uma viagem de van rumo ao norte em busca de redenção, aceitação e paz com o passado.',
      price: 'Ainda em lançamento',
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>PS Store</Text>

      <View style={styles.tabs}>
        <Pressable style={styles.activeTab}>
          <Text style={styles.activeTabText}>Novidades</Text>
        </Pressable>

        <Pressable style={styles.tab}>
          <Text style={styles.tabText}>Coleções</Text>
        </Pressable>

        <Pressable style={styles.tab}>
          <Text style={styles.tabText}>Ofertas</Text>
        </Pressable>

        <Pressable style={styles.tab}>
          <Text style={styles.tabText}>Assinaturas</Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Novidades</Text>

      {games.map((game, index) => (
        <View style={styles.card} key={index}>
          <Image
            source={game.image}
            style={styles.gameImage}
          />

          <View style={styles.gameInfo}>
            <Text style={styles.gameTitle}>
              {game.title}
            </Text>

            <Text style={styles.description}>
              {game.description}
            </Text>

            <Text style={styles.price}>
              {game.price}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
    paddingTop: 40,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },

  tabs: {
    flexDirection: 'row',
    marginBottom: 25,
    gap: 8,
  },

  activeTab: {
    flex: 1,
    height: 42,
    backgroundColor: '#00439c',
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeTabText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },

  tab: {
    flex: 1,
    height: 42,
    backgroundColor: '#111111',
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
  },

  tabText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 15,
  },

  card: {
    width: '82%',
    alignSelf: 'center',
    backgroundColor: '#111111',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
  },

  gameImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },

  gameInfo: {
    padding: 15,
  },

  gameTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    color: '#cccccc',
    lineHeight: 20,
    marginBottom: 12,
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});