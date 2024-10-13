// Menu.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Menu = ({ handleLogout }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const copyToClipboard = async (content) => {
    await ExpoClipboard.setStringAsync(content); // Use ExpoClipboard here
    Alert.alert("Copied to Clipboard", content);
  };

  return (
    <View style={styles.containerr}>
      <View style={styles.container}>
        {/* Main Options */}
        <View style={styles.menuSection}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Ionicons
              name="home-outline"
              size={24}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Ionicons
              name="log-out-outline"
              size={24}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => setModalVisible(true)} // Show Contact Us Modal
          >
            <Ionicons
              name="call-outline"
              size={24}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.menuText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
        {/* Divider */}
        <View style={styles.divider}></View>

        {/* Quick Links Section */}
        <Text style={styles.quickLinksText}>Quick Links</Text>
        <View style={styles.menuSection}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("Order")}
          >
            <MaterialIcons
              name="shopping-cart"
              size={24}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.menuText}>Order</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("BuyAgain")}
          >
            <MaterialIcons
              name="repeat"
              size={24}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.menuText}>Buy Again</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("OrderList")}
          >
            <Ionicons
              name="list-outline"
              size={24}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.menuText}>Order List</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("Cart")}
          >
            <Ionicons
              name="cart-outline"
              size={24}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.menuText}>Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("Favorites")}
          >
            <MaterialIcons
              name="favorite-outline"
              size={24}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.menuText}>Favorite</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("Ledger")}
          >
            <Entypo name="book" size={24} color="#333" style={styles.icon} />
            <Text style={styles.menuText}>Ledger</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Contact Us</Text>

              {/* Email Section */}
              <TouchableOpacity
                style={styles.contactItem}
                onPress={() => copyToClipboard("example@email.com")}
              >
                <Ionicons
                  name="mail-outline"
                  size={24}
                  color="#333"
                  style={styles.icon}
                />
                <Text style={styles.contactText}>example@email.com</Text>
              </TouchableOpacity>

              {/* Phone Section */}
              <TouchableOpacity
                style={styles.contactItem}
                onPress={() => copyToClipboard("+123456789")}
              >
                <Ionicons
                  name="call-outline"
                  size={24}
                  color="#333"
                  style={styles.icon}
                />
                <Text style={styles.contactText}>+123456789</Text>
              </TouchableOpacity>

              {/* Close Button */}
              <Pressable
                style={styles.buttonClose}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    width: "100%",
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  container: {
    position: "absolute",
    flex: 1,
    borderRadius: 12,
    marginVertical: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.56,
    shadowRadius: 6,
    elevation: 9,
  },
  closeButton: {
    position: "absolute",
    top: 10, // Adjust top position
    right: 20, // Adjust right position
    zIndex: 1,
  },
  menuSection: {
    paddingRight: 200,

    paddingLeft: 30,
    marginVertical: 30,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  icon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 18,
    color: "#333",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 20,
  },
  quickLinksText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
    paddingHorizontal: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  textStyle: {
    backgroundColor: "#f2e01b",
    padding: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  containerr: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2e01b",
  },
});

export default Menu;
