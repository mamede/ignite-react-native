import React from "react";
import { View, Image } from "react-native";

import { styles } from "./styles";

const logo = require("../../assets/Logo.png");

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} />
    </View>
  );
};

export default Header;