import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import Heart from "./heart";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      scale: new Animated.Value(0),
      animations: [
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0)
      ]
    };
    this.triggerLike = this.triggerLike.bind(this);
  }

  triggerLike() {
    this.setState({ liked: !this.state.like });

    Animated.spring(this.state.scale, {
      toValue: 2,
      friction: 3
    }).start(() => {
      this.state.scale.setValue(0);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableWithoutFeedback onPress={() => this.triggerLike}>
            <Animated.View>
              <Heart />Open up App.js to start working on your app!
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
