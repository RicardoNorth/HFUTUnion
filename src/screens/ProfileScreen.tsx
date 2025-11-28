import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type MenuItem = {
  id: string;
  title: string;
  icon: string;
};


const menuItems = [
  { id: "1", title: "个人主页", icon: "person-outline" },
  { id: "2", title: "创作中心", icon: "create-outline" },
  { id: "3", title: "我的收藏", icon: "star-outline" },
  { id: "4", title: "设置", icon: "settings-outline" },
];

export default function ProfileScreen() {
  const renderItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemLeft}>
        <Icon name={item.icon} size={22} color="#4BA5E8" />
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
      <Icon name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.avatarWrap}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://ts3.tc.mm.bing.net/th/id/OIP-C.VCcgAcUd3Xv7HszQm8ZaJQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" }}
          />
        </View>
        <Text style={styles.name}>昵称</Text>
        <TouchableOpacity style={styles.settingsBtn}>
          <Icon name="settings-outline" size={24} />
        </TouchableOpacity>
      </View>

      {/* banner or vip card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>加入QQ群聊 868839367 参与内测 </Text>
      </View>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={{ marginTop: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    display: "flex",
  },
  avatarWrap: {
    flex: 1,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "600",
  },
  settingsBtn: {
    position: "absolute",
    top: 50,
    right: 16,
  },
  card: {
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "#007dc0",
    borderRadius: 10,
    // iOS 阴影
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    // Android 阴影
    elevation: 20,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 0,
    fontWeight: 600,
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    marginLeft: 12,
  },
});
