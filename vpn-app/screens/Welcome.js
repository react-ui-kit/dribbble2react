import React, { Component } from "react";
import { Animated, Image, ScrollView, StyleSheet } from "react-native";
import { Block, Button, Text, Utils } from "expo-ui-kit";

// constants
import { images, theme } from "../constants";
const { background } = images;

// theme
const { rgba } = Utils;
const { SIZES, COLORS } = theme;

const backgrounds = [
  {
    title: "Secured, forever.",
    description:
      "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
    img: background.welcome
  },
  {
    title: "Encrypted, forever.",
    description:
      "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
    img: background.encrypted
  },
  {
    title: "Privacy, forever.",
    description:
      "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis.",
    img: background.privacy
  }
];

export default class Welcome extends Component {
  scrollX = new Animated.Value(0);

  state = {
    slideIndex: 0
  };

  componentDidMount() {
    this.scrollX.addListener(({ value }) => {
      this.setState({ slideIndex: Math.floor(value / SIZES.width) });
    });
  }

  renderImages() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: this.scrollX } } }
        ])}
      >
        {backgrounds.map((item, index) => (
          <Block
            center
            bottom
            key={`img-${index}`}
            style={{ width: SIZES.width }}
          >
            <Image
              source={item.img}
              resizeMode="center"
              style={{
                width: SIZES.width / 1.5,
                height: "100%"
              }}
            />
          </Block>
        ))}
      </ScrollView>
    );
  }

  renderDots() {
    const dotPosition = Animated.divide(this.scrollX, SIZES.width);

    return (
      <Block
        flex={false}
        row
        center
        middle
        margin={[SIZES.padding, 0, SIZES.padding * 2, 0]}
      >
        {backgrounds.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp"
          });

          return (
            <Block
              gray
              animated
              flex={false}
              key={`dot-${index}`}
              radius={SIZES.small}
              margin={[0, SIZES.small / 2]}
              style={[styles.dot, { opacity }]}
            />
          );
        })}
      </Block>
    );
  }

  renderTexts() {
    const { slideIndex } = this.state;
    const background = backgrounds[slideIndex];

    return (
      <React.Fragment>
        <Text animated h3 semibold theme={theme}>
          {background && background.title}
        </Text>
        <Text
          animated
          theme={theme}
          center
          caption
          gray
          margin={[SIZES.small, 0]}
        >
          {background && background.description}
        </Text>
      </React.Fragment>
    );
  }

  render() {
    const { navigation } = this.props;

    return (
      <Block safe>
        <Block center middle>
          {this.renderImages()}
        </Block>
        <Block flex={false} center bottom margin={60}>
          {this.renderTexts()}
          {this.renderDots()}
          <Button
            primary
            theme={theme}
            onPress={() => navigation.navigate("VPN")}
          >
            <Text
              center
              white
              caption
              bold
              margin={[SIZES.padding / 2, SIZES.padding * 2]}
            >
              GET STARTED
            </Text>
          </Button>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  dot: { width: SIZES.base, height: SIZES.base }
});
