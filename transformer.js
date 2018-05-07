const getTransformAnimation = (animation, scale, y, x, rotate, opacity) => {
  const scaleAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, scale]
  })
  const xAnimatoin = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, x]
  })

  const yAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, y]
  })

  const rotationAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", rotate]
  })

  const opacityAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, opacity]
  })

  return {
    opacity: opacityAnimation,
    transform: [
      { scale: scaleAnimation },
      { translateX: xAnimatoin },
      { translateY: yAnimation },
      { rotate: rotationAnimation }
    ]
  }
}

export default getTransformAnimation
